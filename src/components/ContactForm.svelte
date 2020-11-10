<script>
  //script
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 20rem;
    padding: 2rem;
  }

  @media (max-width: 768px) {
    form {
      width: 80%;
    }
  }

  label {
    align-self: flex-start;
  }

  input {
    height: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    background-color: white;
    border: 2px solid black;
    border-radius: 5px;
    font-size: 0.8rem;
  }

  ::placeholder {
    color: #c2bab8;
  }

  input:focus::placeholder {
    color: #e2dad8;
  }

  textarea {
    height: 6rem;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    background-color: white;
    border: 2px solid black;
    border-radius: 5px;
    font-size: 0.8rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: #e2dad8;
  }

  textarea:focus::placeholder {
    color: #e2dad8;
  }

  button {
    height: 2rem;
    background-color: #e2dad8;
    border: 1px solid black;
    border-radius: 2px;
  }
</style>

<form action="https://formspree.io/mgenlvye" method="POST">
  <label class="label" for="form_name">
    Name:
  </label>
  <input
    id="form_name"
    type="text"
    name="name"
    required
    placeholder="John Smith"
  />
  <label class="label" for="form_email">
    Email:
  </label>
  <input
    id="form_email"
    type="email"
    name="_replyto"
    required
    placeholder="email@example.com"
  />
  <label class="label" for="form_message">
    Message:
  </label>
  <textarea
    id="form_message"
    name="message"
    required
    placeholder="Enter message..."
  ></textarea>
  <button type="submit">Send</button>
</form>
