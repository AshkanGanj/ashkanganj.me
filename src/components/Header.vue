<template>
  <header>
    <nav class="navbar navbar-expand-lg fixed-top bg-dark">
      <div class="container text-white py-2 border-bottom ">
        <a class="navbar-brand fs-3" href="#">Ashkan <span>Ganj</span></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/AshkanGanj" target="_blank">Projects(Github)</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Ashkan_Ganj_CV.pdf">CV</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref } from 'vue';

const darkMode = ref(false); // Initially set to false for light mode

console.log(darkMode.value);

</script>

<style scoped>
.navbar{
  height: 75px;
  font-size: large;
  font-family: 'Work Sans';
}
@media (max-width: 990px) {
  .navbar{
    height: auto;
  }
}

.navbar-brand span{
  color: rgb(29, 149, 230);
}
</style>
