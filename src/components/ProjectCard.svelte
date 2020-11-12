<script>
  import { slide } from 'svelte/transition';
  import { quintInOut } from 'svelte/easing';

  export let title;
  export let image;
  export let description;
  export let tech;
  export let repo;
  export let demo;

  const { frontend, backend, technology } = tech;
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
    height: 32rem;
    width: auto;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAFTklEQVR4nK1a27LtKAhcuV///3eZh4Gctm2MmTOp2pUsRURoLur+/fwxs8vfh5mN0WZmp3/fZraa2f5LHjPb6PcpaE4zG4IW5p0yvt4/t/p/ZjZkgjTG7Diudwz9PvEN7WPH2FD0z8yOXgFWM5vN7Ia2eC8twX3cGPTQt/h7SKy2wB8q+hK0Q3zc/pYaggEnfI/wvQUzNRHxuBt9j7AKRmgVV+7ptNMr7GIQCp9MEhpGq21o9gQy2ZwMpTVTglt+zQTbot1XvcoZOx6y5EB9aNmb+lo8a/9krYF2L6ILvFdMvP1w7aTwSYRSlqraWu0Z4zRyCa2F1VLYvGiWIXTjm/jEXEe0K0hnEx1AzJNeatGeb1LNOc+Z2nZscyFD8AhCC9Ae0H8jI8ZuJgR+z8Bsc+YHhcvJ36viEXNDQJmzKCSgvqBbtPC4qAHkoOjI1aIbofxwi6rusGrWd4ICl0J+18IFhJlTR1mBbajtNEH2PMIHp4CRQQnjVtR+YVD/+O/IzBfSdAiDWFfKGDA6etsCSorkynXbe9JrEUKUUOVBV34Bhw3tIiR3pkt4FFZwXvX8AK3d4bVSfyyIw+AKTr3HpD0LRD7+XVXARkWhWzOCi0yMG71V5JhIgxdP9PVxpR2Zc+MClFwPREGbvSV8YDgYL66hyvnIQSPZvc7TiHY3R1COWll2DqHjNxeQ2YSza/kU8X/ydlykrJoTv2wjwCDl4yCFW1qMmqwqZZzXCH6kQmr43eFWxtpvzhacLQgz80m/dxUpQsvUhhBohk7lH+irvrCblWqQ/z49mUMqiDVgN1L4nfwvYBzwfZuzasAolFazKIi/EQapxt2qs0e4kfrSAwcrE3FxMPJmYcWstSfHKkA6YMBB+AwmNixxZP7xyFiNcb++orEoQd4EdKatBUYWX1WodesUeBf+tao5WkjJhGkJigtvQfDV/NliX8YUCVkRHPQecaC1D+bQ7KrMKHwvsZQK4xgUVoqEAa/74UchNhLWlwmnRnSJCRk+HNZRyFBeUSV3PT34UxEqGweWDaFkpZw5ONEsrvlQymT/JsyiQmgxQDzGyZ+EmFig2oukxSFb+rNj/58Ph9mEJiyEO1KGnYpYvK0otg6cD05rlPHZJNCHOEdHxWDQhFIDqhejoZCFGStG7PiMS8fsYuU2N/CM8FTBY8uUkwQWXf3an33CDpMPJk7cjU8tSMAM/0TL+5nquoGhxguTuce1nU0qTwIF3Wr1FjgUxNhuhlNh7QMTJyg4DjGeHLKDlrKIhDF/hHGZVnl8xSvzQaBLD7WFckpeCBu31On4jwgRfRfQLFZn3cIxYcGTsNgJkezNWs3jWF2z/FLt8y7yIgW8CTOyRqm/OlxIHfwPzalgUB2MZQttMA5tYxT7T6ctvpDWvuXTXWZroirMNmjnXlqn43Nn9o3+yllpN5tMOOjEmM5Cq/f1KOOmlFBt3ArBUVDV7m38e2AIZVozceIOEe2btokJ1zsYdSZ36tMtUE0eYyCyhSWLG2B/p5ebQBvBheGEchUdXxNURldsgkT/czepeFi9/e09+XwS4nMnRwTqFKPCcE+4he94f4pmJs7NQq40opHpiqtlK6vjIh84UwWn940P8GBZSJ5Q+uYQn/2vqIJDwGf1hH+1F2f89uwyOZioIvS5MnB53rYWF/5QV8JqEJbzMrQa3ToJP8vK9qB/CwT5NQQ443NojMIKYaqrMofbRO0nLLAlX/AdLQ/ZiJDZ4MoOB6tNzK5wK+iyWu02ONAzvY+PBb/VU8+/Nv31Y/X9HxeQ8v+qqA21eqtohGN5gUwfMPwHFBzfCDVF1tcAAAAASUVORK5CYII=);
    background-color: #2d356a;
    color: #e2dad8;
    cursor: pointer;
    position: relative;
  }

  @media (max-width: 768px) {
    .card {
      width: 80%;
      height:auto;
      margin: auto;
    }
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
    padding: 0 0.6rem;
    margin: 0.5rem 0 2rem 0;
  }

  .techlist {
    display: flex;
    width: 97%;
    margin: 0.5rem auto auto auto;
    height: 3rem;
  }

  @media (max-width: 768px) {
    .techlist > p {
      font-size: 0.8rem;
    }

    .techlist > ul {
      font-size: 0.8rem;
    }
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
      {/if} {#if tech.technology.length > 0}
      <div class="techlist">
        <p class="type">Tech</p>
        <ul>
          {#each technology as tech}
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
      {/if} {#if repo.code}
      <a
        type="button"
        href="{repo.code}"
        target="_blank"
        transition:slide="{{easing: quintInOut}}"
        >Code</a
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
