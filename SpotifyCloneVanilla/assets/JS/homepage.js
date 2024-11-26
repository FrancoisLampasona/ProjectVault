const salutoUtente = document.getElementById('salutoUtente')
const user = JSON.parse(localStorage.getItem('User'))

if (user) {
  salutoUtente.innerHTML = `Ciao, ${user.nome} ${user.cognome} !`
} else {
  salutoUtente.innerHTML = 'Utente non trovato'
}


const allHearts = document.querySelectorAll('.bi-suit-heart')
console.log(allHearts)
allHearts.forEach((heart) => {
  heart.addEventListener('click', () => {
    console.log('cliccato')
    heart.classList.toggle('text-danger')
  })
})

const allImages = document.querySelectorAll('.images-playlist')
allImages.forEach((image) => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.1)'
    image.style.transition = 'transform 0.3s ease'
  })
  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)'
  })
})
