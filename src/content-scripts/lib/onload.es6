// ロード時に何かする
"use strict";

let handlers = [];
let loaded = false;

export default function onload(handler) {
  handlers.push(handler);
  if (loaded) {
    handler();
  }
}

// 最初に一度呼ぶ
for (let handler of handlers) {
  handler();
}
loaded = true;

// BGM 付きイベントでは xhr で取ってきて #wrapper の中身を置換している
let element = document.getElementById('wrapper');
if (element) {
  new MutationObserver(() => {
    for (let handler of handlers) {
      handler();
    }
  })
  .observe(element, {
    childList: true,
  });
}
