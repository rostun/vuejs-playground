<template>
	<div class="Dashboard full-width">
		<div class="search">
			<select v-model="select_input">
				<option :value="null" disabled>Select Food</option>
				<option v-for="option in options" v-bind:value="{key: option.key, target: option.target, text: option.text}" :key="option.key">
					{{ option.text }}
				</option>
			</select>
			<button v-on:click="SubmitFood();">Calculate</button>
		</div>
		<p>your searched for: {{food_input.text}}</p>
	</div>
</template>
<style src="../assets/Dashboard.styl"></style>
<script src ="./Dashboard.js"></script>