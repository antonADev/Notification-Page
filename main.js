const button = document.querySelector('button');
const unread = document.querySelectorAll('.unread');
const badge = document.querySelectorAll('.badge');
const count = document.querySelector('.header__inner__count');

button.addEventListener('click', () => {
  count.textContent = '0';
  unread.forEach((el) => {
    if (el.classList.contains('unread')) el.classList.remove('unread');
    return;
  });
});
