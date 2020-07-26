<template>
	<div class="search_results full-width">
		<div class="food_result">
			<p class>Food Results!</p>
			<ul class="food_information">
				<li v-for="food in filtered_food_data" :key="food.key">{{ food.text }}</li>
			</ul>
		</div>
		<div class="pet_result">
			<p class>Pet Results!</p>
			<ul class="pet_information">
				<li v-for="pet in filtered_pet_data" :key="pet.key">{{ pet.text }}</li>
			</ul>
		</div>
	</div>
</template>
<style src="../assets/SearchResults.styl"></style>
<script src ="./SearchResults.js"></script>

