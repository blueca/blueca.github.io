<script>
  import Profile from './Profile.svelte'
</script>
<style>
  section {
    height: 100vh;
    padding-top: 1rem;
  }

  h2 {
    margin-top: 0;
  }

  p {
    border: black solid 2px;
    width: 75%;
    margin: auto;
  }
</style>

<section id="about" class="page">
  <h2>About</h2>
  <Profile />
  <p>
    My name is Nick, I'm a software developer based in the north of England.
    Coming from the world of accounting, I got my start in programming with VBA
    thanks to my desire to automate part of my workload and increase my
    efficiency when analysing and reporting on spreadsheet data. It wasn't long
    before I found myself much more interested in this compared to my main role
    at the time and I soon realised that if I wanted to take this seriously, it
    was time to branch out from VBA to something more flexible and robust. I
    settled on JavaScript largely due to the wealth of documentation and
    tutorials available, and some time after that I decided that ultimately I
    wanted to work in devolpment. To do this in a reasonable timeframe I chose
    to enroll in a coding bootcamp, the Manchester based Northcoders. In my time
    there I learned the fundamentals of software development, and built on those
    foundations by taking a deeper look at backend and frontend web devolpment
    using Node.js and React. On top of these technical skills, I've learned
    common industry practices including git, pair programming and Agile
    development. Perhaps most valuable of all, I've developed the skills to
    independently advance my learning in whatever direction I choose,
    exemplified by my final group project - a cross platform mobile application
    built with a techstack almost entirely new to me, using Flutter with a
    Google Firebase backend. A demo of this project, along with others I've
    developed both during and after the bootcamp, is available in the Projects
    section below.
  </p>
</section>
