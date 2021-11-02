function darkMode() {
  let clicked = false;
  let el = document.getElementById('styleToggler');
  const head = document.querySelector('head');
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.media = 'all';
  el.addEventListener('click', () => {
    if (!clicked) {
      link.href = './css/style2.css';
      head.appendChild(link);
      clicked = true;
    } else {
      link.href = './css/style1.css';
      clicked = false;
      head.appendChild(link);
    }
  });
}

darkMode();
