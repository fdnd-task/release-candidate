<template>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h4>Footer Heading</h4>
            <p>Some footer text goes here.</p>
            <button class="btn btn-primary">Primary Button</button>
          </div>
          <div class="col-md-4">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h4>Follow Us</h4>
            <ul class="list-inline">
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-md-6">
            <img src="path/to/logo.png" alt="Company Logo">
          </div>
          <div class="col-md-6">
            <p class="text-right">© 2023 Company Name. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: "FooterTwee"
}
</script>

<style scoped>
.footer {
  background-color: #f8f8f8;
  padding: 50px 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

ul li {
  margin-bottom: 10px;
}

ul li a {
  color: #333;
}

.list-inline li {
  display: inline-block;
  margin-right: 10px;
}

hr {
  border-top: 1px solid #ccc;
  margin-top: 50px;
  margin-bottom: 50px;
}

img {
  max-width: 100%;
  height: auto;
}
</style>