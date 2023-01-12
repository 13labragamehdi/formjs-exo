const contactForm = document.getElementById("form")

contactForm.addEventListener ( "submit", (event) => {
    event.preventDefault()

    const nameInput = document.getElementById("name")
    const telInput = document.getElementById("phone")
    const emailInput = document.getElementById("email")
    const passwordInput = document.getElementById("password")

    const formData = {
        name: nameInput.value,
        tel: telInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    }
})