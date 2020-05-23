<style src="../assets/Dashboard.styl"></style>
<template>
	<div class="UserDashboard">
		<input v-model="username" placeholder="your username">
		<p>username is: {{ username }}</p>

		<button v-on:click="counter += 1">Add 1</button>

	</div>
</template>
<script src ="./Dashboard.js"></script>
