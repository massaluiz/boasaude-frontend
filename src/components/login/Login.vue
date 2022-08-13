<template>
   <v-app id="inspire">
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>{{ $ml.get('login-form') }}</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              prepend-icon="person"
                              name="login"
                              :label="$ml.get('login')"
                              type="text"
                              v-model="user.login"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              prepend-icon="lock"
                              name="password"
                              :label="$ml.get('password')"
                              type="password"
                              v-model="user.password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="login">{{$ml.get('enter')}}</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>
</template>

<script>
export default {
   name: 'Login',
   props: {
      source: String,
   },
   data: () => ({
      user:{
          login: '',
          passowrd:''
      }
    }),
    methods: {
      login() {
         //Fake login to apresetation!
         if(this.user.login === "LUIZ") {
            this.$router.push({name: 'menu'});
         } else if(this.user.login === "ADMIN") {
            this.$router.push({name:'dashboard'});
         } else {
            //TODO: Impl dashboard
            this.$router.push({name: 'menu'});
         }
        
      }
    }
};
</script>

<style></style>
