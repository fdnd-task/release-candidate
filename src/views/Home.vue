<template>
  <div class="container">
    <h1>Home Page</h1>
  </div>

  <div>
    <!-- Hero section -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h1>Welcome to My Company</h1>
            <p class="lead">We provide top-notch services to our clients. Click the button below to learn more.</p>
            <router-link to="/services" class="btn btn-primary">View Our Services</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview section -->
    <section class="overview-section">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2 text-center">
            <h2>Who We Are</h2>
            <p>We are a team of experts who provide high-quality services to our clients. Our mission is to help businesses achieve success by providing them with the tools and expertise they need.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent work section -->
    <section class="recent-work-section">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2 text-center">
            <h2>Recent Work</h2>
            <p>Check out some of our recent work and see how we've helped our clients achieve success.</p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-4">
            <div class="card">
              <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Project Image">
              <div class="card-body">
                <h5 class="card-title">Project 1</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada magna eget metus blandit eleifend.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Project Image">
              <div class="card-body">
                <h5 class="card-title">Project 2</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada magna eget metus blandit eleifend.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Project Image">
              <div class="card-body">
                <h5 class="card-title">Project 3</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada magna eget metus blandit eleifend.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>


<style scoped>

</style>