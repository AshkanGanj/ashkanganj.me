<template>
  <div class="container resume">
    <div class="row">
      <div class="col-md-auto col-12" v-for="(category, index) in resumeItems" :key="index">
        <div class="mt-4">
          <h2>{{ category.name }}</h2>
        </div>
        <div :class="['rounded-0 p-3', index % 2 === 0 ? 'bg-body-tertiary' : 'bg-body-secondary']">
          <div class="" v-for="(item, itemIndex) in category.items" :key="itemIndex"
            :class="{ 'border-bottom mb-3': itemIndex !== category.items.length - 1 }">
            <div>
              <div class="d-flex justify-content-between">
                <h6 class="fw-bold">{{ item.title }}</h6>
                <span v-if="item.date" class="">{{ item.date }}</span>
              </div>
              <p class="m-0" v-if="item.title"><em>{{ item.institution }}</em></p>
              <ul class="">
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
  {
    name: 'Education',
    items: [
      {
        title: 'Ph.D. in Computer Science',
        date: 'Jan, 2023 - Present',
        institution: 'Worcester Polytechnic Institute (WPI), USA',
        details: [
          // 'Project: Depth Estimation for Mobile AR Applications using camera feature.',
          // 'Advisor: <a href="https://tianguo.info/">Prof. Tian Guo</a>'
        ]
      },
      {
        title: 'Bachelor of Engineering in Computer Engineering',
        date: 'Sep, 2018 - July, 2022',
        institution: 'University of Mohaghegh Ardabili (UMA), IR',
        details: [
          'Awarded distinguished student.',
          'Project: LR-Net: A CNN based approach for Low-Resolution Image Classification (<a href="https://link.springer.com/article/10.1007/s40998-023-00618-5">Paper</a>)'
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
  },
  {
    name: 'Experiences',
    items: [
      {
        title: 'Research Assistant',
        date: 'Jan, 2024 - Present',
        institution: 'Worcester Polytechnic Institute (WPI) , USA',
        details: [
          'PI: Prof. <a href="https://tianguo.info/">Tian Guo</a>',
          'Working on designing computer vision systems for real world applications such as mobile AR.',
        ]
      },
      
      {
        title: 'Graduate Teaching Assistant',
        date: 'Jan, 2023 - May, 2024',
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
        title: 'Web Developer',
        date: 'Sep, 2021 - May, 2022',
        institution: 'Access Endless Communication (AEC) , IR',
        details: [
          'Worked as Frontend Developer mainly used Angular to develope the web application.',
        ]
      },
      {
        title: 'Teaching Assistant',
        date: 'Sep, 2021 - Dec, 2022',
        institution: 'University of Mohaghegh Ardabil (UMA), IR',
        details: [
          'Algorithm and Data Structure',
          'Software Engineering',
          'Discrete Mathematics'
        ]
      }
    ]
  },
  
]);
</script>

<style scoped>
li a {
  color: var(--text-highlights);
}
</style>