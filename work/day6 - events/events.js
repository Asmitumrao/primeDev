const array=[
{
    name: "Anisha",
    email: "anishaChampu@gmail.com",
    city: "Bangalore",
},
{
    name: "Ishanvi",
    email: "ishanvigogo@gmail",
    city: "Mumbai",
},
{
    name: "arpit",
    email: "arpitbarks@gmail",
    city: "Jaluun",
},
{
    name: "Kshitiz",
    email: "kshitizpeeps@gmail",
    city: "Kolkata",
},
{
    name: "Ashmit",
    email: "ashmit@gmail",
    city: "Kolkata",
},
];

const body=document.querySelector("body");
const btn = document.getElementById("btn");
const getRandomColor = () => {
    const randomRed=Math.floor(Math.random()*255);
    const randomGreen=Math.floor(Math.random()*255);
    const randomBlue=Math.floor(Math.random()*255);
    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
};
const root = document.getElementById("parent");

const handleByChnage = (event) => {
    console.log("btn clicked");
    body.style.backgroundColor = getRandomColor();
    body .style.transition = "all 0.5s";
    
    
};
btn.addEventListener("click", handleByChnage);



array.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `<h1>${element.name}</h1>
    <h4>${element.email}</h4>
    <p class='city' ">${element.city}</p>`;
    root.appendChild(div);
    div.className="child";

    div.addEventListener("click", () => {
        div.style.backgroundColor = getRandomColor();
    },);
    div.style.backgroundColor = getRandomColor();


    const city = div.querySelector(".city");
    city.addEventListener("click", (ele) => {
        city.style.backgroundColor = getRandomColor();
        ele.stopPropagation();
    });
    
});