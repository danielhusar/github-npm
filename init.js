(function(window, document, undefined){
  'use strict';

  var $ = window.jQuery || window.$;

  function init () {
    if ($('.highlight-js').length) {
      $('.pl-s3', '.highlight-js').each(function () {
        addLink.call(this, 'pl-s1');
      });
    }

    if ($('.hljs').length) {
      $('.hljs-built_in', '.hljs').each(function () {
        addLink.call(this, 'hljs-string');
      });
    }
  }

  function addLink (cl) {
    var $this = $(this);
    if ($this.text() === 'require') {
      var $package = $this.next();
      var packageName = $package.text().replace(/\'/g, '');
      $package.html('\'<a href="https://www.npmjs.com/package/' + packageName + '" target="_blank"><span class="' + cl + '">' + packageName + '</span></a>\'');
    }
  }

  init();
  if ($('#js-repo-pjax-container').length) {
    new window.MutationObserver(init).observe(document.querySelector('#js-repo-pjax-container'), {childList: true});
  }

})(this, this.document);
