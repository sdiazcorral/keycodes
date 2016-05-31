$(document).ready(function() {
  $('body').on('keydown', record_keycode);
});

function record_keycode(event) {
  var key = event.which;
  show_keycode(key);
}

function show_keycode(key) {
  var key_container = $('#key');
  key_container.text(key);
}