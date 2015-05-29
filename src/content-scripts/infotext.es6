import unsafeCall from './lib/unsafe-call';

unsafeCall(function() {
  if (typeof _root !== 'object') { return; }

  function setinfotext() {
    let text = null;
    switch (method) {
    case "bus_normal_c0_d0":
      // なにもおきない
      let n = Number;
      if (n(_root.prog) + n(_root.ploop) * n(_root.prog_gain) === n(_root.prog_max)) {
        text = 'エリア終了';
      }
      else {
        text = '元気切れ';
      }
      break;
    case "bus_normal_c0_d1":
      // カード獲得
      text = _root.text.replace("\n", '');
      break;
    case "bus_normal_c0_d1":
      // コミュでバースト
      text = _root.dtalk.replace('\n', '');
      break;
    case 'bus_normal_c5_d2':
      // 強いフェス (イベントフェス？)
      text = 'レアフェス開催';
      break;
    case "bus_normal_c1_d3": // 通常bp1?
    case "bus_normal_c2_d3":
    case "bus_normal_c3_d3":
    case "bus_normal_c4_d3": // 通常bp3?
      text = _root.bp_gain+'BP 回復';
      break;
    case 'bus_normal_c3_d2':
      // 弱いフェス (イベントフェス？)
      text = '通常フェス開催';
      break;
    case 'bus_normal_c1_d4':
    case 'bus_normal_c2_d4':
    case 'bus_normal_c3_d4':
      // プライベートレッスン
      if (_root.next_url.indexOf('private_lesson') >= 0) {
        text = 'プライベートレッスン';
      }
      else if (_root.next_url.indexOf('event_raid') >= 0) {
        text = _root.dname + ' バースト';
      }
      else {
        text = '5分2倍';
      }
      break;
    case "bus_normal_c1_d7":
      text = 'ハート増加'; // 通常営業？
      break;
    case "bus_normal_c2_d7":
      text = 'ハート増加'; // イベント営業？
      break;
    default:
      if (method.indexOf("bus_normal") >= 0) {
        console.debug(
          [].filter.call(
            document.querySelectorAll('script'),
            e => e.textContent.indexOf('_root.next_url =') > 0)[0].textContent);
        console.debug(method);
      }

      if (_root.is_rare) {
        let type = _root.is_rare === "0" ? '通常' : 'レア';
        text = type + 'フェス開催';
      }
      else if (_root.dtalk) {
        alert(method);
        text = _root.dtalk.replace("\n", '');
      }
      else if (_root.text) {
        text = _root.text.replace("\n", '');
      }
    }

    if (text) {
      exportRoot.main_mc.infomation_mc.visible = true;
      exportRoot.main_mc.infomation_mc.infotext_mc.infotext.text = text;
    }
  }

  // exportRoot.main_mc が出来るまで待つ
  let timer = setInterval(() => {
    if (typeof exportRoot !== 'object') { return; }
    if (typeof exportRoot.main_mc !== 'object') { return; }
    clearInterval(timer);
    setinfotext();
  }, 100);
});
