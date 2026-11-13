

const colorBox = document.querySelector('.colorBox')
const colorCode = document.querySelector('.colorCode')
const generateBtn = document.querySelector('.generateBtn')

generateBtn.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random() * 16777215)

    const hexColor = '#' + randomColor.toString(16).padStart(6, '0')

    colorBox.style.backgroundColor = hexColor

    colorCode.textContent = hexColor
})