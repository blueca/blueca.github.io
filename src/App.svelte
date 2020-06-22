<script>
  import Sidebar from './components/Sidebar.svelte';
  import PageContainer from './components/PageContainer.svelte'

  let page = 'about'

  function handlePageClick(event) {
    page = event.detail.text;
    const element = document.getElementById(page)
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
</script>

<style>
  main {
    text-align: center;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 3rem 25rem auto;
    grid-template-areas: 
      ". sidebar pageContent";
  }
</style>

<main>
  <Sidebar on:message={handlePageClick} selected={page}/>
  <PageContainer selected={page}/>
</main>