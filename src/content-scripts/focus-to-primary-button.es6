import selectVisible from './lib/select-visible';
import onload from './lib/onload';

function focus() {
  var selector = [
    '.execute-lesson.useitem-none',
    '.MainBtn :link',
    'button.MainBtn',
  ].join(', ');

  setTimeout(() => {
    let e = selectVisible(selector);
    // スペシャルレッスンボタンがあるときはフォーカさない
    let spLessonButton = document.querySelector('.useitem-05:not(.btn-off)');
    if (e && !spLessonButton) { e.focus(); }
  }, 0);
}

onload(() => {
  focus();

  // esc を押したらダイアログを閉じるはずなので見えているボタンにフォーカスを移す
  document.addEventListener('keydown', (event) => {
    if (event.keyCode !== 0x1b) { return; }
    focus();
  });

  // フォームがひとつだけ
  /* なんか邪魔
  if (document.forms.length === 1) {
    let e = selectVisible('[type=submit],button', document.forms[0]);
    if (e) { e.focus(); }
  }
  */
});
