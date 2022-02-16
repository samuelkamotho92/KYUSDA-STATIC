let userform = document.querySelector(".userform");
userform.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("my page");
    db.collection("user").add({
        name: userform.name.value,
        email: userform.email.value,
        phonenumber: userform.phonenumber.value,
        issue:userform.issue.value
    }).then(()=>{
        alert("user info recorded Thankyou You");
    })
   userform.name.value = "";
   userform.email.value= "";
   userform.phonenumber.value= "";
   userform.issue.value = "";
})
console.log(userform.name.value);