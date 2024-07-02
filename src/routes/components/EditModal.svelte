<script lang="ts">
	import { Button, CloseButton, Input, Label, Modal, Textarea } from 'flowbite-svelte';
	import { BookOpenOutline } from 'flowbite-svelte-icons';
	export let defaultModal = true;
    export let todo;
	import { createEventDispatcher } from 'svelte';
	/**
	 * @type {any}
	 */
	let title = todo.title;
	/**
	 * @type {any}
	 */
	let description= todo.description;
	let dispatch = createEventDispatcher();
	const handleSubmit = () => {
		const newTodo = {
			id: todo.id,
			title,
			description,
		}
		dispatch('editTodo', newTodo);
	}
</script>

<Modal title="Edit to do" bind:open={defaultModal}>
	<form  on:submit|preventDefault={handleSubmit}>
		<Label class="space-y-2">
			<span>Title</span>
			<Input type="text" placeholder="title" size="lg" bind:value={title}>
				<BookOpenOutline slot="left" class="h-6 w-6" />
				<CloseButton slot="right" />
			</Input>
		</Label>
		<br />
		<span>Description</span>
		<Textarea class="mb-4" placeholder="Write a comment" bind:value={description}>
			<div slot="footer" class="flex items-center justify-between">
				<Button type="submit">Post to do</Button>
			</div>
		</Textarea>
	</form>
</Modal>
