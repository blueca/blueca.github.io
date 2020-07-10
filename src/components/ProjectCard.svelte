<script>
  import { slide } from 'svelte/transition';
  import { quintInOut } from 'svelte/easing';

  export let title;
  export let image;
  export let description;
  export let tech;
  export let repo;
  export let demo;

  const { frontend, backend } = tech;
  let visible = true;

  function handleClick(event) {
    if (event.target.type !== 'button') {
      visible = !visible;
    }
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
    height: 50%;
    margin-top: 0.5rem;
    border-radius: 2px;
    box-shadow: 0 0 4px black;
  }

  h3,
  h4 {
    text-align: left;
    padding-left: 0.6rem;
    margin: 0;
  }

  p {
    text-align: left;
    padding-left: 0.6rem;
    margin: 0.5rem 0 2rem 0;
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

  a {
    height: 1.5rem;
    line-height: 1.5rem;
    background-color: green;
    color: #e2dad8;
    padding: 0.5rem 0.5rem 0.5rem 0.6rem;
    border-radius: 2px;
    text-decoration: none;
    box-shadow: 0 0 2px black;
    margin: 0.5rem 0.6rem 2rem 0;
  }

  a:hover {
    box-shadow: 0 0 4px black;
    background-color: rgb(2, 107, 2);
  }

  a:active {
    box-shadow: 0 0 2px white;
  }

  #repolinks,
  #demolinks {
    display: flex;
    justify-content: left;
    width: 97%;
    margin: 0.5rem auto auto auto;
  }
</style>

<div class="card" on:click="{handleClick}">
  {#if visible}
  <img
    id="image"
    src="{image}"
    alt="{title}"
    transition:slide="{{easing: quintInOut}}"
  />
  {/if}
  <div>
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
    {#if !visible}
    <h4 transition:slide="{{easing: quintInOut}}">Repo</h4>
    <div id="repolinks">
      {#if repo.frontend}
      <a
        type="button"
        href="{repo.frontend}"
        target="_blank"
        transition:slide="{{easing: quintInOut}}"
        >Frontend</a
      >
      {/if} {#if repo.backend}
      <a
        type="button"
        href="{repo.backend}"
        target="_blank"
        transition:slide="{{easing: quintInOut}}"
        >Backend</a
      >
      {/if}
    </div>
    {#if Object.keys(demo).length > 0}
    <div>
      <h4 transition:slide="{{easing: quintInOut}}">Demo</h4>
      <div id="demolinks">
        {#if demo.frontend}
        <a
          type="button"
          href="{demo.frontend}"
          target="_blank"
          transition:slide="{{easing: quintInOut}}"
          >Live Frontend</a
        >
        {/if} {#if demo.backend}
        <a
          type="button"
          href="{demo.backend}"
          target="_blank"
          transition:slide="{{easing: quintInOut}}"
          >Live Backend</a
        >
        {/if} {#if demo.video}
        <a
          type="button"
          href="{demo.video}"
          target="_blank"
          transition:slide="{{easing: quintInOut}}"
          >Video</a
        >
        {/if}
      </div>
    </div>
    {/if} {/if}
  </div>
  <div class="arrow"></div>
</div>
