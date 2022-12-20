const hamburgerBtn = document.querySelector('.hamburger-btn')
const headerListDiv = document.querySelector('.header-list')
const crossBtn = document.querySelector('.cross-btn')

hamburgerBtn.addEventListener('click', () => {
    headerListDiv.style.display = 'block'
    crossBtn.style.display = 'flex'
    hamburgerBtn.style.display = 'none'
})

crossBtn.addEventListener('click', () => {
    headerListDiv.style.display = 'none'
    hamburgerBtn.style.display = 'flex'
    crossBtn.style.display = 'none'
})

