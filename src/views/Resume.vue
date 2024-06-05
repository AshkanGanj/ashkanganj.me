<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-12" v-for="(category, index) in resumeItems" :key="index">
        <div class="mt-4">
          <h2>{{ category.name }}</h2>
        </div>
        <div  :class="['my-3 rounded-0 p-3', index % 2 === 0 ? 'bg-body-tertiary' : 'bg-body-secondary']">
          <div class="" v-for="(item, itemIndex) in category.items" :key="itemIndex"
            :class="{ 'border-bottom mb-3': itemIndex !== category.items.length - 1 }">
            <div>
              <div class="d-flex justify-content-between">
                <h6 class="fw-bold">{{ item.institution }}</h6>
                <span v-if="item.date" class="">{{ item.date }}</span>
              </div>
              <p class="m-0" v-if="item.title"><em>{{ item.title }}</em></p>
              <ul class="mt-0">
                <li v-for="(detail, detailIndex) in item.details" :key="detailIndex" v-html="detail"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { capitalize, ref } from 'vue';

const resumeItems = ref([
  // {
  //   name: 'Education',
  //   items: [
  //     {
  //       title: 'Ph.D. of Computer Science',
  //       date: '2023 - Current',
  //       institution: 'Worcester Polytechnic Institute (WPI), Worcester, USA',
  //       // details: [
  //       //   'Advisor: <a href="https://tianguo.info/">Tian Guo</a>'
  //       // ]
  //     },
  //     {
  //       title: 'Bachelor of Science in Computer Engineering',
  //       date: '2018 - 2022',
  //       institution: 'University of Mohaghegh Ardabili, Ardabil, IR',
  //       details: [
  //         'Awarded distinguished student.',
  //         '<span class="fw-bold">Final Project:</span> LR-Net: A Block-based Convolutional Neural Network for Low-Resolution Image Classification (<a href="https://link.springer.com/article/10.1007/s40998-023-00618-5">Link</a>)'
  //       ]
  //     }
  //   ]
  // },
  {
    name: 'Teaching Experiences',
    items: [
      {
        title: 'Graduate Teaching Assistant',
        date: '2023 - 2024',
        institution: 'Worcester Polytechnic Institute (WPI) , USA',
        details: [
          '(CS 4233) Object-Oriented Analysis and Design',
          '(CS 1101) Introduction to Programming Design',
          '(CS 2303) Systems Programming Concepts',
          '(CS 2119) Application Building with Object-Oriented Concepts',
          '(CS 2303) System programming concepts'
        ]
      },
      {
        title: 'Teaching Assistant',
        date: '2021 - 2022',
        institution: 'University of Mohaghegh Ardabil, Iran',
        details: [
          'Digital System Lab',
          'Algorithm and Data Structure',
          'Software Engineering',
          'Discrete Mathematics'
        ]
      }
    ]
  },
  {
    name: 'Skills',
    items: [
      {
        // title: 'Programming Languages',
        // date: '2020 - 2021',
        institution: 'Programming',
        details: [
          'Python, C++, JavaScript, TypeScript, Java, C#',
          'PyTorch, TensorFlow, Keras, OpenCV, Scikit-learn, Pandas, NumPy',
          'PostgreSQL, MySQL, MongoDB, SQLite',
          'Windows, Debian/GNU Linux',
          'Web developement'
        ]
      }
    ]
  }
]);
</script>