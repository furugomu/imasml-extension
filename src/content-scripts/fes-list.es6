// フェスリストを敵の最大HPでフィルター

(function main() {
  if (!new RegExp('/fes/event(_multi)?_list').test(location.href)) { return; }

  // フィルター値保存とフォーム生成
  const STORAGE_KEY = "maxhp_filtering_threshold";
  const DEFAULT_THRESHOLD = 9000000;

  let threshold = localStorage[STORAGE_KEY] || DEFAULT_THRESHOLD;

  let input = document.createElement('input');
  document.querySelector('.main-menu').insertAdjacentElement('beforeend', input);
  input.type = 'number';
  input.step = '10000';
  input.value = threshold;

  input.addEventListener('input', () => {
    localStorage[STORAGE_KEY] = input.value;
    filter(parseInt(input.value));
  }, false);

  // フィルター処理
  let hpPattern = /HP\s+(\d+)\s*\/\s*(\d+)/;
  let list = document.querySelector('.list-bg');
  let items = Array.from(list.children)
                .filter((el) => hpPattern.test(el.textContent));

  function filter(threshold) {
    if (!items) return;

    for (let fes of items) {
      let m = fes.textContent.match(hpPattern);
      let maxhp = m[2]|0;

      if (maxhp < threshold) {
        fes.style.opacity = '0.6';
      }
      else {
        fes.style.opacity = null;
      }
    }
  }
  filter(threshold);

  // ついでにアクセスキーを付ける
  items.forEach((fes, i) => {
    let button = fes.querySelector('[type=submit]');
    let accesskey = String(i+1);
    button.setAttribute('accesskey', accesskey);
    if (button.tagName === 'INPUT') {
      button.value += ' '+accesskey;
    }
    else if (button.tagName === 'BUTTON') {
      button.innerHTML += ' '+accesskey;
    }
  });

  window.scrollTo(0, 200);
})();
