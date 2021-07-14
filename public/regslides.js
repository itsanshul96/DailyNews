const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});
/*if there is an error then redirect on to the sign up page*/
if (document.getElementsByClassName('alert-msg').length){
    document.getElementById('sign-up-btn').click();
}

