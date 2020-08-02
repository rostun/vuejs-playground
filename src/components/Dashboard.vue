<template>
	<div class="Dashboard full-width">
		<div class="search">
			<div class="search_food">
				<select v-model="food_input">
					<option :value="null" disabled>Select Food</option>
					<option v-for="option in food_options" v-bind:value="{key: option.key, target: option.target, text: option.text}" :key="option.key">
						{{ option.text }}
					</option>
				</select>
				<button v-on:click="SubmitFood();">Calculate Food</button>
			</div>
			<div class="search_pet">
				<select v-model="pet_input">
					<option :value="null" disabled>Select Pet</option>
					<option v-for="option in pet_options" v-bind:value="{key: option.key, potion: option.potion, text: option.text}" :key="option.key">
						{{ option.text }}
					</option>
				</select>
				<button v-on:click="SubmitPet();">Calculate Pet</button>
			</div>
		</div>
		<p>your searched for: {{select_input ? select_input.text : null}}</p>
	</div>
</template>
<style src="../assets/Dashboard.styl"></style>
<script src ="./Dashboard.js"></script>