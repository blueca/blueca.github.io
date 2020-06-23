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
    border-radius: 2px 2px 0 0;
  }

  h3 {
    text-align: left;
    padding-left: 0.6rem;
  }

  p {
    text-align: left;
    padding-left: 0.6rem;
  }

  #frontend {
    display: flex;
  }
  #backend {
    display: flex;
  }

  ul {
    display: flex;
    list-style-type: none;
  }
</style>

<div class="card">
  <img src="{image}" alt="{title}" />
  <div id="tech">
    {#if tech.frontend.length > 0}
    <div id="frontend">
      <p>Frontend</p>
      <ul>
        {#each frontend as tech}
        <li>{tech}</li>
        {/each}
      </ul>
    </div>
    {/if} {#if tech.backend.length > 0}
    <div id="backend">
      <p>Backend</p>
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
