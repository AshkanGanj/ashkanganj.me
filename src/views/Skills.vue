<template>
  <div class="container">
    <div
      class="border-bottom d-flex justify-content-center align-items-center text-center my-4 py-2 pt-4 w-25 mx-auto"
    >
      <img
        width="42"
        height="42"
        src="https://img.icons8.com/dusk/64/code.png"
        alt="code"
      />
      <h2 class="section-title mx-2">Skills</h2>
    </div>

    <div class="row">
      <div
        class="col-lg-3 col-md-4 skill-category mb-4 text-center"
        v-for="(category, index) in skillCategories"
        :key="index"
      >
        <!-- Added a margin bottom class here -->
        <h3 class="border-bottom">{{ category.name }}</h3>
        <ul class="skill-item p-2">
          <li class="py-1" v-for="(skill, skillIndex) in category.skills" :key="skillIndex">
            <div class="d-flex justify-content-between">
              <img
                  class="img-fluid"
                  width="30"
                  height="30"
                  :src="skill.icon"
                />
                <span>{{ skill.name }}</span>
              
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillCategories: [
        {
          name: "Programming Languages",
          skills: [
            {
              name: "Python",
              icon: "https://img.icons8.com/color/144/python--v1.png",
            },
            {
              name: "C++",
              icon: "https://img.icons8.com/nolan/512/c-plus-plus-logo.png",
            },
            {
              name: "JavaScript",
              icon: "https://img.icons8.com/color/480/javascript--v1.png",
            },
            {
              name: "TypeScript",
              icon: "https://img.icons8.com/color/480/typescript.png",
            },
          ],
        },
        {
          name: "Frameworks/Libraries",
          skills: [
            {
              name: "TensroFlow",
              icon: "https://img.icons8.com/color/480/tensorflow.png",
            },
            { name: "PyTorch", icon: "" },
            {
              name: "Numpy",
              icon: "https://img.icons8.com/color/480/numpy.png",
            },
            { name: "Scikit-learn", icon: "" },
            {
              name: "Pandas",
              icon: "https://img.icons8.com/color/480/pandas.png",
            },
            { name: "Flask", icon: "https://img.icons8.com/ios/50/flask.png" },
            {
              name: "Django",
              icon: "https://img.icons8.com/color/480/django.png",
            },
            {
              name: "Vue.js",
              icon: "https://img.icons8.com/color/480/vue-js.png",
            },
            {
              name: "Angular",
              icon: "https://img.icons8.com/color/480/angularjs.png",
            },
          ],
        },
        {
          name: "Databases",
          skills: [
            {
              name: "PostgreSQL",
              icon: "https://img.icons8.com/color/480/postgreesql.png",
            },
            {
              name: "MySQL",
              icon: "https://img.icons8.com/color/480/my-sql.png",
            },
            { name: "MongoDB", icon: "" },
          ],
        },
        {
          name: "Tools",
          skills: [
            { name: "Git", icon: "https://img.icons8.com/color/480/git.png" },
            {
              name: "Docker",
              icon: "https://img.icons8.com/color/480/docker.png",
            },
            {
              name: "Notebook",
              icon: "https://img.icons8.com/fluency/240/jupyter.png",
            },
            {
              name: "LaTeX",
              icon: "https://img.icons8.com/fluency/240/texshop.png",
            },
          ],
        },
        {
          name: "Operating System",

          skills: [
            {
              name: "GNU/Linux",
              icon: "https://img.icons8.com/external-sbts2018-flat-sbts2018/58/external-linux-basic-ui-elements-2.4-sbts2018-flat-sbts2018.png",
            },
            {
              name: "MS Windows",
              icon: "https://img.icons8.com/fluency/240/windows-11.png",
            },
          ],
        },
        
      ],
    };
  },
};
</script>

<style scoped>
.skill-category {
  list-style: none;
  padding-left: 0;

}

.skill-category h3 {
  margin-bottom: 5px;
  color: #0563bb;
}

.skill-item {
  list-style: none;
  padding-left: 0;
  width: 50%;
  margin: 0 auto;
}
</style>
