<script>
	import Card from '../components/Card.svelte';
	import Header from '../components/Header.svelte';
</script>

<main>
	<Header />
	<Card />
</main>

<style>
	:global(body) {
		background-image: url('todos-bg.jpg');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: 100% 100%;
		margin: 0;
		padding: 0;
	}
</style>
