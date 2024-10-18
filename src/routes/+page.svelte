<script lang="ts">
    import { generateBezier } from "$lib";
    import Curve from "./Curve.svelte";

    // Generate curves
    let curves = [];
    for (let i = 0; i < 10; i++) {
        curves.push(generateBezier());
    }

    // Scroll position
    let y: number = 0;

    // Scroll into view smoothly
    // Source: https://svelte.dev/repl/e073dc93fb3347848062a531271e497f?version=3.24.0
    function scrollIntoView(
        { currentTarget }: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }
    ) {
        const href = currentTarget.getAttribute("href");
        if (!href) return;
        const el = document.querySelector(href);
        if (!el) return;
        el.scrollIntoView({
            behavior: "smooth",
        });
    }
</script>

<svelte:head>
    <title>Maddy Guthridge</title>

    <link
        rel="stylesheet"
        href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
    <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,700&display=swap"
        rel="stylesheet"
    />

  <!-- Verification links -->
  <link rel="me" href="https://tech.lgbt/@maddy" />
</svelte:head>

<svelte:window bind:scrollY={y} />

<div id="background">
    {#each curves as c, z}
        <Curve {...c} z={z + 1} />
    {/each}
</div>

<div id="page">
    <div class="title">
        <h1>Hi, I'm Maddy!</h1>
        <p><i>Maddy Guthridge (formerly Miguel)</i></p>
        <p style="font-size: 1.2em;"><b><em>they/them</em></b></p>
    </div>

    <!-- {#if y < 50}
        <a
            tabindex="0"
            class="bottom"
            style:height="{(50 - y) / 2}vh"
            href="#links"
            on:click|preventDefault={scrollIntoView}
        >
            <p>Scroll down</p>
            <i class="las la-angle-double-down"></i>
        </a>
    {/if} -->
    <main>
        <div class="text">
            <p>
                I'm a <em>passionate</em> software engineer, teacher and musician
                studying computer science at UNSW, Sydney.
            </p>
            <p>
                I love developing <em>harmonious</em> solutions to solve real-world
                problems, and am an advocate for inclusivity and accessibility.
            </p>
        </div>
    </main>

    <div id="links">
        <a href="https://blog.maddyguthridge.com/" target="_blank">
            <i class="las la-rss"></i>
            <b>Blog</b>
        </a>
        <a href="https://portfolio.maddyguthridge.com/" target="_blank">
            <i class="las la-folder"></i>
            <b>Portfolio</b>
        </a>
        <a href="https://github.com/MaddyGuthridge" target="_blank">
            <i class="lab la-github"></i>
            <b>GitHub</b>
        </a>
        <a href="https://linkedin.com/in/maddyguthridge" target="_blank">
            <i class="lab la-linkedin"></i>
            <b>LinkedIn</b>
        </a>
    </div>
</div>

<style>
    /**
     * Dark/light mode
     */
    @media (prefers-color-scheme: light) {
        :root {
            --background-color: white;
            --text-color: black;

            --heading-shadow: rgba(231, 179, 255, 0.519) 5px 1px 5px;

            --link-color: rgb(135, 48, 116);
            --link-hover-color: rgb(183, 47, 154);

            --gradient-fallback: rgb(224, 0, 199);
            --gradient: linear-gradient(
                146deg,
                rgba(224, 0, 199, 1) 0%,
                rgba(154, 0, 198, 1) 35%,
                rgba(0, 89, 255, 1) 100%
            );
        }
    }
    @media (prefers-color-scheme: dark) {
        :root {
            --background-color: rgb(24, 24, 24);
            --text-color: rgb(255, 255, 255);

            --heading-shadow: rgba(86, 40, 107, 0.519) 5px 1px 5px;

            --link-color: rgb(255, 155, 233);
            --link-hover-color: rgb(255, 99, 221);

            --gradient-fallback: rgb(255, 126, 241);
            --gradient: linear-gradient(
                146deg,
                rgba(255, 126, 241, 1) 0%,
                rgba(214, 71, 255, 1) 35%,
                rgba(100, 154, 255, 1) 100%
            );
        }
    }

    /**
     * Responsiveness
     */

    /* Larger screens */
    @media only screen and (min-width: 601px) {
        :root {
            --header-size: 10rem;
        }
    }
    @media only screen and (max-width: 600px) {
        :root {
            --header-size: 4rem;
        }
    }

    #background {
        position: fixed;
        background-color: var(--background-color);
        z-index: -100;
        height: 100vh;
        width: 100%;
    }

    #page {
        font-family: "Open Sans", sans-serif;
        margin: 0px;
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
        color: var(--text-color);
        overflow-x: hidden;
    }

    .title {
        padding: 0 5%;
        /* height: 85vh; */
        text-shadow: var(--heading-shadow);
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .title > h1 {
        font-size: var(--header-size);
    }

    .text {
        text-align: center;
    }

    /* .bottom {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;

        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        text-decoration: none;
    } */

    main {
        font-family: "Open Sans", sans-serif;
        font-size: 1.5rem;
        margin: 0 10%;
    }

    #links {
        padding: 20px 0%;
        font-size: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    #links > a {
        color: var(--link-color);
        text-decoration: none;
        margin: 1rem 2rem;
    }

    #links > a:hover {
        color: var(--link-hover-color);
        text-decoration: underline;
    }

    /**
     * Fancy gradient text
     * https://unused-css.com/blog/css-rainbow-text/
     */
    em {
        background-image: var(--gradient-fallback);
        background-image: var(--gradient);
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        font-weight: bolder;
    }
</style>
