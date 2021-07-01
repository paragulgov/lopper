//slider
let offset = 0
const sliderLine = document.querySelector('.testimonials__slider-line')

document.querySelector('.testimonials__right').addEventListener('click', () => {
  offset = offset + 750
  if (offset > 1500) {
    offset = 0
  }
  sliderLine.style.left = -offset + 'px'
})

document.querySelector('.testimonials__left').addEventListener('click', () => {
  offset = offset - 750
  if (offset < 0) {
    offset = 1500
  }
  sliderLine.style.left = -offset + 'px'
})

//drag and drop
const types = ['image/jpeg', 'image/png', 'image/jpg']

const slider = document.querySelector('.testimonials__slider')
const dnd = document.querySelector('.testimonials__dnd')
const dndText = document.querySelector('.testimonials__dnd-text')

dnd.addEventListener('dragenter', () => {
  event.preventDefault()
  slider.classList.add('testimonials__slider-active')
  console.log('dragenter')
})

dnd.addEventListener('dragleave', () => {
  event.preventDefault()
  slider.classList.remove('testimonials__slider-active')
})

dnd.addEventListener('dragover', () => {
  event.preventDefault()
})


dnd.addEventListener('drop', (event) => {
  event.preventDefault()

  dndText.style.display = 'none'
  slider.classList.remove('testimonials__slider-active')
  const files = event.dataTransfer.files

  for (let key in files) {
    if (!types.includes(files[key].type)) {
      continue
    }
    const imageURL = URL.createObjectURL(files[key])
    dnd.innerHTML += `<img width="40" src="${imageURL}">`
  }
})
