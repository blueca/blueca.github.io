<script>
  import Profile from './Profile.svelte'

  let selected = 'about';

  function handleClick(event) {
    selected = event.target.id.toLowerCase();
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
    /* list-style-type: none; */
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

  div {
    display: flex;
  }

  .active {
    list-style-type: '>';
  }
</style>

<nav>
  <Profile/>
    <ul>
      <li id="ABOUT" class:active="{selected === 'about'}" on:click={handleClick}>About</li>
      <li id="PROJECTS" class:active="{selected === 'projects'}" on:click={handleClick}>Projects</li>
      <li id="CONTACT" class:active="{selected === 'contact'}" on:click={handleClick}>Contact</li>
    </ul>
</nav>
