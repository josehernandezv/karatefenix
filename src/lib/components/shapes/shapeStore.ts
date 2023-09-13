import { writable } from 'svelte/store';

type Shapes = {
	circles: string[];
	dots: string[];
};

export const shapes = writable<Shapes>({ circles: [], dots: [] });
