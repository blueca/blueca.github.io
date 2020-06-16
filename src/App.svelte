<script>
  import Sidebar from './components/Sidebar.svelte';
</script>


<style>
	main {
		text-align: center;
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 3rem 25rem auto;
		grid-template-areas: 
			". sidebar content";
  }
</style>


<main>
	<Sidebar/>
</main>