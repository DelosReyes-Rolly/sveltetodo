<script>
	import { Card } from 'flowbite-svelte';
	import Todo from './Todo.svelte';
	import { todos } from '$lib';
	import { CirclePlusSolid } from 'flowbite-svelte-icons';
	import AddModal from './AddModal.svelte';
    let showModal = false;
    const toggleModal = () => {
        showModal = !showModal;
    }
</script>

<main>
    <AddModal {showModal}/>
	<Card style="margin: 8em auto 0;" size="xl">
		<div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
			{#each todos as todo (todo.id)}
				<Todo {todo} />
			{:else}
				-- No to do right now --
			{/each}
			<button on:click={toggleModal}>
				<Card size="sm" class="sm:mt-2" style="height:100px">
					<CirclePlusSolid size="xl" style="margin: auto;" />
				</Card>
			</button>
		</div>
	</Card>
</main>
