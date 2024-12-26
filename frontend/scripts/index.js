import { baseUrl } from "./baseurl";

let form=document.getElementById("form");
form.addEventListener("submit", ()=>{
    let email=form.email.value;
    let passwprd=form.passwprd.value;

    fetch(`${baseUrl}/users`)
    .then(res=>res.json())
    .then(data=>{
        let user= data.filter((el,i)=>el.email==email);
        if(user.lenght!=0){
            if(user[0].password==password){
                alert("Login Success...")
                localStorage.setItem("lodinData",JSON.stringify(user[0]));
                window.location.href="quiz.html";
            }else {
                alert("password is worng, Please login with right password")
        }
    }else {
        alert("Please login...")
        window.location.href="index.html";
    }
        })
        .catch(err=>{
            console.log(err)
            alert
        });


});