<script>
  export let title;
  export let image;
  export let description;
  export let tech;
  export let repo;

  const { frontend, backend } = tech;
</script>

<style>
  .card {
    box-shadow: 0 0 4px black;
    border-radius: 2px;
    height: 30rem;
    width: auto;
    background-color: #2d356a;
    color: #e2dad8;
  }

  img {
    width: 97%;
    margin-top: 0.5rem;
    border-radius: 2px;
  }

  h3 {
    text-align: left;
    padding-left: 0.6rem;
  }

  p {
    text-align: left;
    padding-left: 0.6rem;
  }

  .techlist {
    display: flex;
    width: 97%;
    margin: auto;
    height: 3rem;
  }

  .type {
    background-color: #e2dad8;
    color: #151522;
    padding: 0.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    margin: 0;
    width: 5rem;
    border-radius: 2px;
  }

  ul {
    display: flex;
    list-style-type: none;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding-left: 0.5rem;
    margin: 0;
  }

  li {
    height: 1.5rem;
    line-height: 1.5rem;
    background-color: #151522;
    color: #e2dad8;
    padding: 0.5rem;
    margin: 0 0.2rem;
    border-radius: 2px;
  }
</style>

<div class="card">
  <img src="{image}" alt="{title}" />
  <div id="tech">
    {#if tech.frontend.length > 0}
    <div class="techlist">
      <p class="type">Frontend</p>
      <ul>
        {#each frontend as tech}
        <li>{tech}</li>
        {/each}
      </ul>
    </div>
    {/if} {#if tech.backend.length > 0}
    <div class="techlist">
      <p class="type">Backend</p>
      <ul>
        {#each backend as tech}
        <li>{tech}</li>
        {/each}
      </ul>
    </div>
    {/if}
  </div>
  <h3>{title}</h3>
  <p>{description}</p>
</div>
