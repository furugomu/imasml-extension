import unsafeCall from './lib/unsafe-call';

unsafeCall(function() {
  if(typeof _root === "undefined") return;
  if([_root.exp, _root.exp_max, _root.exp_gain, _root.ploop].some((x)=>x === undefined)) return;

  let maxExp = parseInt(_root.exp_max);
  let endExp = parseInt(_root.exp) + parseInt(_root.exp_gain) * parseInt(_root.ploop);
  localStorage.setItem("mlext_current_exp", endExp);
  localStorage.setItem("mlext_max_exp", maxExp);
});

(function main(){
  if (!new RegExp('/tired').test(location.href)) { return; }

  let currentExp = parseInt(localStorage.getItem("mlext_current_exp"));
  let maxExp = parseInt(localStorage.getItem("mlext_max_exp"));

  let target = document.querySelector('.tired-user-st');
  let clone = target.cloneNode(true);
  clone.querySelector("th").innerText = "EXP";
  clone.querySelector("td").childNodes[0].nodeValue = currentExp+"/"+maxExp;
  target.insertAdjacentElement("afterEnd", clone);
  
  let gauge = clone.querySelector(".gauge > div");
  gauge.className = "exp";
  gauge.style.cssText = "width:"+((currentExp/maxExp*100)|0)+"%;";
})();