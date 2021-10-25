let feedback=document.getElementById("feedback");
feedback.onclick= ()=>{

    let feedBackDiv = document.createElement("div");
    feedback.after(feedBackDiv);

    //text area to write feedback
    let text = document.createElement("textarea");
    text.setAttribute("placeholder", "Write your feedback here");
    text.setAttribute('id','text');

    //button to submit
    let submitButton = document.createElement("button");
    let buttonText = document.createTextNode("Submit");
    submitButton.append(buttonText);
    submitButton.classList.add('submitButton');

    //message to appear after pressing submit
    let message = document.createElement("div");
    message.style.display = "none";
    message.setAttribute('id','message')
    message.classList.add("message")
    //append the new tags in the page
    
    feedBackDiv.appendChild(text);
    feedBackDiv.appendChild(message);
    feedBackDiv.appendChild(submitButton);


    //pressed only once
    feedback.onclick= ()=>{};
};
//console.log(submit);
//----------------------------------------------------------------------------
//let parent=document.getElementsByClassName("meet");

document.addEventListener("click",(event)=>
{
    if(event.target.className==='submitButton') 
     { 
        let message=document.getElementById("message");
        console.log("eentered1");
        message.style.display = "block";
        console.log("entered2");
        let text=document.getElementById("text");
        if(text.value.length==0) {
            message.style.color="#f00";
            message.textContent ="PLEASE WRITE YOUR FEEDBACK";
        }
        else {
            message.style.color="#0f0";
            message.style.fontSize="20px";
            message.textContent ="Thank you for you feedback";
        }
    }
});
//----------------------------------------------------------------------------   

