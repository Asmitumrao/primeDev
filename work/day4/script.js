// const sum=(a,b,c)=>{
//     const ans =a+b;
//     // return sum;
//     c(ans)
// }
// const printPretty=(txt)=>
// {
//     console.log("-----------------");
//     console.log(txt);
//     console.log('------------------');
// }

// printPretty(sum(20,30));
// sum(10,30,printPretty) // reintPretty is callback function


const getMetaData =()=>
{
    const name= prompt("enter the name")
    console.log("hello"+ name)
    const numberOfSubText = parseInt(prompt("enter number of subjects"));
    return numberOfSubText;
}

const getSubjects= (num)=>
{
    const subjectData={};
    for(let i=0; i<num; i++)
    {
        const sub=prompt(`please enter subjects ${i+1}`);
        const mark=parseInt(prompt(`please enter marksof subject ${sub}`));
        subjectData[sub]=mark;
    }
    // console.log(subjectData);
    return subjectData;

}

const getPercentage=(obj)=>
{
    const marks=Object.values(obj);
    let total = 0;
    marks.forEach(element => {
        total+=element;
    });
    return (total/marks.length); 


}

const getHighestScoringSubjects =(obj)=>
 {
    const sub=Object.keys(obj);
    let subject=sub[0];
    sub.forEach(element=>{
        if( obj[subject] < obj[element])
        {   
             subject=element;
        }

    })
    // console.log(subject);
    return subject;

}

const getGrades=(percentage)=>
{
    let grade='F';
    const grades=[ [60,'B'],[70,'B+'],[80,'A'],[90,'A+']];
    grades.forEach((ele)=>{
        if(percentage >= ele[0])
            grade=ele[1];
    })
    console.log(grade);
    return grade;

}




// getSubjects(2);
// const obj={
//     math:80,
//     science:30,
// }
// getPercentage(obj)
// getGrades(91);
// getHighestScoringSubjects(obj)


const numberOfsub=getMetaData();
const subjectData=getSubjects(numberOfsub);
const percentage=getPercentage(subjectData);
const highestScoringSubject=getHighestScoringSubjects(subjectData);
const grade=getGrades(percentage);
