<script>
  import ContactForm from './ContactForm.svelte'
</script>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
  
  div {
    display: flex;
    flex-direction: column;
    height: 65%;
    align-items: center;
    justify-content: space-around;
  }
</style>

<section id="contact" class="page">
  <h2>Contact</h2>
  <div>
    <p>
      If you'd like to get in contact with me for any reason, please submit a
      message below and I'll get back to you.
    </p>
    <ContactForm />
  </div>
</section>
