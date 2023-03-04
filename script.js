const userPill = document.getElementById('user-pill');
const userMenu = document.getElementById('user-menu');

userPill.addEventListener('click', () => userMenu.classList.toggle('hidden'));
userPill.addEventListener('click', () => userPill.classList.toggle('sheer'));