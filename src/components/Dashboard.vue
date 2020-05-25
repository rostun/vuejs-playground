<template>
	<div class="Dashboard">
		<div class="search">
			<input v-model="food_input" placeholder="food">
			<button v-on:click="DisplayFood();">Calculate</button>
		</div>
		<p>your searched for: {{end_input}}</p>
		<div class="search_results">
			<p class="pet_result">Pet Results!</p>
			<ul id="example-1" class="pet_information">
				<li v-for="pet in pet_data" :key="pet.key">{{ pet.text }}</li>
			</ul>
		</div>
	</div>
</template>
<style src="../assets/Dashboard.styl"></style>
<script src ="./Dashboard.js"></script>
