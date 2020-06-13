function toggle_menu() {
  var nav = document.getElementsByTagName('nav')[0];
  nav.classList.toggle('active');

  var entry_content = document.getElementsByClassName('entry-content')[0];
  entry_content.classList.toggle('inactive');
}