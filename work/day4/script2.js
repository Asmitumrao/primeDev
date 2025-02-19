const doubleArray=(arr)=>
{
    const  arr1=arr.map((ele)=> ele*2);
    console.log(arr1);
}

const useReduce=(arr)=>
{
    arr.reduce((arr,val,idx,c)=>
    {
        console.log(arr,val,idx,c);
        return arr*val;
    },1)
}
const arr=[2,3,4,5]
doubleArray(arr);
useReduce(arr);