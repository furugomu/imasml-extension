import selectVisible from './lib/select-visible';
import onload from './lib/onload';

// 自動であめいっこ選ぶ
onload(() => {
  let form = document.getElementById('send-attack');
  if (!form) { return; }

  function itemButton() {
    let buttons = form.querySelectorAll('.item-panel [data-is-usable="1"].choice');
    return buttons[buttons.length - 1];
  }

  // BP0ボタンがあったらやめる
  if (form.querySelector('.bp-button [data-value="0"]')) { return; }

  // 現在のBPが0だったらダイアログを表示してあめいっこ選ぶ
  if (form.max_bp.value === '0') {
    document.getElementById('fit-win').style.display = 'block';
    eatCandy(form);
  }
});

// 1-5 を押したとき
document.addEventListener('keypress', (e) => {
  let form = document.getElementById('send-attack');
  if (!form) return;

  // BP が押した数字になるまで飴を押す
  let n = e.keyCode - 0x30; // 0-9
  let button = form.querySelector(`.bp-button [data-value="${n}"]`); // BP 0-5 のボタン
  if (!button) return;

  // ダイアログを見えるようにする
  document.getElementById('fit-win').style.display = 'block';

  for (let i = Number(form.max_bp.value); i < n; ++i) {
    eatCandy(form);
  }
  button.click();

  let submitButton = selectVisible('[type=submit]', form);
  submitButton.focus();

}, false);

// 右端の飴を押す
function eatCandy(form) {
  let buttons = form.querySelectorAll('.item-panel [data-is-usable="1"].choice');
  let button = buttons[buttons.length - 1];
  if (button) {
    button.click();
  }
}
