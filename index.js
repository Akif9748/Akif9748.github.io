var delay_time_base =30;
function hover_effect(x, old_txt) {
  if (!x.classList.contains('effect')) {
    x.classList.add('effect');
    var random_txt = [];
    for (var i = 0; i < 24; i++) {
      var t = '';
      for (var ii = 0; ii < old_txt.length; ii++) {
        t += old_txt.charAt(Math.floor(Math.random() * old_txt.length));
      }
      random_txt.push(t);
    }
    random_txt.push(old_txt);
    for (var i = 0; i < random_txt.length; i++) {
      set_delayed_txt(x, i, random_txt[i]);
    }
    window.setTimeout(function () {
      x.classList.remove('effect');
    }, delay_time_base * random_txt.length);
  }
}
function set_delayed_txt(node, time, txt) {
  window.setTimeout(function () {
    if (node.tagName == 'INPUT') {
      node.setAttribute('placeholder', txt);
    } else {
      node.innerHTML = txt;
    }
  }, delay_time_base * time);
}
