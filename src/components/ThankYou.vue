<!-- components/ThankYouPage.vue -->
<template>
    <div class="thank-you-container text-center">
      <div class="checkmark-wrapper">
        <div class="checkmark"></div>
      </div>
      <h2 class="mt-4">Thank You!</h2>
      <p>The form was submitted successfully.</p>
      <b-button @click="$router.push('/')">Back to Previous Page</b-button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ThankYou',
    mounted() {
      // Optionally, you can reset form data here
    }
  };
  </script>
  
  <style scoped>
  .thank-you-container {
    padding-top: 100px;
  }
  
  .checkmark-wrapper {
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #e0f7e9;
    position: relative;
    animation: scaleIn 0.5s ease-out forwards;
  }
  
  .checkmark {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 20px;
    border-bottom: 4px solid #28a745;
    border-left: 4px solid #28a745;
    transform: translate(-50%, -50%) rotate(-45deg);
    opacity: 0;
    animation: checkmark 0.7s ease forwards;
  }
  
  @keyframes checkmark {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes scaleIn {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  </style>
  