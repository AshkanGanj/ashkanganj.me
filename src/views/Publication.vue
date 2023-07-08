<template>
    <div class="container">
        <h2 class="section-title border-bottom my-4 py-2 w-25 mx-auto">
            Publications
        </h2>
        <div class="row">
            <div class="col-md-6" v-for="(publication, index) in publications" :key="index">
                <div class="publication-item shadow-sm">
                    <h3>{{ publication.title }}</h3>
                    <div class="d-flex">
                        <span class="badge-btn date">{{ publication.date }}</span>
                        <a :href="publication.link" target="_blank" class="badge-btn">Paper</a>
                        <a :href="publication.github" target="_blank" class="badge-btn">Code</a>
                    </div>
                    <p></p>
                    <p>
                        <em>Published: {{ publication.journal }}</em>
                    </p>
                    <p>Authors: {{ publication.authors.join(", ") }}</p>
                    <!-- <p class="text-justify">{{ publication.abstract }}</p> -->
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
                        "Mahdi Darvish",
                        "Hamid Bahador",
                        " Mohsen Ebadpour",
                    ],
                    abstract: "Abstract for publication 1...",
                    link: "https://link.springer.com/article/10.1007/s40998-023-00618-5",
                    github: "https://github.com/AshkanGanj/LR-Net"
                }
            ],
        };
    },
};
</script>

<style scoped>
.section-title {
    text-align: center;
}


.publication-item {
    background-color: #f7f8f9;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 20px;
}


.publication-item h3 {
    margin-top: 0;
    font-size: 18px;
    font-weight: 600;
    color: #0563bb;
}

.publication-item p {
    margin-bottom: 10px;
}
</style>
