// place files you want to import through the `$lib` alias in this folder.
import { writable } from 'svelte/store';

export let todos = writable([
    {
        id: 1,
        title: 'Buy food',
        description: "Can't, 600 per day only"
    }, {
        id: 2,
        title: 'Find new job',
        description: 'Need to fix resume.'
    }, {
        id: 3,
        title: 'Be happy',
        description: "Can't, no money :("
    },
]);
