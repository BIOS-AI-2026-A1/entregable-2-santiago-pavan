(function () {
  var toggle = document.querySelector('.pricing__switch');
  var amount = document.querySelector('.pricing-card__amount[data-monthly]');
  var annualNote = document.querySelector('.pricing-card__annual-note');

  if (!toggle || !amount) return;

  toggle.addEventListener('click', function () {
    var isAnnual = toggle.getAttribute('aria-checked') !== 'true';
    toggle.setAttribute('aria-checked', String(isAnnual));

    amount.textContent = isAnnual
      ? amount.getAttribute('data-annual')
      : amount.getAttribute('data-monthly');

    if (annualNote) annualNote.hidden = !isAnnual;
  });
})();
