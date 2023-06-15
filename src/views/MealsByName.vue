<template>
    <Intro />
    <div class="p-8 pb-0 bg-gray-100">
      <input
        type="text"
        v-model="keyword"
        class="rounded border-2 bg-white border-gray-200 w-full p-3 text-lg text-gray-800 focus:outline-none focus:border-orange-500"
        placeholder="Rechercher des plats"
        @change="searchMeals"
      />
    </div>
  
    <Meals :meals="meals" />
    <Footer />
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import store from '../store';
  import { computed } from '@vue/reactivity';
  import { useRoute } from 'vue-router';
  import Meals from '../components/Meals.vue';
  import Intro from '../components/Intro.vue';
  import Footer from "../components/Footer.vue";
  
  const route = useRoute();
  const keyword = ref('');
  const meals = computed(() => store.state.searchedMeals);
  
  function searchMeals() {
    if (keyword.value) {
      store.dispatch('searchMeals', keyword.value);
    } else {
      store.commit('setSearchedMeals', []);
    }
  }
  
  onMounted(() => {
    keyword.value = route.params.name;
    if (keyword.value) {
      searchMeals();
    }
  });
  </script>
  
  <style scoped>
  input:focus {
    border-color: #dd1225;
    box-shadow: 0 0 0 3px rgba(221, 18, 37, 0.2);
  }
  </style>
  