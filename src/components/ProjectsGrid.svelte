<script>
  import ProjectCard from './ProjectCard.svelte';
  import { projects } from '../repos.js';
</script>

<style>
  #grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 600px));
    gap: 2rem;
    width: 95%;
    margin: auto;
    justify-content: center;
  }
</style>

<div id="grid">
  {#each projects as project}
    <ProjectCard {...project}/>
  {/each}
</div>
