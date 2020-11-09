<script>
  import Profile from './Profile.svelte'
  import { slide } from 'svelte/transition';
  import { quintInOut } from 'svelte/easing';

  let expanded = false;

  function handleClick(event) {
    expanded = !expanded;
  }
  
</script>
<style>
  section {
    min-height: 100vh;
    padding-top: 1rem;
  }

  h2 {
    margin-top: 0;
  }

  p {
    /* border: black solid 2px; */
    padding-top: 1rem;
    width: 75%;
    margin: auto;
  }

  #bio:hover {
    cursor: pointer;
  }

  #intro {
    font-size: 20px;
  }

  .arrow {
    border: solid gray;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 0.3rem;
    margin: auto;
    position: relative;
    top: 0.5rem;
  }

  #bio:hover > .arrow {
    padding: 0.4rem;
  }

  #close {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    /* position: absolute; */
    /* bottom: 0.5rem; */
  }

  #open {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    /* position: absolute; */
    /* bottom: 0.5rem; */
  }

  .expand {
    color: gray;
  }
</style>

<section id="about" class="page">
  <h2>About</h2>
  <Profile />
  <div id='bio' on:click="{handleClick}">
  <p id='intro'>
    I'm Nick, a software developer based in the north of England. Most of my experience is with JavaScript/Node.js, however I have branched out occasionally as the need arises, or just to try new things. Some examples of my work can be seen in the Projects section below.
  </p>
  {#if expanded}
  <p id='more' transition:slide="{{easing: quintInOut}}">
    Coming from the world of accounting, I got my start in programming with VBA thanks to my desire to automate part of my
    workload and increase my efficiency when analysing and reporting on spreadsheet data. It wasn't long before I found
    myself much more interested in this compared to my main role at the time and I soon realised that if I wanted to take
    this seriously, it was time to jump from VBA to something more flexible and robust. I settled on JavaScript largely due
    to the wealth of documentation and tutorials available, and some time after that I decided that ultimately I wanted to
    work in development. To do this in a reasonable timeframe I chose to enroll in a coding bootcamp, the Manchester based
    Northcoders. In my time there I learned the fundamentals of software development, and built on those foundations by
    taking a deeper look at backend and frontend web devolpment using Node.js and React. On top of these technical skills,
    I've learned common industry practices including git, pair programming and Agile development. Perhaps most valuable of
    all, I've developed the skills to independently advance my learning in whatever direction I choose, exemplified by my
    final group project - a cross platform mobile application built with a techstack almost entirely new to me, using
    Flutter with a Google Firebase backend. A demo of this project, along with others I've developed both during and after
    the bootcamp, is available below.
  </p>
  {/if}
  {#if expanded}
  <p class='expand'>Less...</p>
    <div id="close" class='arrow'></div>
  {:else}
  <p class='expand'>More...</p>
  <div id="open" class='arrow'></div>
  {/if}
  </div>
</section>
