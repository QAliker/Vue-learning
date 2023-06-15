<template>
  <Intro />
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 w-full mb-3 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Search for Ingredients"
      @change="searchMeals"
    />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <router-link
        :to="{
          name: 'ByIngredient',
          params: { ingredient: ingredient.strIngredient },
        }"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="bg-white rounded-lg shadow-lg hover:shadow-xl p-6 flex flex-col justify-between items-center"
      >
        <h3 class="text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
        <img
          :src="getIngredientImage(ingredient.strIngredient)"
          :alt="ingredient.strIngredient"
          class="w-32 h-32 object-contain my-4"
        />
        <div class="flex justify-end">
          <span class="px-3 py-1 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600">
            Open
          </span>
        </div>
      </router-link>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axiosClient from "../axiosClient";
import store from "../store";
import Intro from "../components/Intro.vue";
import Footer from "../components/Footer.vue";

const router = useRouter();
const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

function openIngredient(ingredient) {
  store.commit("setIngredient", ingredient);
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
}

function getIngredientImage(ingredientName) {
  return `https://www.themealdb.com/images/ingredients/${encodeURIComponent(
    ingredientName
  )}.png`;
}

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>

<style scoped>
.router-link-active {
  background-color: #e5e7eb;
}
</style>
