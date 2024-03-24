const sliderElement = document.querySelector('.slider')
const sliderContent = document.querySelector('.slider .slider__content')
const sliderItems = document.querySelectorAll('.slider .item')
const leftArrow = document.querySelector('.arrow-left')
const rightArrow = document.querySelector('.arrow-right')

let index = 0
let position = 0
let itemsInView = 3
let gap = 20
let itemsCount = sliderItems.length
let itemWidth = sliderItems[0].clientWidth
let sliderWidth = itemWidth * itemsInView

sliderElement.style.width = `${sliderWidth + gap * itemsInView}px`

leftArrow.addEventListener('click', () => {
  if (index > 0) {
    index--
    position += itemWidth + gap
    sliderContent.style.transform = `translateX(${position}px)`
  }
})

rightArrow.addEventListener('click', () => {
  if (index < itemsCount - itemsInView) {
    index++
    position -= itemWidth + gap
    sliderContent.style.transform = `translateX(${position}px)`
  }
})
