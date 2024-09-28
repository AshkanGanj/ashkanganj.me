<template>
  <div class="py-4 container">
    <div class="row">
      <div class="col-lg-4 text-center">
        <img src="/img/me.JPG" alt="Ashkan Ganj" class="img-fluid shadow rounded-0" />
      </div>
      <div class="col-lg-8">
        <h1 style="font-family: 'Work Sans';">Hello!</h1>
        <p class="text-justify description">
          I am a second year M.S./Ph.D. student in Computer Science at <span><a href="https://www.wpi.edu/"
              target="_blank">Worcester
              Polytechnic Institute (WPI)</a></span>, advised by <span><a href="https://tianguo.info/" target="_blank">
              Prof. Tian Guo</a></span>. I'm part of the <span><a href="#">Cake Lab</a></span>. My research focuses on
          computer vision, particularly 3D vision, and its applications in Augmented Reality(AR).
        </p>
        <p class="text-justify description"> I did my B.E. in Electrical and Computer Engineering at the <span><a
              href="https://uma.ac.ir/index.php?slc_lang=en">University of Mohaghegh Ardabili(UMA)</a></span>, where I
          worked
          on system development, network security, and computer vision. During my Bachelor, I also worked as a part-time
          web developer at <span><a href="https://ravanertebat.com/">Access Endless
              Communication(AEC),</a></span>company.</p>
        <div class="btn-group profile-links">
          <a href="https://www.linkedin.com/in/ashkan-ganj" class="btn btn-outline-secondary text-body-secondary" v-tooltip.bottom="'LinkedIn'"
            target="_blank">
            <i class="bi bi-linkedin d-none d-sm-inline"></i> LinkedIn
          </a>
          <a href="https://github.com/AshkanGanj" class="btn btn-outline-secondary text-body-secondary" v-tooltip.bottom="'GitHub'"
            target="_blank">
            <i class="bi bi-github d-none d-sm-inline"></i> Github
          </a>
          <a href="https://scholar.google.com/citations?user=Zk68YogAAAAJ&hl=en" class="btn btn-outline-secondary text-body-secondary"
            v-tooltip.bottom="'Google Scholar'" target="_blank">
              <i class="bi d-none d-sm-inline bi-google"></i> Google Scholar
          </a>
          <a href="https://twitter.com/GanjAshkan" class="btn btn-outline-secondary text-body-secondary" v-tooltip.bottom="'Twitter'"
            target="_blank">
              <i class="bi bi-twitter d-sm-inline d-none"></i> X
          </a>
          <a href="mailto:aganj@wpi.edu" class="btn btn-outline-secondary text-body-secondary">
            <i class="bi bi-envelope-fill d-none d-sm-inline"></i> Email
          </a>
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

.profile-links >.btn{
  padding: 2px 5px;
  /* font-size: small; */
}

.profile-links > a {
  font-size: 0.96rem;
  /* margin: 2px 2px; */
}
 
.img-fluid {
  max-width: 100%;
  height: 300px;
}

@media (max-width: 992px) {
  .img-fluid {
    height: 250px;
    margin-bottom: 20px;
  }
  .profile-links{
    text-align: start!important;
  }
} 

</style>