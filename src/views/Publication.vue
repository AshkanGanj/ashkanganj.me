<template>
    <div class="container pb-3">
        <div class="text-start py-2 pt-4">
            <h2 class="section-title"> Publications </h2>
        </div>
        <div class="row">
            <div class="col-md-12" v-for="(publication, index) in publications" :key="index">
                <div class="row border-bottom py-4 my-3">
                    <div class="col-md-3">
                            <img class="img-fluid mb-2" :src="publication.img" alt="Publication Image">
                    </div>
                    <div class="col-md-9">
                        <div class="publication-item">
                            <h3>{{ publication.title }}</h3>
                            
                            <div class="d-flex">
                                <span class="badge-btn date">{{ publication.date }}</span>
                                <span class="me-2" style="color: rgb(93, 181, 251);">|</span>
                                <a v-if="publication.link" :href="publication.link" target="_blank"
                                    class="badge-btn">Paper</a>
                                <a v-if="publication.website" :href="publication.website" target="_blank"
                                    class="badge-btn">Project</a>
                                <a v-if="publication.arxiv" :href="publication.arxiv" target="_blank"
                                    class="badge-btn">arxiv</a>
                                <a v-if="publication.github" :href="publication.github" target="_blank"
                                    class="badge-btn">Code</a>
                            </div>
                            <p></p>
                            <p v-if="publication.award">
                                <span class="award"><span class="">🏆</span> {{ publication.award }}</span>
                            </p>
                            <p>
                                <em> <span class="pub-venue" v-if="publication.venue">{{ publication.venue }} :</span> {{
                                    publication.journal }}</em>
                            </p>
                            <p>
                                Authors:
                                <template v-for="(author, index) in publication.authors" :key="index">
                                    <span>
                                        <template v-if="author === 'Ashkan Ganj'">
                                            <span class="me">{{ author }}</span>
                                        </template>
                                        <template v-else>
                                            {{ author }}
                                        </template>
                                        <template v-if="index < publication.authors.length - 1">, </template>
                                    </span>
                                </template>
                            </p>
                            
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
                    title:
                        "Mobile AR Depth Estimation: Challenges & Prospects",
                    img: "/img/papers/MobileARDepth.png",
                    date: "February-2024",
                    venue: "HotMobile 2024",
                    journal:
                        "The 25th International Workshop on Mobile Computing Systems and Applications",
                    authors: [
                        "Ashkan Ganj",
                        "Yiqin Zhao",
                        "Hang Su",
                        "Tian Guo",
                    ],
                    award: "",
                    arxiv: "https://arxiv.org/pdf/2310.14437.pdf",
                    link: "",
                    website: "",
                    github: ""
                },
                {
                    title:
                        "Toward Scalable and Controllable AR Experimentation",
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
                    github: ""
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
                    github: "https://github.com/AshkanGanj/LR-Net"
                }

            ],
        };
    },
};
</script>

<style scoped>
.publication-item {
    /* background-color: #f7f8f9; */
    border-radius: 0px;
    padding: 0px;
    margin-bottom: 10px;
}


.publication-item h3 {
    margin-top: 0;
    font-size: 22px;
    font-weight: 500;
    color: rgb(29, 149, 230);
}

.publication-item p {
    margin-bottom: 15px;
}

.pub-venue {
    color: rgb(29, 149, 230);
    font-weight: bold;
}

.award {
    color: #f7f8f9;
    background-color: rgb(29, 117, 176);
    border: 1px solid rgb(29, 117, 176);
    padding: 6px 4px;
    border-radius: 0px;
    font-size: 13px;
    font-weight: bold;
}
.award span {
    font-size: 18px;
}

.me {
    font-weight: bold;
    text-decoration: underline;
}</style>
