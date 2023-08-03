// Replace Text in Header

const checkReplace = document.querySelector('.replace-me');

if(checkReplace) {
    const replace = new ReplaceMe(checkReplace, {
        animation: 'animate fadeIn',
        speed: 2000,
        seperator: ',',
        loopCount: 'infinte',
        autoRun: true
    })
}

function userScroll() {
    const navbar = document.querySelector('.navbar')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-sticky')
            navbar.classList.add('bg-dark')
            navbar.classList.add('border-bottom')
            navbar.classList.add('border-secondary')
        } else {
            navbar.classList.remove('navbar-sticky')
            navbar.classList.remove('bg-dark')
            navbar.classList.remove('border-bottom')
            navbar.classList.remove('border-secondary')
        }
    })
}

document.addEventListener('DOMContentLoaded', userScroll)