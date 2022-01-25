const mtk = "100";
const bahasaIndonesia = 100;
const bahasaInggris = 70;
const ipa =  80;

if (mtk !== null && mtk !== "string"){
  if (bahasaIndonesia !== null && bahasaIndonesia !== "string"){
    if(bahasaInggris !== null && bahasaInggris !== "string"){
      if (ipa !== null && ipa !== "string"){
        const hasil = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4
        if (90 <= hasil && hasil<= 100 ){
          console.log("Rata-rata =" + hasil + "\n" + "Grade = A" );
        }
        else if(80 <= hasil && hasil <= 89){
          console.log("Rata-rata =" + hasil + "\n" + "Grade = B");
        }
        else if(70 <= hasil && hasil <= 79){
          console.log("Rata-rata =" + hasil + "\n" + "Grade = C");
        }
        else if(60 <= hasil && hasil <= 69){
          console.log("Rata-rata =" + hasil + "\n" + "Grade = D");
        }
        else if(0 <= hasil && hasil <= 59){
            console.log("Rata-rata =" + hasil + "\n" + "Grade = E");
        }
        else{
            console.log("Error")
        }
      }
    }
  }
}

