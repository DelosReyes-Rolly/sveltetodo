<script lang="ts">
	import { Card } from 'flowbite-svelte';
	let defaultModal = false;
	import { EyeSlashOutline, EditOutline, TrashBinOutline }from 'flowbite-svelte-icons';
	import EditModal from './EditModal.svelte';
	const toggleModal = () => {
		defaultModal = !defaultModal;
	};
    export let todo;
</script>

<main>
	<Card size="sm" class="sm:mt-2">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{todo.title}</h5>
		<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">{todo.description}</p>
		<div class="float-right">
			<EditModal {defaultModal} {todo}/>
			<button on:click={toggleModal}><EditOutline color="yellow" size="xl" /></button>
			<EditModal {defaultModal} {todo}/>
			<button on:click={toggleModal}><TrashBinOutline color="red" size="xl" /></button>
		</div>
	</Card>
</main>
