<script>
  import Profile from './Profile.svelte'

  let selected;

  function handleClick(event) {
    selected = event.target.id
  }

</script>

<style>
  nav {
    display: flex;
    flex-direction: column;
    background-color: #2d356a;
    color: #e2dad8;
    margin-left: 3vw;
    height: 100%;
    width: 20%;
    box-shadow: 0 0 4px black;
    align-items: center;
    justify-content: space-evenly;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: 2.5rem;
  }

  li {
    padding: 1rem;
    cursor: pointer;
  }  

  li:hover {
    color:#7f84a3;
  }
</style>

<nav>
  <Profile/>
  <ul>
    <li id="about" on:click={handleClick}>About</li>
    <li id="projects" on:click={handleClick}>Projects</li>
    <li id="contact" on:click={handleClick}>Contact</li>
  </ul>
</nav>
