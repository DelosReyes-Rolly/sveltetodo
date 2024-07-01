<script>
	import { Modal } from 'flowbite-svelte';
	import { Label, Input, CloseButton } from 'flowbite-svelte';
	export let showModal = false;
	import { BookOpenOutline } from 'flowbite-svelte-icons';
    import { Textarea, Button } from 'flowbite-svelte';
</script>

<main>
	{#if showModal}
		<Modal title="New To do" bind:open={showModal} autoclose outsideclose>
			<Label class="space-y-2">
				<span>Title</span>
				<Input type="email" placeholder="title" size="lg">
					<BookOpenOutline slot="left" class="h-6 w-6" />
					<CloseButton slot="right" />
				</Input>
			</Label>
            <br/>
            <span>Description</span>
			<Textarea class="mb-4" placeholder="Write a comment">
				<div slot="footer" class="flex items-center justify-between">
					<Button type="submit">Post to do</Button>
				</div>
			</Textarea>
		</Modal>
	{/if}
</main>

<style>
</style>
