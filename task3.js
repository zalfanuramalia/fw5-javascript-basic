const printSegitiga = 5;
let hasil = "";

for (i=printSegitiga; i>=1; i--){
    for(j=1; j<=i; j++){
       hasil += j;
    }  
    hasil += "\n";
}
console.log(hasil)