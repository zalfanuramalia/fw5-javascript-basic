const printSegitiga = 4;
let hasil = "";

if (typeof printSegitiga == "number"){
for (i=printSegitiga; i>=1; i--){
    for(j=1; j<=i; j++){
       hasil += j + " ";
    }  
    hasil += "\n";
}
console.log(hasil)
}
else {
    console.log("Data harus number!")
}