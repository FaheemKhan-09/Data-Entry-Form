<template>
  <div class="container mt-5">
    <div class="form">
    <!-- Form -->
     <h2>DATA ENTRY FORM</h2>
    <b-form @submit.prevent="submitForm">
      <b-row>
        <b-col md="6">
          <b-form-group
           label="First Name"
           >
            <b-form-input 
            v-model="firstName" 
            placeholder="FirstName"
            >
          </b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
           label="Last Name"
           >
            <b-form-input 
            v-model="lastName" 
            placeholder="LastName"
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
             placeholder="email@gmail.com"
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
      jobTitle: '',
    };
  },
  methods: {
    submitForm(){
      this.$router.push('/thankyou');
    },
  }
};
</script>


<style>
.form{
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.form h2{
  color: black;
  text-align: center;
  font-size:xx-large;
  font-weight: 700;
  text-decoration: underline;
}
</style>
