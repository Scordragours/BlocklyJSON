// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace planepage.
 */

if (typeof planepage == 'undefined') { var planepage = {}; }


planepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Plane_rows">\u884C\uFF1A%1</span><span id="Plane_getRows">\u884C (%1)</span><span id="Plane_rows1">\u5934\u7B49\u884C\uFF1A%1</span><span id="Plane_getRows1">\u5934\u7B49\u884C\uFF08%1\uFF09</span><span id="Plane_rows2">\u7ECF\u6D4E\u7B49\u884C\uFF1A%1</span><span id="Plane_getRows2">\u7ECF\u6D4E\u7B49\u884C\uFF08%1\uFF09</span><span id="Plane_seats">\u5EA7\u4F4D\uFF1A%1</span><span id="Plane_placeholder">\uFF1F</span><span id="Plane_setSeats">\u5EA7\u4F4D\uFF1D</span></div>';
};
if (goog.DEBUG) {
  planepage.messages.soyTemplateName = 'planepage.messages';
}


planepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = planepage.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1><a href="https://developers.google.com/blocky/">Blockly</a>&rlm; &gt; <a href="../index.html">Demos</a>&rlm; &gt; <span id="title">\u98DE\u673A\u5EA7\u4F4D\u8BA1\u7B97\u5668</span> &nbsp; ';
  var iLimit47 = opt_ijData.maxLevel + 1;
  for (var i47 = 1; i47 < iLimit47; i47++) {
    output += ' ' + ((i47 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i47) + '</span>' : (i47 < opt_ijData.level) ? '<a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i47) + '">' + soy.$$escapeHtml(i47) + '</a>' : '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i47) + '">' + soy.$$escapeHtml(i47) + '</a>');
  }
  output += '</h1></td><td class="farSide"><span ' + ((opt_ijData.lang == 'en') ? 'id="languageBorder"' : '') + ' style="padding: 10px"><select id="languageMenu"></select></span></td></tr></table><script src="slider.js"><\/script><svg id="plane" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="600" height="320" viewBox="0 110 600 320"><defs><g id="row1st"><rect class="seat1st" width="10" height="10" x="75" y="243" /><rect class="seat1st" width="10" height="10" x="75" y="254" /><rect class="seat1st" width="10" height="10" x="75" y="272" /><rect class="seat1st" width="10" height="10" x="75" y="283" /></g><g id="row2nd"><rect class="seat2nd" width="10" height="8" x="75" y="243" /><rect class="seat2nd" width="10" height="8" x="75" y="251" /><rect class="seat2nd" width="10" height="8" x="75" y="269" /><rect class="seat2nd" width="10" height="8" x="75" y="277" /><rect class="seat2nd" width="10" height="8" x="75" y="285" /></g><linearGradient id="grad1" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" style="stop-color:#fff;stop-opacity:0" /><stop offset="100%" style="stop-color:#fff;stop-opacity:1" /></linearGradient><linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#fff;stop-opacity:0" /><stop offset="100%" style="stop-color:#fff;stop-opacity:1" /></linearGradient></defs><path d="m 214,270 l 159,-254 31,-16 -74,189 0,162 74,189 -31,16 z" id="wing" /><path d="m 577,270 22,-93 -27,6 -44,88 44,88 27,6 z" id="tail" /><path d="m 577,270 l -94,24 h -407 c -38,0 -75,-13 -75,-26 c 0,-13 38,-26 75,-26 h 407 z" id="fuselage" /><rect width="610" height="100" x="-5" y="110" fill="url(#grad1)" /><rect width="610" height="100" x="-5" y="330" fill="url(#grad2)" /><text id="row1stText" x="55" y="380"></text><text id="row2ndText" x="55" y="420"></text><text x="55" y="210"><tspan id="seatText"></tspan><tspan id="seatYes" style="fill: #0c0;" dy="10">&#x2713;</tspan><tspan id="seatNo" style="fill: #f00;" dy="10">&#x2717;</tspan></text>' + ((opt_ijData.level > 1) ? '<rect id="crew_right" class="crew" width="10" height="10" x="35" y="254" /><rect id="crew_left" class="crew" width="10" height="10" x="35" y="272" />' : '') + '</svg><p>';
  switch (opt_ijData.level) {
    case 1:
      output += '\u4E00\u67B6\u98DE\u673A\u6709\u4E00\u5B9A\u91CF\u884C\u6570\u7684\u4E58\u5BA2\u5EA7\u4F4D\uFF0C\u6BCF\u884C\u5171\u56DB\u5EA7\u3002';
      break;
    case 2:
      output += '\u4E00\u67B6\u98DE\u673A\u9664\u4E86\u6709\u4E24\u4E2A\u5EA7\u4F4D\u4F9B\u6B63\u526F\u9A7E\u9A76\u5458\uFF0C\u8FD8\u6709\u4E00\u5B9A\u91CF\u884C\u6570\u7684\u4E58\u5BA2\u5EA7\u4F4D\u3002\u6BCF\u884C\u5171\u56DB\u5EA7\u3002';
      break;
    case 3:
      output += '\u4E00\u67B6\u98DE\u673A\u9664\u4E86\u6709\u4E24\u4E2A\u5EA7\u4F4D\u4F9B\u6B63\u526F\u9A7E\u9A76\u5458\uFF0C\u8FD8\u6709\u4E00\u5B9A\u91CF\u884C\u6570\u7684\u5934\u7B49\u53CA\u7ECF\u6D4E\u4E58\u5BA2\u5EA7\u4F4D\u3002\u5934\u7B49\u6BCF\u884C\u5171\u56DB\u5EA7\uFF0C\u7ECF\u6D4E\u6BCF\u884C\u5171\u4E94\u5EA7\u3002';
      break;
  }
  output += '</p><p>\u4E8E\u4E0B\u65B9\u5199\u51FA\u4E00\u6761\u516C\u5F0F\u4EE5\u8BA1\u7B97\u98DE\u673A\u4E0A\u7684\u5EA7\u4F4D\u603B\u6570\u3002</p><script src="../../blockly_compressed.js"><\/script><script src="../../blocks_compressed.js"><\/script><script src="../../javascript_compressed.js"><\/script><script src="../../msg/js/' + soy.$$escapeHtml(opt_ijData.lang) + '.js"><\/script><script src="blocks.js"><\/script>' + planepage.toolbox(null, null, opt_ijData) + '<div id="blocky"></div>';
  return output;
};
if (goog.DEBUG) {
  planepage.start.soyTemplateName = 'planepage.start';
}


planepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level <= 2) ? '<block type="plane_get_rows"></block>' : '<block type="plane_get_rows1st"></block><block type="plane_get_rows2nd"></block>') + '</xml>';
};
if (goog.DEBUG) {
  planepage.toolbox.soyTemplateName = 'planepage.toolbox';
}