const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = username.value;
    const passwordValue = username.value;
    const passwordConfirmationValue = username.value;

    // Verifica nome de usuário
    if (usernameValue === "") {
        setErrorFor(username, "O nome de usuário é obrigatório.");
    } else setSuccessFor(username);

     // Verifica email
     if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório.");
     }  else if(!checkEmail(emailValue)) {
        setErrorFor(email, "O email é obrigatório.")
    } else setSuccessFor(email);

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querrySelector("small");
    // Adiciona mensagem de erro
    small.innerText = message;
    // Adiciona classe de erro
    formControl.className = "form-control error";
    
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    // Adicionar a classe de sucesso
    formControl.className = "form-control success";

}
