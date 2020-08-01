<template>
	<div class="full-width center-content font-style">
		<div class="title">Handy Dandy Habitica Helper</div>
		<Dashboard @petData="setPetData" @foodData="setFoodData" @foodInput="setFoodInput" @petInput="setPetInput"/>
		<SearchResults :filtered_pet_data="filtered_pet_data" :filtered_food_data="filtered_food_data" />
	</div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
import SearchResults from "./components/SearchResults.vue";

export default {
   data() {
      return {
			pet_data: {},
			food_data: {},
			filtered_pet_data: [],
			filtered_food_data: [],
			food_input: null,
			pet_input: null,
      }
   },
	components: {
		Dashboard,
		SearchResults,
	},
	methods: {
		setPetData(pets) { 
			this.pet_data = pets;
		},
		setFoodData(food) {
			this.food_data = food; 
		},
		setPetInput(input) {
			this.pet_input = input;
			this.setFilteredData('pet');
		},
		setFoodInput(input) {
			this.food_input = input;
			this.setFilteredData('food');
		},
		setFilteredData(type) {
         const _foods = Object.values(this.food_data);
			const _pets = Object.values(this.pet_data);
			
         if(type === 'food' && !_foods.length) return [];
			if(type === 'pet' && !_pets.length) return [];

			if(type === 'food') {
				if(this.food_input.key === 'Saddle'){
					this.filtered_pet_data = this.pet_data;
					return;
				} 

				this.filtered_pet_data = _pets.filter((pet) =>{
					if(pet.type === 'special') return false;
					return pet.potion.toLowerCase() === this.food_input.target.toLowerCase()
				});
				
				this.filtered_food_data = _foods.filter((food) => food.key === this.food_input.key);
			}
			if(type === 'pet') {
				this.filtered_pet_data = _pets.filter((pet) => pet.key === this.pet_input.key);
				console.log('filtered pet data: ', this.filtered_pet_data);
			}
      },
	}
};
</script>
