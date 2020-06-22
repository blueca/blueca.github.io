<script>
  import { onMount } from 'svelte';
  import About from './About.svelte';
  import Projects from './Projects.svelte';
  import Contact from './Contact.svelte';

  
  
  onMount(() => {
    let options = { 
      threshold: 1
    };
    let callback = (entries, observer) => {
      console.dir(entries)
    };
    let observer = new IntersectionObserver(callback, options);
    let target = document.querySelector('#testing');
    
    observer.observe(target);
  })
</script>

<style>
  section {
    height: 100%;
    width: 100%;
    grid-area: pageContent;
    overflow-y: auto;
    color: #151522;
  }
</style>

<section>
  <About/>
  <Projects/>
  <p id="testing">testing paragraph</p>
  <Contact/>
</section>
