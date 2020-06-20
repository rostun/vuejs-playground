<template>
	<div class="Dashboard full-width">
		<div class="search">
			<div class="search_food">
				<select v-model="select_input">
					<option :value="null" disabled>Select Food</option>
					<option v-for="option in options" v-bind:value="{key: option.key, target: option.target, text: option.text}" :key="option.key">
						{{ option.text }}
					</option>
				</select>
				<button v-on:click="SubmitFood();">Calculate Food</button>
			</div>
			<div class="search_pet">
				<select v-model="select_input">
					<option :value="null" disabled>Select Pet</option>
					<option v-for="option in options" v-bind:value="{key: option.key, target: option.target, text: option.text}" :key="option.key">
						{{ option.text }}
					</option>
				</select>
				<button v-on:click="SubmitFood();">Calculate Pet</button>
			</div>
		</div>
		<p>your searched for: {{food_input.text}}</p>
	</div>
</template>
<style src="../assets/Dashboard.styl"></style>
<script src ="./Dashboard.js"></script>