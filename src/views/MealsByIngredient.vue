<template>
    <Meals :meals="meals" />
    <Footer />

</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import store from '../store';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';
import Footer from '../components/Footer.vue';


const route = useRoute()
const ingredients = ref([])
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
   store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
</script>