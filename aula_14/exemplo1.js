let arr = [(x)=>x*2,(x)=>x+2];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i](i+1));
}