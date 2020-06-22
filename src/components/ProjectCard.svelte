<script>
  export let title;
  export let image;
  export let description;
  export let tech;
  export let repo;
</script>

<style>
  .card {
    box-shadow: 0 0 4px black;
    border-radius: 2px;
    height: 25rem;
    width: auto;
    background-color: #151522;
    color: #e2dad8;
  }

  img {
    width: 97%;
    padding-top: 0.5rem;
  }

  h3 {
    text-align: left;
    padding-left: 0.6rem;
  }

  p {
    text-align: left;
    padding-left: 0.6rem;
  }
</style>

<div class="card">
  <img src="{image}" alt="{title}" />
  <h3>{title}</h3>
  <p>{description}</p>
</div>
