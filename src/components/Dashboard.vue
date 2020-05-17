<template>
	<div class="UserDashboard">
		<input v-model="message" placeholder="edit me" />
		<p>Message is: {{ message }}</p>

		<h1>Hello {{ name }}!</h1>
	</div>
</template>
<script>
export default {
	props: {
		name: {
			type: String,
			required: true
		}
	}
};
</script>
<style lang="stylus" scoped>
h1 {
	color: red;
}
</style>
