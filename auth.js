
 //check if the user does exist fromthe auth function linked with database
auth.onAuthStateChanged(user=>{
    if (user) {
        //get info from the firebase collection and get a snapshot
        db.collection("discussions").onSnapshot((snapshot)=>{
            //call a function which will render items dynamicaly
            //passing in the snapshot as arguments
            opendisc(snapshot.docs);
             })
    db.collection("discussionstwo").onSnapshot((snapshot)=>{
    opendisctwo(snapshot.docs);
             })
    // setupui(user);
    }else{
        opendisc([]);
        opendisctwo([]);
        // setupui([]);
    }
});

const errormessage1 = document.querySelector(".errorstat1");
const errormessage2 = document.querySelector(".errorstat2");
//signing user in
const authemail = document.querySelector("#signup_email");
const authpassword = document.querySelector("#signup_password");
const signupform = document.querySelector(".signupform");
const welcometext = document.querySelector(".welcometext");
console.log(welcometext)
signupform.addEventListener("submit",(e)=>{
    errormessage1.innerText = "";
    welcometext.innerText = " ";
    e.preventDefault();
const signup_email = authemail.value;
const sigup_passowrd = authpassword.value;
auth.createUserWithEmailAndPassword(signup_email,sigup_passowrd)
.then(()=>{
    const md = document.querySelector("#modal1");
    M.Modal.getInstance(md).close();
    signupform.reset();
    welcometext.innerText += "signed in Thank You";
    alert("signed in Thank You");
    location.assign("./blog-single.html");
}).catch(err=>{
    if (err.message == "A network error (such as timeout, interrupted connection or unreachable host) has occurred.") {
alert("network issue refresh")  
errormessage1.innerText = err.message;
    }else{
        errormessage1.innerText = err.message;
        // alert(err.message);
    }
    signupform.reset();
})
});

//log in user
const errorstatement = document.querySelector(".errorstatement");
const loginUserForm = document.querySelector(".loginUser");
loginUserForm.addEventListener("submit",(e)=>{
    errormessage2.innerText = "";
e.preventDefault();
const logoutemail = loginUserForm["login_email"].value;
const logoutpassword = loginUserForm["login_password"].value;
auth.signInWithEmailAndPassword(logoutemail,logoutpassword).then((cred)=>{
    loginUserForm.reset();
    alert(" logged in");
    location.assign("./blog-single.html");
}).catch(err=>{
    if (err.message == "A network error (such as timeout, interrupted connection or unreachable host) has occurred.") {
alert("network issue refresh")  
errormessage2.innerText = err.message;
    }else{
        alert(err.message);
        errormessage2.innerText = err.message;
    }
    loginUserForm.reset();
})
})
//log out
const userlogout = document.querySelectorAll("#logout");
userlogout.forEach(item=>{
    item.addEventListener("click",((e)=>{
        e.preventDefault();
            auth.signOut().then(()=>{
                alert("Logged Out");
            }).catch((err)=>{
            if (err.message == "A network error (such as timeout, interrupted connection or unreachable host) has occurred.") {
           alert("network issue refresh")  
                }else{
                
                        }
            })
        }))
})
//creating a user collection
let userform = document.querySelector(".userform");
userform.addEventListener("submit",(e)=>{
    e.preventDefault();
    db.collection("user").add({
        name: userform.name.value,
        email: userform.email.value,
        phonenumber: userform.phonenumber.value,
        issue:userform.issue.value
    }).then(()=>{
        alert("Thanks responds have been sent");
    }).catch((err)=>{
        alert(err.message);
    })
   userform.name.value = "";
   userform.email.value= "";
   userform.phonenumber.value= "";
   userform.issue.value = "";
})
//create comments
