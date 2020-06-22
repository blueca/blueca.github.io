<script>
  import ProjectCard from './ProjectCard.svelte'
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
  <ProjectCard />
  <ProjectCard />
  <ProjectCard />
</div>
