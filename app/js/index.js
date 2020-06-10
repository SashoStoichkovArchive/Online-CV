function toggle() {
  var sec = document.getElementById('sec');
  sec.classList.toggle('active');

  var nav = document.getElementsByClassName('navigation')[0];
  nav.classList.toggle('active');
}