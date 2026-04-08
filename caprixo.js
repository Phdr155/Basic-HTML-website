
let mode = document.getElementsByTagName('input')[0]
mode.addEventListener('click', darkMode)

function darkMode() {
    document.documentElement.style.setProperty('--cor-fundo', '#0e1014')
    document.documentElement.style.setProperty('--cor-fonte', 'white')

    mode.removeEventListener('click', darkMode)
    mode.addEventListener('click', whiteMode)
}
function whiteMode() {
    document.documentElement.style.setProperty('--cor-fundo', 'white')
    document.documentElement.style.setProperty('--cor-fonte', 'black')

    mode.removeEventListener('click', whiteMode)
    mode.addEventListener('click', darkMode)
}