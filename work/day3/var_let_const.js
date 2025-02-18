
// var -> function scope
// let -> block 
// const temp = ()=>{
//     if(true){
//         var username="raj";
//     }
//     console.log(username);
// }
// temp()


const func=()=>{

    const funcInside =()=>{
        console.log("function is inside");
    }
    funcInside();
    console.log("hello this is outer func")
}
func()

// temporal dead zone---------------------- 

