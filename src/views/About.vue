<template>
  <div class="py-5 container border-bottom">
    <div class="row">
      <div class="col-md-4">
        <img src="/img/main.jpg" alt="Ashkan Ganj" class="img-fluid shadow-sm rounded-1" />
      </div>
      <div class="col-md-8">
        <h1 style="font-family: 'Work Sans';">Hello!</h1>
        <p class="text-justify">
          I am a computer science Ph.D. student at <span><a href="https://www.wpi.edu/" target="_blank">Worcester
              Polytechnic Institute (WPI)</a></span>, advised by my kind advisor <span><a href="https://tianguo.info/"
              target="_blank"> Prof. Tian Guo</a></span>. I'm part of the <span><a href="#">Cake Lab</a></span>,
          focusing on research in computer vision and its application on mobile AR
        </p>
        <p class="text-justify">
          My research is primarily centered on the field of Computer Vision, with a profound emphasis on 3D vision and
          its pivotal role in enhancing Augmented Reality (AR) systems. My interest is driven by the belief that 3D
          vision technology is fundamental to unlocking the full potential of AR, providing more immersive and
          interactive experiences that seamlessly blend the digital with the physical. The core of my work involves not
          only advancing 3D vision techniques but also exploring their innovative applications in AR environments. This
          includes the development of more sophisticated AR systems that can understand and interact with the 3D
          structure of the real world in real-time. Additionally, I am committed to the study and application of
          Optimization and System Design principles, as these are essential for improving AR system performance and user
          accessibility. Through my research, I aim to contribute to the evolution of AR and 3D vision applications,
          making them more intuitive, effective, and accessible for users worldwide.
        </p>
        <div class="text-start">
          <button class="btn btn-outline-secondary mx-1" @click="open('linkedin')" v-tooltip.bottom="'LinkedIn'">
            <i class="fs-5 bi bi-linkedin"></i>
          </button>
          <button class="btn btn-outline-secondary mx-1" @click="open('github')" v-tooltip.bottom="'GitHub'">
            <i class="fs-5 bi bi-github"></i>
          </button>
          <button class="btn btn-outline-secondary mx-1" @click="open('scholar')" v-tooltip.bottom="'Google scholar'">
            <i class="fs-5 bi bi-google"></i>
          </button>
          <button class="btn btn-outline-secondary mx-1" @click="open('twitter')" v-tooltip.bottom="'twitter'">
            <i class="fs-5 bi bi-twitter"></i>
          </button>
          <button class="btn btn-outline-secondary mx-1" @click="toggleEmailVisibility">
            <i class="fs-5 bi bi-envelope-fill"></i>
          </button>
          <transition-group name="list" tag="p">
            <p class="email-item" v-if="emailVisible" v-for="email in emails" :key="email">
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
      window.open("https://scholar.google.com/citations?user=Zk68YogAAAAJ&hl=en");
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
p {
  font-size: large;
}

.list-move {
  transition: transform 0.5s;
}

.email-item {
  font-size: 1.2rem;
  margin-top: 1rem;
  background-color: #000;
  padding: 0.4rem 0.5rem;
  border-radius: 5px;
  display: inline-block;
  margin: 10px 5px;
}

.img-fluid {
  border-radius: 10px;
}
</style>