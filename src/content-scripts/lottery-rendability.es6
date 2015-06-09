// シアターくじを引くボタンを結果の上に持ってくる

(function main() {
  let form = document.querySelector("form[action*='execcast']");
  if(!form) return;
  form = form.parentNode.parentNode;

  function closestHeadingByClassName(e, names) {
    if(typeof names === "string") names = names.split(" ");
    names = names.sort();
    while (e = e.previousElementSibling) {
      if (e.className.split(" ").sort().every((x,i)=>x===names[i])) { return e; }
    }
    return null;
  }

  let firstHeading = document.querySelector(".heading.cap-03");
  
  let formTitle = closestHeadingByClassName(form, "heading cap-03");

  if(firstHeading.isEqualNode(formTitle)) return;

  for(let i = 0, e = formTitle; i < 4; ++i){
    let t = e;
    e = e.nextElementSibling;
    firstHeading.insertAdjacentElement("beforeBegin", t);
  }
})();
