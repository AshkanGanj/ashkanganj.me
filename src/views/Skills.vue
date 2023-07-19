<template>
  <div class="container">
    <h2
      class="section-title border-bottom text-center my-4 py-2 pt-4 w-25 mx-auto"
    >
      Skills
    </h2>
    <div class="row">
      <div
        class="col-lg-3 col-md-4 skill-category mb-4"
        v-for="(category, index) in skillCategories"
        :key="index"
      >
        <!-- Added a margin bottom class here -->
        <h3>{{ category.name }}</h3>
        <ul class="skill-item">
          <li v-for="(skill, skillIndex) in category.skills" :key="skillIndex">
            {{ skill }}
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
          skills: ["Python", "C++", "JavaScript", "TypeScript"],
        },
        {
          name: "Frameworks/Libraries",
          skills: [
            "TensorFlow",
            "PyTorch",
            "Numpy",
            "Scikit-learn",
            "Pandas",
            "Vue.js",
            "Angular",
            "Flask",
            "Django",
          ],
        },
        {
          name: "Databases",
          skills: ["PostgreSQL", "MySQL", "MongoDB"],
        },
        {
          name: "Operating System",
          skills: ["GNU/Linux", "Microsoft Windows"],
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
  margin-bottom: 20px;
  padding: 15px;
}

.skill-category h3 {
  margin-bottom: 5px;
  color: #0563bb;
}

.skill-item {
  list-style: square;
  padding-left: 20px;
}


</style>
