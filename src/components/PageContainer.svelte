<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import About from './About.svelte';
  import Projects from './Projects.svelte';
  import Contact from './Contact.svelte';

  export let selected;

  const dispatch = createEventDispatcher();
  
  onMount(() => {
    let options = { 
      threshold: 0.51
    };
    let callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id !== selected) {
          const page = entries[0].target.id
          dispatch('message', {
            text: page
          })
        }
      })
    };
    let observer = new IntersectionObserver(callback, options);
    let about = document.querySelector('#about');
    let projects = document.querySelector('#projects');
    let contact = document.querySelector('#contact');

    observer.observe(about);
    observer.observe(projects);
    observer.observe(contact);
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
  <Contact/>
</section>
