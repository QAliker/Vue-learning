import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue';
import MealsByName from '../views/MealsByName.vue';
import MealsByLetter from '../views/MealsByLetter.vue';
import MealsByIngredient from '../views/MealsByIngredient.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import MealDetails from '../views/MealDetails.vue';
import Ingredients from  '../views/Ingredients.vue'

const routes = [
    {
        path:'/',
        component: DefaultLayout,
        children:[
            {
                path:"/",
                name: "Home",
                component: Home,
            },
            {
                path:"/by-name/:name?",
                name: "ByName",
                component: MealsByName,
            },
            {
                path:"/by-letter/:letter?",
                name: "ByLetter",
                component: MealsByLetter,
            },
            {
                path:"/ingredients",
                name: "Ingredients",
                component: Ingredients,
            },
            {
                path:"/by-ingredient/:ingredient?",
                name: "ByIngredient",
                component: MealsByIngredient,
            },
            {
                path: '/meal/:id',
                name: 'MealDetails',
                component: MealDetails
            }
        ]
    },
    {
        path: '/auth',
        component: GuestLayout,
    }
    
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
