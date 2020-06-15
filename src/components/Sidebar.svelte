<script>
  import Profile from './Profile.svelte'
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
  }  
</style>

<nav>
  <Profile/>
  <ul>
    <li>About</li>
    <li>Projects</li>
    <li>Contact</li>
  </ul>
</nav>
