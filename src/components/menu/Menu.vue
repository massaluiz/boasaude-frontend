<template>
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
          <td>{{ item.title }}</td>
          <td>{{ item.speciality }}</td>
          <td>{{ item.doctor }}</td>
          <td>{{ item.healthInsurance }}</td>
          <td>{{ item.treatmentDate.substring(0, 10) }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.description }}</td>
          <td>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="remove(item.id)">
                Delete
              </v-btn>
            </v-card-actions>
          </td>
        </tr>
      </tbody>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Add Treatment
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="name" label="Nome Completo"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date"
                      transition="scale-transition" offset-y min-width="auto">
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="date" label="Data da Consulta" prepend-icon="mdi-calendar" v-bind="attrs"
                          v-on="on"></v-text-field>
                      </template>
                      <v-date-picker v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">
                          Cancelar
                        </v-btn>
                        <v-btn text color="primary" @click="$refs.menu.save(date)">
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-select :items="['Clinico Geral', 'Pediatra', 'Oftalmo', 'Cardiologista']" label="Especialidade"
                      v-model="speciality"></v-select>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-select :items="['Jorge Fernando', 'Julia Pessoa', 'Marcos Antonio', 'Isabella Candida']" label="Médico"
                      v-model="doctor"></v-select>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-select :items="['SulAmerica', 'Bradesco', 'Unimed', 'HapiVida']" label="Convenio"
                      v-model="healthInsurance"></v-select>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-textarea v-model="description" name="input-7-1" label="Observações"
                      hint="Descreva sua necessidade"></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </v-simple-table>
</template>

<script>
import TreatmentController from '../../controller/TreatmentController';
import axios from '../../axios';

export default {

  name: "Menu",
  components: {

  },
  created() {
    this.treatmentController = new TreatmentController(axios);
    this.treatmentController.getListByUser("Luiz")
      .then((response) => {
        this.treatments = response;
      });
  },
  data() {
    return {
      treatments: {},
      table: [],
      dialog: false,
      menu: false,
      name: "Luiz Massa",
      date: "",
      speciality: "",
      description: "",
      user: "Luiz",
      doctor: "",
      healthInsurance: ""
    }
  },
  methods: {
    save() {
      this.treatmentController.addTreatment({
                                              id:"",
                                              title:"Atendimento Médico",
                                              treatmentDate: this.date,
                                              createAt:"",
                                              description: this.description,
                                              speciality: this.speciality,
                                              user: this.user,
                                              doctor: this.doctor,
                                              healthInsurance: this.healthInsurance
                                             })
      .then((response) => {
        console.log(response);
        this.$router.go(this.$router.currentRoute);
      });
    },
    remove(id) {
      this.treatmentController.removeTreatment(id)
      .then((response) => {
        console.log(response);
        this.$router.go(this.$router.currentRoute);
      });
    }
  }
}
</script>