//typed animation
var typed = new Typed('#element', {
  strings: [
    'Full-Stack Web Developer.',
    'DataBase Developer.',
    'UI/UX Designer.',
    'Cybersecurity Enthusiast.',
    'Content Creator.',
    'Tech Lifelong Learner.',
    'Problem Solver.'
    ],
    typeSpeed: 50,
    backSpeed:20,
    backDelay:2000,
    showCursor: false,
    loop: true
});
//theme
function theme() {
  const darkBtn = document.getElementById('darkBtn');
  const lightBtn = document.getElementById('lightBtn');
  document.body.classList.toggle('light');
  if(document.body.classList.contains('light')) {
    darkBtn.style.display = 'none';
    lightBtn.style.display = 'block';
  } else{
     darkBtn.style.display = 'block';
     lightBtn.style.display = 'none';
  }
};