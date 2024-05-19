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
      <Publication />
    </section>
    <section>
      <Resume />
    </section>
    <!-- <section class="">
      <Skill />
    </section> -->
    <!-- <section>
      <Certificate />
    </section> -->
    <footer clas>
      <div class="border-top container">
        <ul class="text-center">
          <li>&copy; Ashkan Ganj (Last updated: May 2024)</li>
          <li>You can find my template <a class="link-secondary" href="https://github.com/AshkanGanj/ashkanganj.me/tree/main">here</a></li>
        </ul>
      </div>
    </footer>
  </main>
</template>
<style scoped>
.footer-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

ul {
  list-style: none;
  padding: 10px;
  margin: 0;
}

ul li {
  padding: 4px;
}
</style>
