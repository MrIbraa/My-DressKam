document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Smooth scroll pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);
document.addEventListener("DOMContentLoaded", function () {
  // Obtenez toutes les images cliquables
  const images = document.querySelectorAll(".dress-image img");
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");

  // Ajoutez un écouteur d'événement pour chaque image
  images.forEach((image) => {
      image.addEventListener("click", function () {
          modal.style.display = "flex"; // Affiche le modal
          modalImage.src = this.src;   // Définit l'image sélectionnée
      });
  });

  // Fermez le modal lorsqu'on clique sur le bouton de fermeture
  closeModal.addEventListener("click", function () {
      modal.style.display = "none";
  });

  // Fermez le modal lorsqu'on clique en dehors de l'image
  modal.addEventListener("click", function (e) {
      if (e.target === modal) {
          modal.style.display = "none";
      }
  });
});
