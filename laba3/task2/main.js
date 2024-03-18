const listElement = document.querySelector('#list')
let string = 'abcdef'.replace(/\s+/g, '')

const splitString = str => {
  const result = []
  for (let i = 0; i < str.length; i += 2) {
    if (str[i + 1] === undefined) {
      result.push(str[i] + '_')
    } else result.push(str[i] + str[i + 1])
  }
  return result
}
const result = splitString(string)

for (let i = 0; i < result.length; i++) {
  listElement.innerHTML += `<li>${result[i]}</li>`
}
