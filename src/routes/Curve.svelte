<script lang="ts">
    import { onMount } from "svelte";

    export let start: number;
    export let end: number;
    export let c1: number;
    export let c2: number;
    export let color: string;
    export let opacity: number;
    export let z: number;

    // Extra amount to add to scroll speed so the curves move fast enough
    const SCROLL_SPEED_ADD = 0.5;
    const SCROLL_SPEED_MULTIPLIER = 2;

    // Scroll position
    let y: number = 0;
    // Current scroll speed for this curve
    let scrollSpeed = Math.random() + SCROLL_SPEED_ADD;
</script>

<svelte:window
    bind:scrollY={y}
    on:scroll={() => {
        // If we hit the top, regenerate the scroll speed
        if (y === 0) {
            // Base the value on the previous one so that the rate of movement
            // is
            scrollSpeed = (scrollSpeed - SCROLL_SPEED_ADD + Math.random() / 2) % 1 + SCROLL_SPEED_ADD;
        }
    }}
/>

<div
    style:z-index="{-z}"
    style:position="fixed"
    style:top="{-y * scrollSpeed * SCROLL_SPEED_MULTIPLIER}px"
    style:left="0"
    style:width="100%"
    style:height="50%"
>
    <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
    >
        <path
            d="M 0 -100 V {start} C 50 {c1}, 50 {c2}, 100 {end} V -100 Z"
            fill-opacity={opacity}
            fill={color}
            stroke="trasparent"
        />
    </svg>
</div>
