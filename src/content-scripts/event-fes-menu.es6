/// フェスイベント用の雑なリンクを作る

(function main() {
  // 引き出すメニューの「合同フェス」リンク
  let link = document.getElementById('g-menu-fes');
  if (!link) { return; }
  if (link.href.indexOf('event_list') < 0) { return; }

  let mainMenu = document.querySelector('.main-menu');
  if (!mainMenu) { return; }

  mainMenu.insertAdjacentHTML(
    'beforeend',
    '<div>'+
    ' <a href=/app/index.php/fes/event_list accesskey=0>一覧(<u>0</u>)</a>'+
    ' <a href=/app/index.php/item/use_review/id/18 accesskey=7>♥(<u>7</u>)</a>'+
    ' <a href=/app/index.php/item/use_review/id/488 accesskey=8>棒(<u>8</u>)</a>'+
    ' <a href=/app/index.php/item/use_review/id/489 accesskey=9>超棒(<u>9</u>)</a>'+
    '</div>');
})();
