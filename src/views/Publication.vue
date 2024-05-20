<template>
  <div class="container border-bottom">
    <div class="text-start pt-4">
      <h2>Research</h2>
      <p class="text-justify">
        My research is mainly focused on computer vision, 3D vision, and mobile Augmented Reality(AR). Currently, I am
        working on a fundamental task of 3D vision: depth estimation. I am looking to improve the accuracy and
        robustness of current depth estimation models and better integrate these models into mobile AR scenarios.
        For full list of my publications, please visit <a href="https://scholar.google.com/citations?user=Zk68YogAAAAJ&hl=en" target="_blank">here.</a>
      </p>
    </div>
    <div class="row">
      <div class="col-md-12" v-for="(publication, index) in publications" :key="index">
        <div class="row my-2">
          <div class="col-lg-3">
            <img class="img-fluid" :src="publication.img" alt="Publication Image" />
          </div>
          <div class="col-lg-9">
            <div
              :class="['publication-item p-3', index % 2 === 0 ? 'bg-body-tertiary' : 'bg-body-secondary']">
              <div class="d-flex justify-content-between">
                <h5 class="text-truncate" style="max-width: 85%;">{{ publication.title }}</h5>
                <span class="d-none d-md-block">{{ publication.date }}</span>
              </div>
              <div class="pb-2">
                <template v-for="(author, index) in publication.authors" :key="index">
                  <span class="fst-italic">
                    <template v-if="author === 'Ashkan Ganj'">
                      <span class="me">{{ author }}</span>
                    </template>
                    <template v-else>
                      {{ author }}
                    </template>
                    <template v-if="index < publication.authors.length - 1">,
                    </template>
                  </span>
                </template>
              </div>
              <p>
                <span class="" v-if="publication.venue">{{ publication.venue }} :</span>
                {{ publication.journal }}
              </p>
              <div v-if="publication.award" class="fw-bold mb-2">
                🏆 {{ publication.award }}
              </div>
              <div class="btn-group publication-link">
                <a v-if="publication.link" :href="publication.link" target="_blank" class="btn btn-outline-secondary text-body-secondary">
                  <i class="bi bi-file-earmark-pdf"></i> Paper
                </a>
                <a v-if="publication.website" :href="publication.website" target="_blank" class="btn btn-outline-secondary text-body-secondary">
                  <i class="bi bi-globe"></i> Website
                </a>
                <a v-if="publication.github" :href="publication.github" target="_blank" class="btn btn-outline-secondary text-body-secondary">
                  <i class="bi bi-github"></i> Code
                </a>
                <a v-if="publication.arxiv" :href="publication.arxiv" target="_blank" class="btn btn-outline-secondary text-body-secondary">
                  arxiv
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publications: [
        {
          title: "Mobile AR Depth Estimation: Challenges & Prospects",
          img: "/img/papers/MobileARDepth.png",
          date: "February-2024",
          venue: "HotMobile 2024",
          journal:
            "The 25th International Workshop on Mobile Computing Systems and Applications",
          authors: ["Ashkan Ganj", "Yiqin Zhao", "Hang Su", "Tian Guo"],
          award: "",
          arxiv: "https://arxiv.org/pdf/2310.14437.pdf",
          link: "https://dl.acm.org/doi/10.1145/3638550.3641122",
          website: "",
          github: "https://github.com/cake-lab/Mobile-AR-Depth-Estimation",
        },
        {
          title: "Toward Scalable and Controllable AR Experimentation",
          img: "/img/papers/expar.png",

          date: "October-2023",
          venue: "ImmerCom'23",
          journal:
            "1st ACM Workshop on Mobile Immersive Computing, Networking, and Systems",
          authors: [
            "Ashkan Ganj",
            "Yiqin Zhao",
            "Federico Galbiati",
            "Tian Guo",
          ],
          award: "Best Paper Runner-up Award",
          arxiv: "https://arxiv.org/abs/2307.08587",
          link: "https://dl.acm.org/doi/abs/10.1145/3615452.3617941",
          website: "https://cake.wpi.edu/expar/",
          github: "",
        },
        {
          title:
            "LR-Net: A Block-based Convolutional Neural Network for Low-Resolution Image Classification",
          img: "/img/papers/LR-Net.png",

          date: "June-2023",
          journal:
            "Iranian Journal of Science and Technology, Transactions of Electrical Engineering ",
          authors: [
            "Ashkan Ganj",
            "Mohsen Ebadpour",
            "Mahdi Darvish",
            "Hamid Bahador",
          ],
          arxiv: "https://arxiv.org/abs/2207.09531",
          link: "https://link.springer.com/article/10.1007/s40998-023-00618-5",
          github: "https://github.com/AshkanGanj/LR-Net",
        },
      ],
    };
  },
};
</script>

<style scoped>
.publication-item {
  border-radius: 0px;
  margin-bottom: 5px;
}

.publication-item h5 {
  /* font-size: 24px; */
  color: rgb(29, 149, 230);
}

.publication-item p {
  margin-bottom: 8px;
}

.me {
  font-weight: bold;
}

.btn {
  padding: 2px 5px;
  font-size: 15px;
}
</style>
