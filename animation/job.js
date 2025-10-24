const trigger = document.querySelector('.tooltip-btn h1');
const tooltip = document.querySelector('#tooltip');

trigger.addEventListener('click', (e) => {
  e.stopPropagation();
  // bulle au-dessus à droite du texte
  const rect = trigger.getBoundingClientRect();
  const scrollY = window.scrollY;
  const scrollX = window.scrollX;

  tooltip.style.left = (rect.left + scrollX + rect.width * 0.6) + 'px'; 
  tooltip.style.top = (rect.top + scrollY - tooltip.offsetHeight - 15) + 'px'; 

  tooltip.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  if (!trigger.contains(e.target) && !tooltip.contains(e.target)) {
    tooltip.classList.remove('show');
  }
});

