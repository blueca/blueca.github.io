<script>
  export let title;
  export let image;
  export let description;
  export let tech;
  export let repo;

  const { frontend, backend } = tech;
  let expanded = false;

  function handleClick() {
    expanded = !expanded;
  }
</script>

<style>
  .card {
    box-shadow: 0 0 4px black;
    border-radius: 2px;
    height: 30rem;
    width: auto;
    background-color: #2d356a;
    color: #e2dad8;
    cursor: pointer;
    position: relative;
  }

  .card:hover > .arrow {
    padding: 0.4rem;
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
    margin: 0.5rem 0;
  }

  .techlist {
    display: flex;
    width: 97%;
    margin: 0.5rem auto auto auto;
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

  h3 {
    margin: 0;
  }

  .arrow {
    border: solid #e2dad8;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 0.3rem;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    position: absolute;
    bottom: 0.5rem;
    margin: auto;
  }
</style>

<div class="card" on:click="{handleClick}">
  {#if !expanded}
  <img id="image" src="{image}" alt="{title}" />
  {/if}
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
  <div class="arrow"></div>
</div>
