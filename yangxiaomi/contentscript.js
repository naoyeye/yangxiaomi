/*
* @Author: hanjiyun
* @Date:   2017-06-05 10:16:59
* @Last Modified by:   hanjiyun
* @Last Modified time: 2020-04-30 13:01:43
*/

/* eslint-disable */

var reg = /^https:\/\/(.+)douban.com\/(.+)?$/;

if (reg.exec(window.location.href)) {
  $('.new-status.status-wrapper .status-real-wrapper').each(function(index, status) {
    var $s = $(status);
    var url = $s.attr('data-status-url');
    $s.append('<div class="open-in-new-tab"><a href="' + url + '" target="_blank">在新标签页打开</a></div>');
  });
}
