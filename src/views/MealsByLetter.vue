<template>
    <Intro />
    <div>
      <div class="flex justify-center gap-2 mt-2">
        <router-link
          :to="{ name: 'ByLetter', params: { letter } }"
          v-for="letter of letters"
          :key="letter"
          class="letter-link"
        >
          {{ letter }}
        </router-link>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <Footer />
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import store from '../store';
  import { onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import MealItem from '../components/MealItem.vue';
  import Meals from '../components/Meals.vue';
  import Intro from '../components/Intro.vue';
  import Footer from "../components/Footer.vue";
  
  const route = useRoute();
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const meals = computed(() => store.state.mealsByLetter);
  
  watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter);
  });
  
  onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter);
  });
  </script>
  
  <style scoped>
  .letter-link {
    font-size: 24px;
    transition: transform 0.3s ease;
    font-weight: 500;
  }
  
  .letter-link:hover {
    transform: scale(2.1);
  }
  </style>
  