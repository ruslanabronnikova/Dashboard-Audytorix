
const menuBar = document.querySelector('.bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
});


// const switchMode = document.getElementById('switch-mode');

// switchMode.addEventListener('change', function () {
// 	if(this.checked) {
// 		document.body.classList.add('dark');
// 	} else {
// 		document.body.classList.remove('dark');
// 	}
// })


// POPUP TARIF 

const popup = document.querySelector('.popup');

const popupFormTarif = document.querySelector('.popup__container_create_task');
const openPopupButton = document.querySelector('.head__btn');
const buttonActive = popupFormTarif.querySelector('.popup__button_tarif_save')
const closePopupButton = document.querySelector('.popup__button-close')

function openPopup(popup) {
	popup.classList.add('popup_opene');
	console.log('openPopup')
}

function closePopup(popup) {
	popup.classList.remove('popup_opene');
}

openPopupButton.addEventListener('click', () => {
	openPopup(popup)
});

closePopupButton.addEventListener('click', () => {
	closePopup(popup)
})

function handleFormSubmit(evt) {
	evt.preventDefault();
	closePopup(popup);
}

popup.addEventListener('submit', handleFormSubmit);
