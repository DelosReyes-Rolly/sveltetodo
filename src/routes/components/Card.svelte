<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import Todo from './Todo.svelte';
	import { todos } from '$lib';
	import { CirclePlusSolid } from 'flowbite-svelte-icons';
	import AddModal from './AddModal.svelte';
	import Loader from './Loader.svelte';
	let showModal = false;
	const toggleModal = () => {
		showModal = !showModal;
	};

	let todoList: { id: number; title: string; description: string }[];

	todos.subscribe((value) => {
		todoList = value;
	});

	export const deleteTodo = (todo: { id: number; title: string; description: string }) => {
		todos.set(todoList.filter((i) => i != todo));
	};

	export const addTodo = (e: { detail: any }) => {
		const newTodo = e.detail;
		todoList = [newTodo, ...todoList];
	};

	export const editTodo = (e: { detail: any }) => {
		todoList = todoList.map((obj) =>
			obj.id === e.detail.id
				? { ...obj, title: e.detail.title, description: e.detail.description }
				: obj
		);
	};
</script>

<main>
	{#if !todoList}
		<Loader />
	{:else}
		<AddModal {showModal} on:addTodo={addTodo} />
		<Card style="margin: 8em auto 0;" size="xl">
			<div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
				{#each todoList as todo (todo.id)}
					<div class="mt-6"><Todo {todo} deleteOne={deleteTodo} {editTodo} /></div>
				{:else}
					<div style="margin:auto;">
						-- No to do right now --
					</div>
				{/each}
				<button on:click={toggleModal}>
					<Card size="sm" class="mt-6 ml-2 hover:bg-gray-200" style="height:60px">
						<CirclePlusSolid size="xl" style="margin: auto;" />
					</Card>
				</button>
			</div>
		</Card>
	{/if}
</main>
