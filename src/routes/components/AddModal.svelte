<script>
	import { Modal } from 'flowbite-svelte';
	import { Label, Input, CloseButton } from 'flowbite-svelte';
	export let showModal = false;
	import { BookOpenOutline } from 'flowbite-svelte-icons';
	import { Textarea, Button } from 'flowbite-svelte';
	import { createEventDispatcher } from 'svelte';
	/**
	 * @type {any}
	 */
	let title;
	/**
	 * @type {any}
	 */
	let description;
	let dispatch = createEventDispatcher();
	const handleSubmit = () => {
		const newTodo = {
			id: Math.random(),
			title,
			description,
		}
		dispatch('addTodo', newTodo);
		showModal = false;
	}
</script>

<main>
	{#if showModal}
		<Modal title="New To do" bind:open={showModal}>
			<form on:submit|preventDefault={handleSubmit}>
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
	{/if}
</main>

<style>
</style>
