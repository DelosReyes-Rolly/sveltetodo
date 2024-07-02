<script>
	import { Navbar, NavBrand, NavUl, NavHamburger } from 'flowbite-svelte';

	let today = new Date();
	const options = { weekday: 'long', day: 'numeric', month: 'long' };
	// @ts-ignore
	const formattedDate = today.toLocaleDateString('en-PH', options);

	// Split the date into parts
	const [weekday, dayMonth] = formattedDate.split(', ');

	function updateTime() {
		today = new Date();
	}

	// Call updateTime every second to update the time
	setInterval(updateTime, 1000);
</script>

<div class="relative px-8">
	<Navbar class="fixed start-0 top-0 z-20 w-full border-b px-2 py-2.5 sm:px-4" style="background-color:rgb(40,44,60);">
		<NavBrand href="/">
			<img src="Todolist-logo.png" class="me-3 h-6 sm:h-9" alt="Todo List" />
			<span class="self-center whitespace-nowrap text-xl font-semibold text-white"
				>My Todo List</span
			>
		</NavBrand>
		<NavHamburger />
		<NavUl class="text-white"
			><p class="weekday">{weekday},&nbsp;</p>
			{dayMonth}
		</NavUl>
		<NavUl class="text-white">
			{today.toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true
			})}
		</NavUl>
	</Navbar>
</div>

<style>
	.weekday {
		font-weight: bold;
	}
</style>
