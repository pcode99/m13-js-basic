const age = 30;
const price = 500;
 if (age < 12){
    console.log("you can eat for feree")
 }
 else if (age >=60 ){
    //50% discount 

    const discount = price * 50/100;
    const payAmount = price - discount;
    console.log(payAmount);

  
 }
 else if (age <=30 || age <=60){
    //12% add many
    const addMany = price * 18 /100;
    const payAmount = price + addMany;
    console.log(payAmount)
 }
   else{
        console.log(price);
    }