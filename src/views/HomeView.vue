<script setup>
import Header from "../components/Header.vue";
import About from "../views/About.vue";
import Resume from "../views/Resume.vue";
import Publication from "../views/Publication.vue";
import Skill from "../views/Skills.vue";
import Certificate from "../views/Certificate.vue";
</script>

<template>
  <Header />
  <main>
    <section class="mt-5">
      <About />
    </section>
    <section class="bg-light">
      <Resume />
    </section>
    <section>
      <Publication />
    </section>
    <section class="bg-light">
      <Skill />
    </section>
    <section>
      <Certificate />
    </section>
    <footer class="bg-light">
      <div class="d-flex align-items-center justify-content-center border-top container">
        <ul class="my-0">
          <li>&copy; Ashkan Ganj 2023</li>
          <li>Icons by <a href="https://icons8.com">Icons8</a></li>
        </ul>
      </div>
    </footer>
  </main>
</template>
<style scoped>
/* place the footer on bottom */
footer {
  position: absolute;
  /* bottom: 0; */
  width: 100%;
  height: 60px;
  line-height: 60px;
  /* background-color: #f5f5f5; */
}
</style>
