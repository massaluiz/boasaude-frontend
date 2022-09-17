<template>
  <v-card>
    <v-tabs v-model="tab" background-color="dark accent-4" centered dark icons-and-text>
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-0">
        Analisar Atendimentos
      </v-tab>
      <v-tab href="#tab-1">
        Atendimentos: {{  countTreatments  }}
      </v-tab>
      <v-tab href="#tab-2">
        Especialidades: {{  countEsp  }}
      </v-tab>
      <v-tab href="#tab-3">
        Remarcações: {{  countRec  }}
      </v-tab>
      <v-tab href="#tab-4">
        Cancelados: {{  countCancelados  }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="i in 4" :key="i" :value="'tab-' + i">
        <v-card flat>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Atendimento
                  </th>
                  <th class="text-left">
                    Ação
                  </th>
                  <th class="text-left">
                    Data da Ação
                  </th>
                  <th class="text-left">
                    Usuário
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in tracks" :key="item.id">
                  <td>{{  item.id  }}</td>
                  <td>{{  item.action  }}</td>
                  <td>{{  item.createAt.substring(0, 10)  }}</td>
                  <td>{{  item.user  }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-tab-item>
      <v-tab-item :key="0" :value="'tab-0'">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Title
                </th>
                <th class="text-left">
                  Especialidade
                </th>
                <th class="text-left">
                  Médico
                </th>
                <th class="text-left">
                  Convenio
                </th>
                <th class="text-left">
                  Date
                </th>
                <th class="text-left">
                  Status
                </th>
                <th class="text-left">
                  Description
                </th>
                <th class="text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in treatments" :key="item.id">
                <td>{{  item.title  }}</td>
                <td>{{  item.speciality  }}</td>
                <td>{{  item.doctor  }}</td>
                <td>{{  item.healthInsurance  }}</td>
                <td>{{  item.treatmentDate.substring(0, 10)  }}</td>
                <td>{{  item.status  }}</td>
                <td>{{  item.description  }}</td>
                <td>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="autorization(item.id)">
                      Autorizar
                    </v-btn>
                  </v-card-actions>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>


<script>
import TreatmentController from '../../controller/TreatmentController';
import axios from '../../axios';

export default {
  created() {
    this.treatmentController = new TreatmentController(axios);
    this.treatmentController.getTracks()
      .then((response) => {
        this.tracks = response;


        response.forEach(element => {
          switch (element.action) {
            case 'ADD_TREATMENT':
              this.countTreatments = this.countTreatments + 1;
              break;
            case 'DELETE_TREATMENT':
              this.countCancelados = this.countCancelados + 1;
              break;
            case 'EDIT_TREATMENT':
              this.countEsp = this.countEsp + 1;
              break;
            case 'CHANGE_TREATMENT_DATE':
              this.countRec = this.countRec + 1;
              break;
            default:
              console.log(`Sorry, we are out.`);
          }
        });
      });

    this.treatmentController = new TreatmentController(axios);
    this.treatmentController.getListByStatus("Under Analysis")
      .then((response) => {
        this.treatments = response;
      });
  },
  data() {
    return {
      tab: null,
      tracks: {},
      countTreatments: 0,
      countEsp: 0,
      countRec: 0,
      countCancelados: 0,
      treatments: {},
    }
  },
  methods: {
    autorization(id) {
      this.treatmentController.autorizationHealthInsurance(id)
      .then((response) => {
        console.log(response);
        this.$router.go(this.$router.currentRoute);
      });
    }
  }
}
</script>