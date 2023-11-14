function task2() {
    let arr=[5,7,3,11,43];
    let sum=0  
        for (let i=0; i< arr.length; i++){
            if (arr[i] > 0 && arr[i] < 10){
            sum+=i;   
            console.log (`${sum}`);}
        } }