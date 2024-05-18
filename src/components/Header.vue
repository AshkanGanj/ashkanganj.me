<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container text-white py-2 border-bottom">
        <a class="navbar-brand fs-3" href="#">Ashkan <span>Ganj</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/AshkanGanj" target="_blank">Projects(Github)</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="Ashkan_Ganj_CV.pdf">CV</a>
            </li>
            <li class="nav-item dropdown align-content-center">
              <button class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center"
                id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static"
                aria-label="Toggle theme (light)">
                <i class="bi bi-sun-fill my-1 theme-icon-active"></i>
                <span class="d-lg-none ms-2" id="bd-theme-text">Toggle theme</span>
              </button>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text" data-bs-popper="static">
                <li>
                  <button type="button" class="dropdown-item d-flex align-items-center active"
                    data-bs-theme-value="light" aria-pressed="true">
                    <i class="bi bi-sun-fill me-2 opacity-50"></i>
                    Light
                    <i class="bi bi-check2 ms-auto d-none"></i>
                  </button>
                </li>
                <li>
                  <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark"
                    aria-pressed="false">
                    <i class="bi bi-moon-stars-fill me-2 opacity-50"></i>
                    Dark
                    <i class="bi bi-check2 ms-auto d-none"></i>
                  </button>
                </li>
                <li>
                  <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="auto"
                    aria-pressed="false">
                    <i class="bi bi-circle-half me-2 opacity-50"></i>
                    Auto
                    <i class="bi bi-check2 ms-auto d-none"></i>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { onMounted } from 'vue';

const setTheme = (theme) => {
  if (theme === 'auto') {
    document.documentElement.setAttribute(
      'data-bs-theme',
      window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    );
  } else {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }
};

const getStoredTheme = () => localStorage.getItem('theme');
const setStoredTheme = (theme) => localStorage.setItem('theme', theme);

const getPreferredTheme = () => {
  const storedTheme = getStoredTheme();
  if (storedTheme) {
    return storedTheme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const showActiveTheme = (theme, focus = false) => {
  const themeSwitcher = document.querySelector('#bd-theme');

  if (!themeSwitcher) {
    return;
  }

  const themeSwitcherText = document.querySelector('#bd-theme-text');
  const activeThemeIcon = document.querySelector('.theme-icon-active');
  const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
  const iconClass = btnToActive.querySelector('i').className;

  document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
    element.classList.remove('active');
    element.setAttribute('aria-pressed', 'false');
  });

  btnToActive.classList.add('active');
  btnToActive.setAttribute('aria-pressed', 'true');
  activeThemeIcon.className = `bi ${iconClass.split(' ')[1]} my-1 theme-icon-active`;
  const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`;
  themeSwitcher.setAttribute('aria-label', themeSwitcherLabel);

  if (focus) {
    themeSwitcher.focus();
  }
};

onMounted(() => {
  setTheme(getPreferredTheme());

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme();
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme());
    }
  });

  showActiveTheme(getPreferredTheme());

  document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const theme = toggle.getAttribute('data-bs-theme-value');
      setStoredTheme(theme);
      setTheme(theme);
      showActiveTheme(theme, true);
    });
  });
});
</script>

<style scoped>
.navbar {
  height: 75px;
  font-size: large;
  font-family: 'Work Sans';
}
@media (max-width: 990px) {
  .navbar {
    height: auto;
  }
}

.navbar-brand span {
  color: rgb(29, 149, 230);
}

[data-bs-theme="dark"] {
  background-color: #121212;
  color: #ffffff;
}
</style>
