<script>
  import About from './About.svelte';
  import Projects from './Projects.svelte';
  import Contact from './Contact.svelte';
</script>

<style>
  section {
    height: 100%;
    width: 100%;
    background-color: yellow;
    grid-area: pageContent;
  }

  h2 {
    text-align: left;
  }
</style>

<section>
  <About />
  <Projects />
  <Contact />
</section>
