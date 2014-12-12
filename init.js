(function(window, document, undefined){
  'use strict';

  var $ = window.jQuery || window.$;

  function init () {
    var $js = $('.highlight-js').length ? $('.highlight-js') : $('.highlight-javascript');
    if ($js.length) {
      $('.pl-s3', $js).each(function () {
        addLink(this, 'pl-s1');
      });
    }

    if ($('.hljs').length) {
      $('.hljs-built_in', '.hljs').each(function () {
        addLink(this, 'hljs-string');
      });
    }
  }

  function addLink (el, cl) {
    var $this = $(el);
    if ($this.text() === 'require') {
      var $package = $this.next();
      var packageName = $package.text().replace(/\'/g, '');

      if (['.', '..', '/'].indexOf(packageName[0]) !== -1) {
        return;
      }

      $package.html('\'<a href="https://www.npmjs.com/package/' + packageName + '" target="_blank"><span class="' + cl + '">' + packageName + '</span></a>\'');
    }
  }

  init();
  if ($('#js-repo-pjax-container').length) {
    new window.MutationObserver(init).observe(document.querySelector('#js-repo-pjax-container'), {childList: true});
  }

})(this, this.document);
