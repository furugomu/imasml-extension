// エスケープを押すとダイアログが閉じる
document.addEventListener('keydown', (e) => {
  if (e.keyCode != 0x1b) { return; }
  let selector = [
    '#fit-win-close',
    '#dialog-close',
    '.close-btn',
  ].join(', ');
  let button = document.querySelector(selector);
  if (button) {
    button.click();
  }
}, false);
