<script>
  import Profile from './Profile.svelte'

  let selected;

  function handleClick(event) {
    selected = event.target.innerText.toLowerCase();
    const element = document.getElementById(selected)
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

</script>

<style>
  nav {
    display: flex;
    flex-direction: column;
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
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: 2.5rem;
    width: 100%;
  }

  li {
    padding: 1rem;
    cursor: pointer;
  }  

  li:hover {
    color:#7f84a3;
  }

  a {
    text-decoration: none;
    color: #e2dad8;
  }
</style>

<nav>
  <Profile/>
  <ul>
    <li on:click={handleClick}>About</li>
    <li on:click={handleClick}>Projects</li>
    <li on:click={handleClick}>Contact</li>
  </ul>
</nav>
