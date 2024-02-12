const span = document.querySelector('h1 span')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
	let name = prompt('Name ')
	span.innerHTML = `${name}`
})

