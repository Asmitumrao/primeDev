// console.dir(window); -> window object represents BOM
// console.dir(document); ->documnet object represents :DOM

// document is given by window.document->document
// document.write("hello");

// finding /searching the element ;
    //  document.getElementById();
    //  document.getElementsByClassName();
    //  document.getElementsByName();

// const ele=document.getElementById("text-1");
// const ele2=document.getElementsByClassName("text");
// console.log(document.children[0].children[1].children.)

const outerdiv =document.querySelector("div");
outerdiv.style.backgroundColor="blue";
// for(let i=0; i<outerdiv.children.length; i++)
//     {
//         outerdiv.children[i].style.color="yellow";
//     }
console.log(outerdiv.childNodes);
const mapping ={
    Invitation : "You are invited for event",
    Reminder: "You are reminded for task",
    Notice: "you have a notice for a college",
    Message:"You have 7 message",
}

Array.from(outerdiv.children).forEach(element =>
    {
        const key= element.children[0].innerHTML;
        // console.log(key);
        element.children[1].innerHTML=mapping[key];
        
    }
)


// creating and adding a node
// append()
// appendChild()
// remove
// removeChild()
const newElement=document.createElement("div");
newElement.innerHTML="<h4> Anniversary </h4>";
newElement.innerHTML+="<p> happy aniversary </p>";
outerdiv.append(newElement);

Array.from(outerdiv.children).forEach(element => {
    element.style.backgroundColor='yellow';
    
});







// outerdiv.children[1].style.color="yellow";
// outerdiv.children[2].style.color="yellow";
// outerdiv.children[3].style.color="yellow";




     
