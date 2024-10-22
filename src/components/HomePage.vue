<template>
  <div class="container mt-5">
    <!-- Form -->
     <h2 style="text-align: center; color: red ">DATA ENTRY FORM</h2>
    <b-form @submit.prevent="submitForm">
      <b-row>
        <b-col md="6">
          <b-form-group
           label="First Name"
           >
            <b-form-input 
            v-model="firstName" 
            placeholder="Faheem"
            >
          </b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
           label="Last Name">
            <b-form-input 
            v-model="lastName" 
            placeholder="Khan"
            >
          </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <b-form-group 
          label="Email Address"
          >
            <b-form-input 
            v-model="email" 
            type="email"
             placeholder="@gmail.com"
             >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <b-form-group 
          label="Job Title"
          >
            <b-form-input 
            v-model="jobTitle"
             placeholder="Assistant Manager"
             >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
    <router-link to="/thankyou"><b-button variant="success" type="submitForm" >Submit</b-button></router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: ''
    };
  },
  methods: {
    submitForm(){
      this.$router.push('/thankyou');
        
    }
  }
};
</script>

<style scoped>

</style>
