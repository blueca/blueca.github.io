<script>
  import Sidebar from './components/Sidebar.svelte';
  import PageContainer from './components/PageContainer.svelte'

  let page = 'about'
  let scrolling = true

  function handlePageClick(event) {
    scrolling = false
    page = event.detail.text;
    const element = document.getElementById(page)
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTimeout(function(){ scrolling = true; }, 600)
  }

  function handlePageScroll(event) {
    if (scrolling) {
      page = event.detail.text;
    } 
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
  <PageContainer on:message={handlePageScroll} selected={page}/>
</main>