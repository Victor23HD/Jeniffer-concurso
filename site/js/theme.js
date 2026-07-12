/**
 * Tema escuro (padrão) / claro — preferência salva no localStorage.
 */
(function () {
  var KEY = 'jeniffer-theme';
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');

  function current() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(KEY, theme); } catch (e) {}
    if (btn) {
      btn.textContent = theme === 'dark' ? '☾' : '☀';
      btn.title = theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro';
    }
  }

  apply(current());

  if (btn) {
    btn.addEventListener('click', function () {
      apply(current() === 'dark' ? 'light' : 'dark');
    });
  }
})();
