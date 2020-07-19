<template>
	<div class="full-width center-content font-style">
		<div class="title">Handy Dandy Habitica Helper</div>
		<Dashboard @petData="setPetData" @foodData="setFoodData" @foodInput="setFoodInput" @petInput="setPetInput"/>
		<SearchResults :pet_data="pet_data" :food_data="food_data" :food_input="food_input" :pet_input="pet_input" />
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
		setFoodInput(input) {
			this.food_input = input;
		},
		setPetInput(input) {
			this.pet_input = input;
		}
	}
};
</script>
