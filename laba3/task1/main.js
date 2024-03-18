const firstNameField = document.querySelector('#firstName')
const lastNameField = document.querySelector('#lastName')
const addressField = document.querySelector('#address')
const cityField = document.querySelector('#city')
const countryField = document.querySelector('#country')
const postalCodeField = document.querySelector('#postalCode')
const emailField = document.querySelector('#email')

const firstNameError = document.querySelector('#firstNameError')
const lastNameError = document.querySelector('#lastNameError')
const postalCodeError = document.querySelector('#postalCodeError')
const emailError = document.querySelector('#emailError')
const addressError = document.querySelector('#addressError')
const cityError = document.querySelector('#cityError')
const countryError = document.querySelector('#countryError')

const form = document.querySelector('form')

const namePattern = /^[А-ЯҐЄІЇа-яґєії']+$/
const postalPattern = /^\d{5}$/

const validateForm = () => {
  const firstName = firstNameField.value
  const lastName = lastNameField.value
  const postalCode = postalCodeField.value
  const email = emailField.value
  const address = addressField.value
  const city = cityField.value
  const country = countryField.value

  let isValid = true

  firstNameError.textContent = ''
  lastNameError.textContent = ''
  postalCodeError.textContent = ''
  emailError.textContent = ''
  addressError.textContent = ''
  cityError.textContent = ''
  countryError.textContent = ''

  if (firstName === '') {
    firstNameError.textContent = 'Поле не повинно бути порожнім'
    isValid = false
  } else if (!namePattern.test(firstName)) {
    firstNameError.textContent = 'Поле повинне містити лише літери'
    isValid = false
  }

  if (lastName === '') {
    lastNameError.textContent = 'Поле не повинно бути порожнім'
    isValid = false
  } else if (!namePattern.test(lastName)) {
    lastNameError.textContent = 'Поле повинне містити лише літери'
    isValid = false
  }

  if (postalCode === '') {
    postalCodeError.innerText = 'Поле не повинно бути порожнім'
    isValid = false
  } else if (!postalPattern.test(postalCode)) {
    postalCodeError.innerText = 'Поштовий індекс має складатися з 5 цифр'
    isValid = false
  }

  if (email === '') {
    emailError.innerText = 'Поле не повинно бути порожнім'
    isValid = false
  } else if (!email.includes('@')) {
    emailError.innerText = 'Пошта повинна містити @'
    isValid = false
  }

  if (address === '') {
    addressError.innerText = 'Поле не повинно бути порожнім'
    isValid = false
  }
  if (city === '') {
    cityError.innerText = 'Поле не повинно бути порожнім'
    isValid = false
  }
  if (country === '') {
    countryError.innerText = 'Поле не повинно бути порожнім'
    isValid = false
  }

  return isValid
}

form.addEventListener('submit', e => {
  e.preventDefault()
  let isValid = validateForm()
  if (isValid) {
    form.submit()
  }
})
