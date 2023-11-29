let arr=[15,105,60,95,52]
let max=arr[0]
for(i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);