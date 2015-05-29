// Control か Return かまんなかクリックで次のページへ

import unsafeCall from './lib/unsafe-call';

unsafeCall(function() {
  if (typeof _root !== 'object') { return; }
  if (!_root.next_url) { return; }

  listen();

  if (typeof loadRoot === 'function') {
    window.loadRoot = (function(original) {
      return function() {
        original();
        listen();
      }
    })(loadRoot);
  }

  function go() {
    if (typeof redirectTo === 'function') {
      redirectTo(_root.next_url);
    }
    else {
      location.href = _root.next_url;
    }
    stopListening();
  }

  function listen() {
    document.addEventListener('keydown', onkeydown, false);
    document.addEventListener('mousedown', onmousedown, false);
  }

  function stopListening() {
    document.removeEventListener('keydown', onkeydown, false);
    document.removeEventListener('mousedown', onmousedown, false);
  }

  function onkeydown(e) {
    if (e.keyCode === 13 || e.ctrlKey) { go(); }
  }

  function onmousedown(e) {
    if (e.button === 1) { go(); }
  }

});
