(function () {
  var triggers = document.querySelectorAll('.faq-item__trigger');

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var answer = document.getElementById(trigger.getAttribute('aria-controls'));
      var isOpen = trigger.getAttribute('aria-expanded') === 'true';

      triggers.forEach(function (t) {
        t.setAttribute('aria-expanded', 'false');
        var a = document.getElementById(t.getAttribute('aria-controls'));
        if (a) a.removeAttribute('data-open');
      });

      if (!isOpen && answer) {
        trigger.setAttribute('aria-expanded', 'true');
        answer.setAttribute('data-open', 'true');
      }
    });
  });
})();
