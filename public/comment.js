
// auth.onAuthStateChanged(user=>{
//     if (user) {
//         console.log("user logged in:",user);
//         db.collection("discussions").onSnapshot((snapshot)=>{
//             opendisc(snapshot.docs);
//              })
//              db.collection("discussionstwo").onSnapshot((snapshot)=>{
//                  opendisctwo(snapshot.docs);
//              })
//     setupui(user);
//     }else{
//         console.log("user logged out");
//         opendisc([]);
//         opendisctwo([]);
//         setupui([]);
//     }
// });
const commentblockone = document.querySelector(".comments-block"); 
const commentblocktwo = document.querySelector(".comments-blocktwo");
const opendisc  = (data)  =>
{
    if (data.length) {
     let html  = ``;
     data.forEach(doc => {
        const comment = doc.data();
        console.log(comment);
        const div = `
        <h3 class="comments-head">${comment.title}</h3>
       <p class="comment-content" style="font-size: 22px;">
       ${comment.content}</p>
        `;
        html += div;
     });
     commentblockone.innerHTML = html;
    }
    else{
        commentblockone.innerHTML =
         `<h5>LOGIN TO VIEW COMMENTS </h5>`;
    }
}
const opendisctwo = (data)=>{
    if (data.length) {
        let html = ``;
        data.forEach(doc=>{
            const commentrydisc = doc.data();
        const div = `
        <h3 class="comments-head style="background-color: rgb(57, 15, 100);" >${commentrydisc.title}</h3>
           <p class="comment-content">${commentrydisc.content}</p>
        `;
        html += div;
        });
        commentblocktwo.innerHTML = html;
    }else{
        commentblocktwo.innerHTML 
        = `<h5>LOGIN TO VIEW COMMENTS </h5>`;
    }
}
const formone = document.querySelector(".formone");
const formtwo = document.querySelector(".formtwo");
console.log(formone,formtwo);
formone.addEventListener("submit",(e)=>{ 
    e.preventDefault();
    //select the collectionto send data to
    db.collection("discussions").add({
        //send an object
        title:formone["title-comments"].value,
        content:formone["content-comments"].value  
    }).then(()=>{
        //reset form
        alert("Your comments sent succesfully");
formone.reset();
    }).catch((err)=>{
        console.log(err);
        alert("Error try again");
    })
console.log(formone["title-comments"].value);
});

formtwo.addEventListener("submit",(e)=>{
    e.preventDefault();
    db.collection("discussionstwo").add({
        title:formtwo["title-comments"].value,
        content:formtwo["content-comments"].value
    }).then(()=>{
        alert("Your comments sent succesfully");
        formtwo.reset();
    }).catch((err)=>{
        alert("Error try again");
        console.log(err);
    })
})
