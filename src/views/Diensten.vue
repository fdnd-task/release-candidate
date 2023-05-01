<template>
  <div class="container">
    <h1 class="mt-5 mb-3">Our Services</h1>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="service in services" :key="service.id">
        <div class="card h-100">
          <img :src="service.image" class="card-img-top" :alt="service.name">
          <div class="card-body">
            <h5 class="card-title">{{ service.name }}</h5>
            <p class="card-text">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DienstenView',
  data() {
    return {
      services: [
        {
          id: 1,
          name: 'Web Design',
          description: 'We create beautiful and engaging web designs to help your business stand out online.',
          image: 'https://via.placeholder.com/300x200.png?text=Web+Design'
        },
        {
          id: 2,
          name: 'Web Development',
          description: 'Our team of experienced developers can build custom web applications to meet your business needs.',
          image: 'https://via.placeholder.com/300x200.png?text=Web+Development'
        },
        {
          id: 3,
          name: 'Mobile App Development',
          description: 'We build native and hybrid mobile apps for iOS and Android devices.',
          image: 'https://via.placeholder.com/300x200.png?text=Mobile+App+Development'
        }
      ]
    }
  }
}
</script>
