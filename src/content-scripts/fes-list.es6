// フェスリストを敵の最大HPでフィルター

(function main() {
  if (!new RegExp('/fes/event(_multi)?_list').test(location.href)) { return; }

  // フィルター値保存とフォーム生成
  const STORAGE_KEY = "maxhp_filtering_threshold";
  const DEFAULT_THRESHOLD = 9000000;

  let threshold = parseInt(localStorage.getItem(STORAGE_KEY));
  if(isNaN(threshold)) threshold = DEFAULT_THRESHOLD;

  function updateThreshold(e){
    e.preventDefault();

    let el = document.querySelector("#mlext_threshold").threshold;
    localStorage.setItem(STORAGE_KEY, parseInt(el.value));
    location.reload();
  }

  document.querySelector('.main-menu').insertAdjacentHTML(
    'beforeend',
    '<form id="mlext_threshold">'+
    `<input type="text" value="${threshold}" name="threshold">`+
    '<input type="submit">'+
    '</form>');

  document.getElementById("mlext_threshold").addEventListener("submit", updateThreshold);

  // フィルター処理
  let list = document.querySelector('.list-bg');
  let items = Array.from(list.children)
                .filter((el)=>/HP\s+(\d+)\s*\/\s*(\d+)/.test(el.textContent));

  for (let i = 0; i < items.length; ++i) {
    let fes = items[i];
    let m = fes.textContent.match(/HP\s+(\d+)\s*\/\s*(\d+)/);
    let maxhp = m[2]|0;

    if (maxhp < threshold) {
      fes.style.opacity = '0.6';
    }

    // ついでにアクセスキーを付ける
    let button = fes.querySelector('[type=submit]');
    let accesskey = String(i+1);
    button.setAttribute('accesskey', accesskey);
    if (button.tagName === 'INPUT') {
      button.value += ' '+accesskey;
    }
    else if (button.tagName === 'BUTTON') {
      button.innerHTML += ' '+accesskey;
    }
  }

  window.scrollTo(0, 200);
})();
