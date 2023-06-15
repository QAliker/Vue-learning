<template>
<Intro />
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
  </div>
  <Meals :meals="meals" />
  <Footer />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import Meals from "../components/Meals.vue";
import axiosClient from "../axiosClient.js";
import Intro from "../components/Intro.vue";
import Footer from "../components/Footer.vue";

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 21; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>