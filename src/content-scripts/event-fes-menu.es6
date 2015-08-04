/// フェスイベント用の雑なリンクを作る

const ITEM1 = 'event-sp-item-1';
const ITEM2 = 'event-sp-item-2';

(function main() {
  // 引き出すメニューの「合同フェス」リンク
  let link = document.getElementById('g-menu-fes');
  if (!link) { return; }
  if (link.href.indexOf('event_list') < 0) { return; }

  // 棒のURLを得る
  saveItemUrls();

  // リンクをつくる
  let mainMenu = document.querySelector('.main-menu');
  if (!mainMenu) { return; }

  let defaultUrl = '/app/index.php/item';
  let url1 = localStorage[ITEM1] || defaultUrl;
  let url2 = localStorage[ITEM2] || defaultUrl;

  mainMenu.insertAdjacentHTML(
    'beforeend',
    `<div>
     <a href=/app/index.php/fes/event_list accesskey=0>一覧(<u>0</u>)</a>
     <a href=/app/index.php/item/use_review/id/18 accesskey=7>♥(<u>7</u>)</a>
     <a href="${url1}" accesskey=8>棒(<u>8</u>)</a>
     <a href="${url2}" accesskey=9>超棒(<u>9</u>)</a>
    </div>`);
})();

function saveItemUrls() {
  // 右のだけがあるとおかしくなるが気にしない
  let links = document.querySelectorAll("#event-sp-item :link");
  if (links[0]) {
    localStorage[ITEM1] = links[0].href;
  }
  if (links[1]) {
    localStorage[ITEM2] = links[1].href;
  }
}
