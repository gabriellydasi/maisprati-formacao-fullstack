const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputUsername();
});


function checkInputUsername(){
    const usernameValue = username.value; // pega o valor que o usuário digita no campo 'Nome'

    if(usernameValue === ""){
        errorInput(username, "Preencha um username");
    }

}


function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "form-content-error";


}