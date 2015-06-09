// 自動であめいっこ選ぶ

(function main() {
  let form = document.querySelector('form[action$="/battle/"]');
  if (!form) { return; }

  function itemButton() {
    let buttons = form.querySelectorAll('.item-panel [data-is-usable="1"].choice');
    return buttons[buttons.length - 1];
  }

  // BP0ボタンがあったらやめる
  if (form.querySelector('.bp-button-0')) { return; }

  // 現在のBPが0だったらダイアログを表示してあめいっこ選ぶ
  if (form.bp.value === '0') {
    document.getElementById('fit-win').style.display = 'block';
    itemButton(form).click();
  }

  // 2か3を押したらBPがその値になるまで飴を押す
  let submitButton = form.querySelector('[type=submit]');
  document.addEventListener('keypress', (e) => {
    let n = e.keyCode - 0x30;
    if (n < 2 || 3 < n) { return; } // n ∈ [2..3]
    for (let i = Number(form.bp.value); i < n; ++i) {
      itemButton().click();
    }
    submitButton.focus();
  }, false);
})();
