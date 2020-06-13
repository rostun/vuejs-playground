<template>
	<div class="Dashboard full-width">
		<div class="search">
			<input v-model="food_input" placeholder="food" />
			<button v-on:click="DisplayFood();">Calculate</button>
		</div>
		<p>your searched for: {{end_input}}</p>
	</div>
</template>
<style src="../assets/Dashboard.styl"></style>
<script src ="./Dashboard.js"></script>