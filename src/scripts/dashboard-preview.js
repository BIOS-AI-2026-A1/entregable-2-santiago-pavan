(function () {
  var tabs = document.querySelectorAll('.dashboard-preview__tab');
  var panels = document.querySelectorAll('.dashboard-preview__panel');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(function (panel) {
        panel.hidden = true;
      });

      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');

      var panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (panel) panel.hidden = false;
    });
  });

  document.querySelectorAll('[data-action="toggle-complete"]').forEach(function (button) {
    button.addEventListener('click', function () {
      var row = button.closest('.appointment-row');
      var status = row && row.querySelector('.appointment-row__status');
      if (!row || !status) return;

      var isDone = status.classList.toggle('appointment-row__status--done');
      status.classList.toggle('appointment-row__status--pending', !isDone);
      status.textContent = isDone ? 'Completado' : 'Pendiente';
      button.textContent = isDone ? 'Marcar pendiente' : 'Marcar completado';
    });
  });

  var dayTabs = document.querySelectorAll('.dashboard-preview__day-tab');
  var dayPanels = document.querySelectorAll('[data-day-panel]');

  dayTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      dayTabs.forEach(function (t) {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      dayPanels.forEach(function (panel) {
        panel.hidden = true;
      });

      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');

      var panel = document.querySelector('[data-day-panel="' + tab.getAttribute('data-day') + '"]');
      if (panel) panel.hidden = false;
    });
  });

  document.querySelectorAll('.patient-row__trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var expand = document.getElementById(trigger.getAttribute('aria-controls'));
      var isOpen = trigger.getAttribute('aria-expanded') === 'true';
      if (!expand) return;

      trigger.setAttribute('aria-expanded', String(!isOpen));
      if (isOpen) {
        expand.removeAttribute('data-open');
      } else {
        expand.setAttribute('data-open', 'true');
      }
    });
  });

  document.querySelectorAll('[data-action="toggle-paid"]').forEach(function (button) {
    button.addEventListener('click', function () {
      var row = button.closest('.invoice-row');
      var status = row && row.querySelector('.invoice-row__status');
      if (!row || !status) return;

      var isPaid = status.classList.toggle('invoice-row__status--paid');
      status.classList.toggle('invoice-row__status--pending', !isPaid);
      status.textContent = isPaid ? 'Pagada' : 'Pendiente';
      button.textContent = isPaid ? 'Marcar pendiente' : 'Marcar pagada';
    });
  });
})();
