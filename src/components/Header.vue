<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container text-white py-2 border-bottom">
        <a class="navbar-brand fs-2" href="#">Ashkan <span class="">Ganj</span></a>
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
              <a class="nav-link" href="files/Ashkan_Ganj_CV.pdf" target="_blank">CV</a>
            </li>
            <li class="nav-item dropdown align-content-center">
              <button class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center"
                id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static"
                aria-label="Toggle theme (light)">
                <i class="bi bi-sun-fill my-1 theme-icon-active"></i>
                <span class="d-lg-none ms-2" id="bd-theme-text">Theme</span>
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
                <!-- <li>
                  <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="auto"
                    aria-pressed="false">
                    <i class="bi bi-circle-half me-2 opacity-50"></i>
                    Auto
                    <i class="bi bi-check2 ms-auto d-none"></i>
                  </button>
                </li> -->
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

// Function to set the theme on the document
const setTheme = (theme) => {
  document.documentElement.setAttribute('data-bs-theme', theme);
};

// Function to get the stored theme from localStorage
const getStoredTheme = () => localStorage.getItem('theme');

// Function to set the theme in localStorage
const setStoredTheme = (theme) => localStorage.setItem('theme', theme);

// Function to get the preferred theme based on the stored theme or default to 'dark'
const getPreferredTheme = () => getStoredTheme() || 'dark';

// Function to update the UI to reflect the active theme
const showActiveTheme = (theme, focus = false) => {
  const themeSwitcher = document.querySelector('#bd-theme');
  const themeSwitcherText = document.querySelector('#bd-theme-text');
  const activeThemeIcon = document.querySelector('.theme-icon-active');
  const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);

  if (!themeSwitcher || !btnToActive) return;

  document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
    element.classList.toggle('active', element === btnToActive);
    element.setAttribute('aria-pressed', element === btnToActive ? 'true' : 'false');
  });

  activeThemeIcon.className = `bi ${btnToActive.querySelector('i').className.split(' ')[1]} my-1 theme-icon-active`;
  themeSwitcher.setAttribute('aria-label', `${themeSwitcherText.textContent} (${theme})`);

  if (focus) themeSwitcher.focus();
};

// Mount lifecycle hook
onMounted(() => {
  const preferredTheme = getPreferredTheme();
  setTheme(preferredTheme);
  showActiveTheme(preferredTheme);

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
  height: 70px;
  font-size: large;
  font-family: 'Work Sans';
}
.navbar-nav{
  align-items: center;
}
@media (max-width: 990px) {
  .navbar {
    height: auto;
  }
  .navbar-nav {
    align-items: flex-start;
  }
}



[data-bs-theme="dark"] {
  background-color: #121212;
  color: #ffffff;
}
</style>
