const hamburgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const allNavItem = document.querySelectorAll('.nav__link')
const footerYear = document.querySelector('.footer__year')
const footerHide = document.querySelector('.footer')
const header = document.querySelector('.header-section')
const section = document.querySelectorAll('.white-section')
const allSections = document.querySelectorAll('section')
const bodyElement = document.body

const hanndleBurgerBtn = () => {
	hamburgerBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
	if (navMobile.classList.contains('nav-mobile--active')) {
		bodyElement.style.overflow = 'hidden'
	} else {
		bodyElement.style.overflow = 'auto'
	}

	footerHide.classList.toggle('footer--is-active')

	allNavItem.forEach(item => item.addEventListener('click', () => navMobile.classList.remove('nav-mobile--active')))

	allNavItem.forEach(item => item.addEventListener('click', () => hamburgerBtn.classList.remove('is-active')))

	allNavItem.forEach(item => item.addEventListener('click', () => footerHide.classList.remove('footer--is-active')))

	allNavItem.forEach(item => item.addEventListener('click', () => (bodyElement.style.overflow = 'auto')))
}


const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
hamburgerBtn.addEventListener('click', hanndleBurgerBtn)
