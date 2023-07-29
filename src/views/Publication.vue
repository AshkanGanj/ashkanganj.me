<template>
    <div class="container pb-3 border-bottom">
        <div class="text-start py-2 pt-4">
            <h2 class="section-title"> Publications </h2>
        </div>
        <div class="row">
            <div class="col-md-6" v-for="(publication, index) in publications" :key="index">
                <div class="publication-item shadow-sm border">
                    <h3>{{ publication.title }}</h3>
                    <div class="d-flex">
                        <span class="badge-btn date">{{ publication.date }}</span>
                        <span class="me-2 text-primary">|</span>
                        <a v-if="publication.link" :href="publication.link" target="_blank" class="badge-btn">Paper</a>
                        <a v-if="publication.website" :href="publication.website" target="_blank" class="badge-btn">Project Website</a>
                        <a v-if="publication.arxiv" :href="publication.arxiv" target="_blank" class="badge-btn">arxiv</a>
                        <a v-if="publication.github" :href="publication.github" target="_blank" class="badge-btn">Code</a>
                    </div>
                    <p></p>
                    <p>
                        <em>Published: {{ publication.journal }}</em>
                    </p>
                    <p>
                        Authors: 
                        <template v-for="(author, index) in publication.authors" :key="index">
                            <span>
                                <template v-if="author === 'Ashkan Ganj'">
                                    <b>{{ author }}</b>
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
</template>
<script>
export default {
    data() {
        return {
            publications: [
                {
                    title:
                        "LR-Net: A Block-based Convolutional Neural Network for Low-Resolution Image Classification",
                    date: "June-2023",
                    journal:
                        "Iranian Journal of Science and Technology, Transactions of Electrical Engineering ",
                    authors: [
                        "Ashkan Ganj",
                        "Mohsen Ebadpour",
                        "Mahdi Darvish",
                        "Hamid Bahador",
                    ],
                    arxiv:"https://arxiv.org/abs/2207.09531",
                    link: "https://link.springer.com/article/10.1007/s40998-023-00618-5",
                    github: "https://github.com/AshkanGanj/LR-Net"
                },
                {
                    title:
                        "Toward Scalable and Controllable AR Experimentation",
                    date: "July-2023",
                    journal:
                        "Pre-Print is Available on arXiv",
                    authors: [
                        "Ashkan Ganj",
                        "Yiqin Zhao",
                        "Federico Galbiati",
                        "Tian Guo",
                    ],
                    arxiv:"https://arxiv.org/abs/2307.08587",
                    link: "",
                    website: "https://cake.wpi.edu/expar/",
                    github: ""
                }
            ],
        };
    },
};
</script>

<style scoped>


.publication-item {
    /* background-color: #f7f8f9; */
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 20px;
}


.publication-item h3 {
    margin-top: 0;
    font-size: 18px;
    font-weight: 600;
    color: #0d6efd;
}

.publication-item p {
    margin-bottom: 10px;
}
</style>
