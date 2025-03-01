const getSuggestion = async (text)=>
{
    const pr=fetch(`https://youtube138.p.rapidapi.com/auto-complete/?q=${text}p&hl=en&gl=US`,
        {
        headers:
        {
            'x-rapidapi-host': 'youtube138.p.rapidapi.com',
            'x-rapidapi-key': '2ba9ea8569mshd4a4bd156e226dep14aaa3jsn20e6692d6825'
        }
    });
    return pr.then((response)=>{
        const pr1=response.json();
        return pr1.then((data)=>{
            return data.results;
        })
    })
    .catch(error=> console.error('Error','error'));

}



// getSuggestion("des").then((data)=>console.log(data));

const data1=[
    "despacito",
    "despicable me 4",
    "despacito justin bieber",
    "despues de la 1",
    "despidase bien carin leon",
    "despicable me 4 song",
    "desperate jamie mcdonald",
    "despicable me",
    "despacito song",
    "desperado",
    "desperado eagles",
    "desperate housewives",
    "despicable me 4 full movie",
    "despicable me 3"
  ];

const createSuggestionList = (data)=>
{
    console.log(data);
    const root=document.getElementById('suggestion');
    root.innerHTML = "";
    if (data.length === 0) {
        root.style.display = 'none';
        return;
    }
    const ul=document.createElement("ul");

    data.forEach(element => {
        const li=document.createElement("li");
        li.className="search-suggestion";
        li.innerHTML=`
            <i class="fa-solid fa-magnifying-glass" style="color: #7b7979;"></i>
            ${element}`;
        
        ul.appendChild(li);
    });
    root.appendChild(ul);
    root.style.display = 'block';
}

let setTimeOutId=null;
const showSuggestion=(e)=>
    {
        const value=e.target.value.trim();
        console.log(value);
        const root=document.getElementById('suggestion');
        if(value===''){ 
            root.style.display='none';
            return ;
        }
        if(setTimeOutId !== null)
            {
                clearTimeout(setTimeOutId);
            }   
        setTimeOutId = setTimeout(() =>{
            // getSuggestion(value).then(content =>createSuggestionList(content));
            createSuggestionList(data1);
        },500);
        
    }
