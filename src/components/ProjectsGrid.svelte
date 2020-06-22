<script>
  import ProjectCard from './ProjectCard.svelte';
  import { projects } from '../repos.js';
</script>

<style>
  #grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    width: 95%;
    margin: auto;
  }
</style>

<div id="grid">
  {#each projects as project}
    <ProjectCard {...project}/>
  {/each}
</div>
