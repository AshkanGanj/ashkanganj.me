<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light border-bottom fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Ashkan Ganj</a>
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
              <a class="nav-link" aria-current="page" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Publications</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Resume</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">CV</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <i class="bi bi-brightness-high"  @click="darkMode = !darkMode"></i>
              </a>
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

<style scoped></style>
