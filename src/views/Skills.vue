<template>
  <div class="container border-bottom">
    <div class="text-start py-2 pt-4">
      <h2 class="">Skills</h2>
    </div>

    <div class="row">
      <div
        class="col-lg-3 col-md-4 mb-4"
        v-for="(category, index) in skillCategories"
        :key="index"
      >
        <div class="list-group">
          <div class="list-group-item list-group-item-action fw-bold">
            {{ category.name }}
          </div>
          <div v-for="(skill, skillIndex) in category.skills" :key="skillIndex">
            <div class="list-group-item list-group-item-action">
              <img :src="skill.icon" class="me-2" width="30" height="30" />
              {{ skill.name }}
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
            {
              name: "PyTorch",
              icon: "https://img.icons8.com/color/96/mind-map.png",
            },
            {
              name: "Numpy",
              icon: "https://img.icons8.com/color/480/numpy.png",
            },
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
            {
              name: "MongoDB",
              icon: "https://img.icons8.com/stickers/100/search-database.png",
            },
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
  color: #0d6efd;
}

.skill-item {
  list-style: none;
  padding-left: 0;
  width: 50%;
  margin: 0 auto;
}
.list-group-item {
  border-radius: 0px;
}
</style>
