/** script pour la partie loisirs*/

const showBtn = document.getElementById('showBtn');
const hideBtn = document.getElementById('hideBtn');
const extra = document.getElementById('extra');
const resumeBtn = document.getElementById('resumeBtn');
const TokyoRevenger = document.getElementById('TokyoRevenger');
const cacher = document.getElementById('cacher');
const bouton = document.getElementById('gallerie');
const photos = document.getElementById('photos');


hideBtn.style.display ="none";

showBtn.addEventListener('click',() => {
	extra.style.display = 'block';
	showBtn.style.display ="none";
	hideBtn.style.display ="inline-block";
})

hideBtn.addEventListener('click',() => {
	extra.style.display = 'none';
	hideBtn.style.display ="none";
	showBtn.style.display ="inline-block";
})

resumeBtn.addEventListener('click',() => {
	TokyoRevenger.style.display = 'block';
	resumeBtn.style.display ="none";
	cacher.style.display ="inline-block";
})


cacher.addEventListener('click',() => {
	TokyoRevenger.style.display = 'none';
	cacher.style.display ="none";
	resumeBtn.style.display ="inline-block";
})


bouton.addEventListener('click', () => {
  photos.classList.toggle('show');

  if (photos.classList.contains('show')) {
    bouton.textContent = "Masquer";
  } else {
    bouton.textContent = "Voir la gallerie photo";
  }
});
