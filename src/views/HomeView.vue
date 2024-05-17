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
    <section class="">
      <About />
    </section>
    <section class="">
      <Resume />
    </section>
    <section>
      <Publication />
    </section>
    <section class="">
      <Skill />
    </section>
    <section>
      <Certificate />
    </section>
    <footer class="">
      <div class="border-top container">
        <ul class="text-center">
          <li>&copy; Ashkan Ganj 2023</li>
          <li>Icons by <span><a href="https://icons8.com/">icons8</a></span></li>
        </ul>
      </div>
    </footer>
  </main>
</template>
<style scoped>


.footer-wrap{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
ul{
  list-style: none;
  padding: 10px;
  margin: 0;
}
ul li{
  padding: 4px;
}
</style>
