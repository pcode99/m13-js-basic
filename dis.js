const price = 8000;
if(price>=20000){
    //10% discount

    const discount = price *10 / 100;
    // console.log(discount);
    const payAmount = price - discount;
    console.log(payAmount);
}
 else if (price >=18000){
    //8% discount
    const discount = price * 8 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
 }
else if (price >= 15000) {
    //6% discount
    const discount = price * 6 / 100;
    const payAmount = price - discount;
    console.log(payAmount);}
else if (price >= 10000) {
    //4% discount
    const discount = price * 4 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (price >= 5000) {
    //2% discount
    const discount = price * 2 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (price >= 3000) {
    //5% discount
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}



else if (price >= 3000) {
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount);

} else {
    console.log(price);
}