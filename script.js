
const sendButton = document.querySelector('.btn-send');
const inputName = document.getElementById('name');
const inputPhone = document.getElementById('phone');
const inputEmail = document.getElementById('email');
const inputMessage = document.getElementById('message');
const selectService = document.querySelector('select'); 

sendButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (inputName.value === "" || 
        inputPhone.value === "" || 
        inputEmail.value === "" || 
        inputMessage.value === "" ||
        selectService.value === "") {
        
        alert("Моля попълнете празното място");
        return; 
    }

    
    alert("Съобщението е изпратено!");
    inputName.value = "";
    inputPhone.value = "";
    inputEmail.value = "";
    inputMessage.value = "";
    selectService.value = "";
   
    });