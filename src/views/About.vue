<template>
  <div class="pt-5 container">
    <div class="row">
      <div class="col-md-4">
        <img src="../assets/img/main.jpg" alt="Ashkan Ganj" class="img-fluid shadow-sm" />
      </div>
      <div class="col-md-8">
        <h1>Hello!</h1>
        <p class="text-justify">
          I am a first-year computer science MS/Ph.D student at Worcester
          Polytechnic Institute (WPI), and a proud member of the Cake Lab
          research group advised by my kind advisor Prof. Tian Guo.
        </p>
        <p class="text-justify">
          My research interests lie in the field of Computer Vision,
          particularly in how it can be applied to Augmented Reality systems. I
          am fascinated by the potential of Augmented Reality to enhance the way
          we interact with the world around us, and I believe that Computer
          Vision can play a vital role in making AR systems more effective. In
          addition to my interest in Computer Vision, I am also passionate about
          Optimization and System Design. I believe that these fields are
          critical for improving the performance of Augmented Reality systems
          and making them more accessible to a wider audience.
        </p>
        <div class="text-center pb-4">
          <button
            class="btn btn-outline-secondary mx-2"
            @click="open('linkedin')"
            v-tooltip.bottom="'LinkedIn'"
          >
            <i class="bi bi-linkedin"></i>
          </button>
          <button
            class="btn btn-outline-secondary mx-2"
            @click="open('github')"
            v-tooltip.bottom="'GitHub'"
          >
            <i class="bi bi-github"></i>
          </button>
          <button
            class="btn btn-outline-secondary mx-2"
            @click="open('scholar')"
            v-tooltip.bottom="'Google scholar'"
          >
            <i class="bi bi-google"></i>
          </button>
          <button
            class="btn btn-outline-secondary mx-2"
            @click="open('twitter')"
            v-tooltip.bottom="'twitter'"
          >
            <i class="bi bi-twitter"></i>
          </button>
          <button
            class="btn btn-outline-secondary mx-2"

            @click="toggleEmailVisibility"
          >
            <i class="bi bi-envelope-fill"></i>
          </button>
          <transition-group name="list" tag="p">
            <p
              class="email-item"
              v-if="emailVisible"
              v-for="email in emails"
              :key="email"
            >
              <i class="bi bi-envelope-fill"></i> {{ email }}
            </p>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";



const emailVisible = ref(false);
const emails = ref(["AshkanGanj@gmail.com", "aganj@wpi.edu"]);

const toggleEmailVisibility = () => {
  emailVisible.value = !emailVisible.value;
};

const open = (url) => {
  switch (url) {
    case "linkedin":
      window.open("https://www.linkedin.com/in/ashkan-ganj/");
      break;
    case "github":
      window.open("https://github.com/AshkanGanj");
      break;
    case "scholar":
      window.open("");
      break;
    case "twitter":
      window.open("https://twitter.com/GanjAshkan");
      break;
    default:
      break;
  }
};
</script>

<style scoped>
.list-move {
  transition: transform 0.5s;
}
.email-item {
  font-size: 1.2rem;
  margin-top: 1rem;
  background-color: #e0e0e0;
  padding: 0.2rem 0.4rem;
  /* border-radius: 10px; */
  display: inline-block;
  margin: 10px 5px;
}
.img-fluid {
  border-radius: 10px;
}
</style>