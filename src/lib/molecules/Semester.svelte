<script>
  import { onMount } from "svelte";
  import Heading from "$lib/molecules/Heading.svelte";
  import SprintLink from "$lib/molecules/SprintLink.svelte";
  let { semester } = $props();

  onMount(() => {
    // Code inside onMount runs when the component is first rendered
    const observerOptions = {
      root: null, // Setting the root to the viewport
      rootMargin: "0px", // No margin around the root
      threshold: 0.5, // Trigger callback when 50% of the element is visible
    };

    const observerCallback = (entries) => {
      // Callback function for the IntersectionObserver
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the element is in view
          entry.target.classList.add("focused"); // Add the 'focused' class
        } else {
          // If the element is out of view
          entry.target.classList.remove("focused"); // Remove the 'focused' class
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    ); // Creating a new IntersectionObserver with the callback and options
    const semesters = document.querySelectorAll(".semester"); // Selecting all elements with the class 'semester'
    semesters.forEach((semester) => observer.observe(semester)); // Observing each 'semester' element
  });
</script>

<section class="semester">
  <a href="/{semester.slug}">
    <Heading title={`Semester`} subtitle={semester.title} />
  </a>
  <ol>
    {#each semester.sprints as sprint, index}
      <SprintLink
        {semester}
        {sprint}
        nextSprint={index !== semester.sprints.length - 1
          ? semester.sprints[index + 1]
          : false}
      />
    {/each}
  </ol>
</section>

<style>
  .semester {
    padding: 0;
    border: none;
    scroll-snap-align: start;
    transition: filter 0.3s ease-in-out;
  }

  .semester:not(.focused) {
    filter: blur(5px);
  }

  .semester a {
    color: var(--blueberry);
    text-decoration: none;
    display: inline-block;
    margin: 0 -0.5rem 0.5rem;
  }

  .semester a:focus {
    color: var(--blueberry);
  }

  ol {
    list-style: none;
    padding: 0.5rem;
    margin-top: -1em;
    width: 350px;
  }

  :global(.semester h2) {
    line-height: 1.1;
    font-size: 1.25rem;
  }

  :global(.semester h2 > span) {
    font-size: 0.6em;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  @media (min-width: 960px) {
    .semester > a {
      color: var(--blueberry);
      text-decoration: none;
      display: inline-block;
    }

    .semester > a:focus {
      color: var(--blueberry);
    }

    ol {
      list-style: none;
      width: 85%;
    }
  }
</style>
