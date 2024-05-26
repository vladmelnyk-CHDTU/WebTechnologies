const block = document.querySelector('.block')

// let maxX = window.innerWidth - block.offsetWidth
// let maxY = window.innerHeight - block.offsetHeight
// let x = 0
// let y = 0
// let xDirection = 1
// let yDirection = 1
// let speed = 4

const startInterval = block => {
  if (block !== null) {
    let maxX = window.innerWidth - block.offsetWidth
    let x = 0
    let y = 0
    let xDirection = 1
    let yDirection = 1
    let speed = 4
    let xTemp = xDirection
    let yTemp = yDirection
    let maxY = window.innerHeight - block.offsetHeight

    block.addEventListener('mouseover', () => {
      xTemp = xDirection
      yTemp = yDirection
      xDirection = 0
      yDirection = 0
    })
    window.addEventListener('resize', () => {
      maxX = window.innerWidth - block.offsetWidth
      maxY = window.innerHeight - block.offsetHeight
    })

    block.addEventListener('mouseleave', () => {
      xDirection = xTemp
      yDirection = yTemp
    })

    return setInterval(() => {
      x += speed * xDirection
      y += speed * yDirection

      if (x < 0 || x >= maxX) {
        xDirection *= -1
      }
      if (y < 0 || y > maxY) {
        yDirection *= -1
      }

      block.style.left = x + 'px'
      block.style.top = y + 'px'
    }, 16)
  }
}

let timer = startInterval(block)

// block.addEventListener('mouseover', () => {
//   clearInterval(timer)
// })

// block.addEventListener('mouseleave', () => {
//   timer = startInterval()
// })
