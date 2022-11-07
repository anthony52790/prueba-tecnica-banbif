(() => {
  'use strict'

  const form = document.querySelector('.needs-validation')

  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }

    form.classList.add('was-validated')
  }, false)

  const modalActive = () => {
    const modal = document.querySelector('.modal')
    modal.classList.add('show')
    modal.style.display = 'block'
    modal.ariaModal = true
  }

})()