<script>
  import About from './About.svelte';
  import Projects from './Projects.svelte';
  import Contact from './Contact.svelte';
</script>

<style>
  section {
    height: 100%;
    width: 100%;
    grid-area: pageContent;
    overflow-y: auto;
    color: #151522;
  }

  h2 {
    text-align: left;
  }
</style>

<section>
  <About/>
  <Projects />
  <Contact />
</section>
