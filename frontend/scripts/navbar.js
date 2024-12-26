let navbar = () => {
  let card = `
    <div id="nav-cont">
      <a id="logo" href="index.html">
        Mini Quiz App
      </a>
      <div id="nav-link">
        <a href="index.html">Home</a>
        <a href="quiz.html">Quiz</a>
        <a href="questions.html">Questions</a>
      </div>
    </div>`;
  document.getElementById("nav").innerHTML = card;
};
navbar()