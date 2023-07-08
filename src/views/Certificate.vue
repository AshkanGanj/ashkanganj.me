<template>
  <div class="container">
    <h2 class="section-title border-bottom text-center py-2">Certificates</h2>
    <div class="row">
      <div class="col-lg-4 col-md-6 mb-4 py-4" v-for="(certificate, index) in certificates" :key="index">
        <div class="card">
          <div class="img-container">
            <img :src="certificate.image" class="card-img-top" alt="Certificate image">
            <div class="card-info">
              <h5 class="card-title">{{ certificate.course }}</h5>
              <p class="card-text"><small class="">Issued by {{ certificate.issue }}</small></p>
              <a :href="certificate.link" class="btn btn-primary" target="_blank">View Certificate</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MachineLearningImage from '@/assets/img/machine-learning.jpg';
import NeuralNetworksImage from '@/assets/img/neural-networks.jpg';
import ImproveImage from '@/assets/img/improve.jpg';
import StructureNeuralImage from '@/assets/img/structure-neural.jpg';
import CNNImage from '@/assets/img/cnn.jpg';
import SequenceModelImage from '@/assets/img/Sequence model.jpg';
import DeepLearningImage from '@/assets/img/Deep learning.jpg';

export default {
  data() {
    return {
      certificates: [
        {
          course: "Machine Learning",
          issue: "STANFORD ONLINE",
          image: MachineLearningImage,
          link: "https://www.coursera.org/account/accomplishments/certificate/CERTIFICATE_ID"
        },
        {
          course: "Neural Networks and Deep Learning",
          issue: "DEEPLEARNING.AI",
          image: NeuralNetworksImage,
          link: "https://www.coursera.org/account/accomplishments/certificate/CERTIFICATE_ID"
        },
        {
          course: "Improving Deep Neural Networks",
          issue: "DEEPLEARNING.AI",
          image: ImproveImage,
          link: "https://www.coursera.org/account/accomplishments/certificate/CERTIFICATE_ID"
        },
        {
          course: "Structuring Machine Learning Projects",
          issue: "DEEPLEARNING.AI",
          image: StructureNeuralImage,
          link: "https://www.coursera.org/account/accomplishments/certificate/CERTIFICATE_ID"
        },
        {
          course: "Convolutional Neural Networks",
          issue: "DEEPLEARNING.AI",
          image: CNNImage,
          link: "https://www.coursera.org/account/accomplishments/certificate/CERTIFICATE_ID"
        },
        {
          course: "Sequence Model",
          issue: "DEEPLEARNING.AI",
          image: SequenceModelImage,
          link: "https://www.coursera.org/account/accomplishments/certificate/CERTIFICATE_ID"
        },
        {
          course: "Deep learning Specialization",
          issue: "DEEPLEARNING.AI",
          image: DeepLearningImage,
          link: "https://www.coursera.org/account/accomplishments/certificate/CERTIFICATE_ID"
        }
      ]
    };
  }
};
</script>


<style scoped>
.section-title {
  text-align: center;
  margin-top: 20px;
}

.card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0;
  overflow: hidden;
}

.img-container {
  position: relative;
}

.card-img-top {
  width: 100%;
  height: 270px;
  object-fit: cover;
}

.card-info {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: opacity 0.3s ease;
}

.img-container:hover .card-info {
  opacity: 1;
}

.card-title {
  font-size: 18px;
  color: #fff;
}

.btn-primary {
  background-color: #0563bb;
  border-color: #0563bb;
  color: #fff;
  border-radius: 0;
}
</style>
