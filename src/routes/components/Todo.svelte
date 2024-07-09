<script lang="ts">
	import { Accordion, AccordionItem, Card } from 'flowbite-svelte';
	let defaultModal = false;
	import { EditOutline, TrashBinOutline } from 'flowbite-svelte-icons';
	import EditModal from './EditModal.svelte';
	const toggleModal = () => {
		defaultModal = !defaultModal;
	};
	export let todo;
	export let deleteOne;
	export let editTodo;
	const red2 = 'hsl(' + Math.random() * 360 + ', 100%, 80%)';
</script>

<main>
	<Accordion
		class="ml-2 rounded-lg shadow-md sm:mt-2"
		id="newCard"
		style="background-color: {red2}; border-radius: 10px 10px 10px 10px"
		activeClass="bg-red-200 text-blue-600 dark:text-white drop-shadow-2xl"
		inactiveClass="text-gray-500 dark:text-gray-400 hover:bg-red-200 dark:hover:bg-gray-800 drop-shadow-2xl"
	>
		<AccordionItem>
			<div slot="header">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{todo.title}
				</h5>
			</div>
			<span class="text-black">{todo.description}</span>
			<div class="float-right">
				<EditModal {defaultModal} {todo} on:editTodo={editTodo} />
				<button on:click={toggleModal}><EditOutline color="black" size="xl" /></button>
				<button on:click={() => deleteOne(todo)}><TrashBinOutline color="red" size="xl" /></button>
			</div>
		</AccordionItem>
	</Accordion>
</main>
