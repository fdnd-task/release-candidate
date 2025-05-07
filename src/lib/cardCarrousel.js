import { writable } from "svelte/store";

export const currentPosition = writable(0);

import cards from "$lib/molecules/CardCarrousel.svelte";

export function prevBtn() {
  currentPosition.update((current) => Math.max(current - 1, 0));
}

export function nextBtn() {
  currentPosition.update((current) => Math.min(current + 1, cards.length - 1));
}


