/** script pour la partie loisirs*/

const showBtn = document.getElementById('showBtn');
const hideBtn = document.getElementById('hideBtn');
const extra = document.getElementById('extra');

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
