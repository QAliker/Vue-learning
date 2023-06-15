<template>
  <div class="w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5 text-center">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-lg shadow-lg w-full h-80 object-cover">
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area:</strong> {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
      </div>
    </div>

    <div class="my-3">
      <template v-for="(step, index) in getSteps()">
        <p class="mb-2 text-xl font-extrabold">
          Step {{ index + 1 }}: <span class="text-gray-500 font-bold">{{ step }}</span>
        </p>
      </template>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li class="text-gray-700 font-bold" v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li  class="text-gray-700 font-bold" v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-4">
        <YouTubeButton :href="meal.strYoutube"></YouTubeButton>
        <a
          :href="meal.strSource"
          target="_blank"
          class="px-3 py-2 rounded border text-white bg-gradient-to-r from-[#dd1225] to-[#ff3d4a] hover:from-[#ff3d4a] hover:to-[#dd1225] transition-colors"
        >
          View Original Source
        </a>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YouTubeButton from "../components/YouTubeButton.vue";
import Footer from "../components/Footer.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});

function getSteps() {
  if (meal.value.strInstructions) {
    return meal.value.strInstructions.split(".").filter((step) => step.trim() !== "");
  }
  return [];
}
</script>

<style scoped>
a:hover {
  transform: scale(1.05);
}

.text-xl {
  font-size: 1.25rem;
}

.text-gray-500 {
  color: #888888;
}

.font-extrabold {
  font-weight: 800;
}
</style>

