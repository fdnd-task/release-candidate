<template>
  <div class="container">
    <h1 class="mt-5 mb-3">Contact Us</h1>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Name:</label>
        <input type="text" class="form-control" id="name" v-model="name" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message:</label>
        <textarea class="form-control" id="message" v-model="message" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "ContactView",
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    onSubmit() {
      // Code to handle form submission goes here
      console.log('Form submitted!')
    }
  }
}
</script>
