<script>
  import { createEventDispatcher } from 'svelte';
  import Profile from './Profile.svelte'

  export let selected;

  const dispatch = createEventDispatcher();

  function handleClick(event) {
    const page = event.target.id.toLowerCase();

    dispatch('message', {
      text: page
    })
  }
</script>


<style>
  nav {
    display: flex;
    flex-direction: column;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAFTklEQVR4nK1a27LtKAhcuV///3eZh4Gctm2MmTOp2pUsRURoLur+/fwxs8vfh5mN0WZmp3/fZraa2f5LHjPb6PcpaE4zG4IW5p0yvt4/t/p/ZjZkgjTG7Diudwz9PvEN7WPH2FD0z8yOXgFWM5vN7Ia2eC8twX3cGPTQt/h7SKy2wB8q+hK0Q3zc/pYaggEnfI/wvQUzNRHxuBt9j7AKRmgVV+7ptNMr7GIQCp9MEhpGq21o9gQy2ZwMpTVTglt+zQTbot1XvcoZOx6y5EB9aNmb+lo8a/9krYF2L6ILvFdMvP1w7aTwSYRSlqraWu0Z4zRyCa2F1VLYvGiWIXTjm/jEXEe0K0hnEx1AzJNeatGeb1LNOc+Z2nZscyFD8AhCC9Ae0H8jI8ZuJgR+z8Bsc+YHhcvJ36viEXNDQJmzKCSgvqBbtPC4qAHkoOjI1aIbofxwi6rusGrWd4ICl0J+18IFhJlTR1mBbajtNEH2PMIHp4CRQQnjVtR+YVD/+O/IzBfSdAiDWFfKGDA6etsCSorkynXbe9JrEUKUUOVBV34Bhw3tIiR3pkt4FFZwXvX8AK3d4bVSfyyIw+AKTr3HpD0LRD7+XVXARkWhWzOCi0yMG71V5JhIgxdP9PVxpR2Zc+MClFwPREGbvSV8YDgYL66hyvnIQSPZvc7TiHY3R1COWll2DqHjNxeQ2YSza/kU8X/ydlykrJoTv2wjwCDl4yCFW1qMmqwqZZzXCH6kQmr43eFWxtpvzhacLQgz80m/dxUpQsvUhhBohk7lH+irvrCblWqQ/z49mUMqiDVgN1L4nfwvYBzwfZuzasAolFazKIi/EQapxt2qs0e4kfrSAwcrE3FxMPJmYcWstSfHKkA6YMBB+AwmNixxZP7xyFiNcb++orEoQd4EdKatBUYWX1WodesUeBf+tao5WkjJhGkJigtvQfDV/NliX8YUCVkRHPQecaC1D+bQ7KrMKHwvsZQK4xgUVoqEAa/74UchNhLWlwmnRnSJCRk+HNZRyFBeUSV3PT34UxEqGweWDaFkpZw5ONEsrvlQymT/JsyiQmgxQDzGyZ+EmFig2oukxSFb+rNj/58Ph9mEJiyEO1KGnYpYvK0otg6cD05rlPHZJNCHOEdHxWDQhFIDqhejoZCFGStG7PiMS8fsYuU2N/CM8FTBY8uUkwQWXf3an33CDpMPJk7cjU8tSMAM/0TL+5nquoGhxguTuce1nU0qTwIF3Wr1FjgUxNhuhlNh7QMTJyg4DjGeHLKDlrKIhDF/hHGZVnl8xSvzQaBLD7WFckpeCBu31On4jwgRfRfQLFZn3cIxYcGTsNgJkezNWs3jWF2z/FLt8y7yIgW8CTOyRqm/OlxIHfwPzalgUB2MZQttMA5tYxT7T6ctvpDWvuXTXWZroirMNmjnXlqn43Nn9o3+yllpN5tMOOjEmM5Cq/f1KOOmlFBt3ArBUVDV7m38e2AIZVozceIOEe2btokJ1zsYdSZ36tMtUE0eYyCyhSWLG2B/p5ebQBvBheGEchUdXxNURldsgkT/czepeFi9/e09+XwS4nMnRwTqFKPCcE+4he94f4pmJs7NQq40opHpiqtlK6vjIh84UwWn940P8GBZSJ5Q+uYQn/2vqIJDwGf1hH+1F2f89uwyOZioIvS5MnB53rYWF/5QV8JqEJbzMrQa3ToJP8vK9qB/CwT5NQQ443NojMIKYaqrMofbRO0nLLAlX/AdLQ/ZiJDZ4MoOB6tNzK5wK+iyWu02ONAzvY+PBb/VU8+/Nv31Y/X9HxeQ8v+qqA21eqtohGN5gUwfMPwHFBzfCDVF1tcAAAAASUVORK5CYII=);
    background-color: #2d356a;
    color: #e2dad8;
    height: 100vh;
    box-shadow: 0 0 4px black;
    align-items: center;
    justify-content: space-evenly;
    grid-area: sidebar;
    z-index: 10;
  }

  ul {
    padding: 0;
    margin: 0;
    font-size: 2.5rem;
    width: 60%;
  }

  li {
    list-style-type: none;
    padding: 1rem 0;
    cursor: pointer;
  }  

  li:hover {
    color:#7f84a3;
  }

  a {
    text-decoration: none;
    color: #e2dad8;
  }

  .active {
    list-style-type: '>';
  }
</style>

<nav>
  <Profile />
  <ul>
    <li id="ABOUT" class:active="{selected === 'about'}" on:click={handleClick}>About</li>
    <li id="PROJECTS" class:active="{selected === 'projects'}" on:click={handleClick}>Projects</li>
    <li id="CONTACT" class:active="{selected === 'contact'}" on:click={handleClick}>Contact</li>
  </ul>
</nav>
