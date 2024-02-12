const btn = document.querySelector('button')
const modalElement = document.querySelector('.modal-overlay')
const modalContent = modalElement.querySelector('.modal')

btn.addEventListener('click', () => {
	modalElement.classList.add('open')
})

modalContent.addEventListener('click', () => {
	modalElement.classList.remove('open')
})