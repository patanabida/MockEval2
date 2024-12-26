import { baseUrl } from "./baseurl";

let form=document.getElementById("form");
form.addEventListener("submit", ()=>{
    let email=form.email.value;
    let passwprd=form.passwprd.value;

    fetch(`${baseUrl}/users`)
    .then(res=>res.json())
    .then(data=>{
        let user
    })

});