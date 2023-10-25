<template>
    <div class="container border-bottom" data-aos="fade-up">
      <!-- <div class="border-bottom text-start my-4 py-2 pt-4 w-25 mx-auto">
            <h2 class="section-title mx-2"> Resume </h2>
        </div> -->
      
  
      <div class="timeline pt-4">
        <div class="row">
          <div class="col-md-6 col-sm-12 timeline-item" v-for="(category, index) in resumeItems" :key="index">
            <div class="timeline-content border shadow-sm">
              <!-- <h3 class="resume-title">{{ category.name }}</h3> -->
            <div class="resume-item" v-for="(item, itemIndex) in category.items" :key="itemIndex" :class="{ 'border-bottom mb-3': itemIndex !== category.items.length - 1 }">
                <div class="timeline-head">
                    <h2>{{ category.name }}</h2>
                </div>
                <div class="timeline-body">
                    <h4>{{ item.title }}</h4>
                    
                    <p><span class="badge-btn date">{{ item.date }}</span></p>
                    <p><em>{{ item.institution }}</em></p>
                    <p class="text-justify">
                        <ul>
                            <li v-for="(detail, detailIndex) in item.details" :key="detailIndex" v-html="detail"></li>
                        </ul>
                    </p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

  
<style scoped>
.section-title{
  margin : 0 auto;
  text-align: center;
}
.timeline {
  position: relative;
  margin: 40px 0;
  margin-bottom: 0;
}

.timeline-container {
  position: relative;
  width: 100%;
}

.timeline-item {
  position: relative;
  /* width: 100%; */
  margin-bottom: 4rem;
}

.timeline-content {
  position: relative;
  width: 100%;
  padding: 15px;
  border-radius: 0px;


}

.timeline-head {
  position: absolute;
  top: -30px;
  left: 0;
}

.timeline-head h2 {
  margin: -20px 0px;
}


.timeline-body h4 {
  margin-top: 0;
  font-size: 18px;
  font-weight: 600;
  color: rgb(93, 181, 251);
}

.timeline-body p {
  margin-bottom: 8px;
}

.timeline-body ul {
  list-style: none;
  padding-left: 15px;
}

.timeline-body ul li {
  position: relative;
  padding-left: 15px;
  margin-bottom: 5px;
}

.timeline-body ul li:before {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  width: 8px;
  height: 8px;
  background-color: rgb(93, 181, 251);
  border-radius: 50%;
}
</style>
  
  <script setup>
  import { capitalize, ref } from 'vue';
  
  const resumeItems = ref([
    {
      name: 'Education',
      icon:'https://img.icons8.com/color/96/teaching.png',
      items: [
        {
          title: 'Ph.D in Computer Science',
          date: '2023 - Current',
          institution: 'Worcester Polytechnic Institute (WPI), Worcester, USA',
          details: [
            'Advisor: <a href="https://tianguo.info/">Tian Guo</a>'
          ]
        },
        {
          title: 'Bachelor of Science in Computer Engineering',
          date: '2018 - 2022',
          institution: 'University of Mohaghegh Ardabili, Ardabil, IR',
          details: [
            'Awarded distinguished student.',
            '<span class="fw-bold">Final Project:</span> LR-Net: A Block-based Convolutional Neural Network for Low-Resolution Image Classification (<a href="https://link.springer.com/article/10.1007/s40998-023-00618-5">Link</a>)'
          ]
        }
      ]
    },
    {
      name: 'Academic Experiences',
      icon:'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-academic-university-flaticons-lineal-color-flat-icons.png',
      items: [
        {
          title: 'Teaching Assistant',
          date: '2023 - Current',
          institution: 'Worcester Polytechnic Institute (WPI), Worcester, USA',
          details: [
            '(CS 4233) Object-Oriented Analysis and Design',
            '(CS 1101) Introduction to Programming Design',
            '(CS 2303) Systems Programming Concepts',
            '(CS 2119) Application Building with Object-Oriented Concepts'
          ]
        },
        {
          title: 'Teaching Assistant',
          date: '2021 - 2022',
          institution: 'University of Mohaghegh Ardabil, Ardabil, IR',
          details: [
            'Algorithm and Data Structure',
            'Software Engineering',
            'Discrete Mathematics'
          ]
        }
      ]
    },
    {
      name: 'Professional Experiences',
      icon:'https://img.icons8.com/color-glass/96/education.png',
      items: [
        {
          title: 'Front-End Developer',
          date: '2020 - 2021',
          institution: 'Access Endless Communication(AEC), Tehran, IR',
          details: [
            'Head of Front-End Team',
          ]
        }
      ]
    }
  ]);
  </script>
  