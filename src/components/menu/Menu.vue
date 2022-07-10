<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Title
          </th>
          <th class="text-left">
            Description
          </th>
          <th class="text-left">
            Date
          </th>
          <th class="text-right">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in treatments"
          :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.treatmentDate }}</td>
          <td>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text>
                Delete
              </v-btn>
            </v-card-actions>
          </td>
        </tr>
        <tr>
          <td>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text>
                Add
              </v-btn>
            </v-card-actions>
          </td>
        </tr>
      </tbody>
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
            table: []
        }
    },
    methods: {
      goToLink(where) {
        this.$router.push(where);
      }
    }
}
</script>