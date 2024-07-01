<script>
	import { Button, Modal } from 'flowbite-svelte';
	export let defaultModal = true;
    export let todo;
</script>

<Modal title={todo.title} bind:open={defaultModal} autoclose outsideclose>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
		{todo.description}
	</p>
</Modal>
