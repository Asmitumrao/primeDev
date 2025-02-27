const getData= (text)=>
{
    const pr=fetch(`https://dummyjson.com/recipes/search?q=${text}`);
    pr.then(
        (res)=>{
            const pr2=res.json();
            pr2.then((data)=>
            {
                showCards(data.recipes);
            })
        }
    )
}

const root=document.querySelector("#card-container");
const showCards = (dataArr)=>
{
    root.innerHTML="";
    dataArr.forEach(element => {
        const div=document.createElement("div");
        div.className="card";
        div.innerHTML=`
        <h4>${element.name}</h4>
        <img src="${element.image}">
        <p>${element.description}</p>
        `;

        root.appendChild(div);

    });
};
let setTimeOutId=null;
const handleSearch=(e)=>
{
    const text=e.target.value;
    if(setTimeOutId !== null)
        {
            clearTimeout(setTimeOutId);
        }   
    setTimeOutId = setTimeout(() => getData(text),500);
}