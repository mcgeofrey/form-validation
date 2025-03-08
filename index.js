const nameError = document.getElementById(`name-error`);
const icon = document.getElementById(`name-erroricon`);
const phoneError = document.getElementById(`phone-error`);
const emailError = document.getElementById(`email-error`);
const messageError = document.getElementById(`message-error`);
const submitError = document.getElementById(`submit-error`);



const submit = document.getElementById(`submit`);

function validateName(){
    const contactName = document.getElementById(`contact-name`).value;

    if(contactName.length === 0){
        nameError.innerHTML = `Name is required`;
        nameError.style.color = `red`;
        return false;
    }
     else if(!contactName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = `Write full name`;
        nameError.style.color = `red`;
        return false;
    }
        nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    nameError.style.color = `green`;
        return true;
    
        
    
}

function validatePhone(){
    const phone = document.getElementById(`contact-phone`).value;

    if(phone.length == 0 || phone.length !== 10){
        phoneError.innerHTML = `Phone no must be 10 digit`;
        phoneError.style.color = `red`;
        return false;
    }else if(!phone.match(/^[0-9]{10}$/) ){
        phoneError.innerHTML = `phone no is required and phone must be a number`;
        phoneError.style.color = `red`;
        return false;

    }
        phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        phoneError.style.color = `green`;
            return true;
    
}

function validateEmail(){
    const email = document.getElementById(`contact-email`).value;

    if(email.length == 0){
        emailError.innerHTML = `email is required`;
        emailError.style.color = `red`;
        return false;
        
    }
    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailError.innerHTML = `email is Invalid`;
        emailError.style.color = `red`;
        return false;
    }
    
        emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        emailError.style.color = `green`;
        return true;
}


function validateMessage(){
    const message = document.getElementById(`contact-message`).value;
    const required = 30;
    const left = required - message.length;

    if(left > 0){
        messageError.innerHTML = `${left} more characters required`;
        return false;
    }

    messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        messageError.style.color = `green`;
        return true;


}

function validateForm(){
    if(!validateName() || !validateEmail() || !validateMessage() || !validatePhone()){
        submitError.style.display = `block`;
        submitError.innerHTML = `Please fix error to submit`;
        setTimeout(()=>{ submitError.style.display = `none`;},3000);
        return false;
    }
}
