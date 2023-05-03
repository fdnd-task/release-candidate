<template>
  <footer class="bg-dark text-light py-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4">
          <h3 class="mb-3">Footer Heading</h3>
          <button class="btn btn-primary">Primary Button</button>
        </div>
        <div class="col-6 col-md-2">
          <ul class="list-unstyled">
            <li><a href="#" class="text-primary">Primary Link</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </div>
        <div class="col-6 col-md-2">
          <ul class="list-unstyled">
            <li><a href="#">Link 4</a></li>
            <li><a href="#">Link 5</a></li>
            <li><a href="#">Link 6</a></li>
          </ul>
        </div>
        <div class="col-12 col-md-4">
          <div class="row">
            <div class="col-12 col-sm-6 mb-3 mb-sm-0">
              <img src="path/to/your/logo.png" alt="Your Logo" class="img-fluid">
            </div>
            <div class="col-12 col-sm-6">
              <ul class="list-inline mb-0">
                <li class="list-inline-item"><a href="#"><i class="fab fa-facebook fa-lg"></i></a></li>
                <li class="list-inline-item"><a href="#"><i class="fab fa-twitter fa-lg"></i></a></li>
                <li class="list-inline-item"><a href="#"><i class="fab fa-instagram fa-lg"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-4">
      <p class="text-center">&copy; Your Company Name {{ new Date().getFullYear() }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

