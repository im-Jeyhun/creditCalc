function creditCalc() {
    
    var amount = document.getElementById('amount').value;
    var period = document.getElementById('period').value;
    var rate = document.getElementById('rate').value;
    var summa = (parseFloat(amount*rate/100) + parseFloat(amount)) / period;

   document.getElementById('sum').innerHTML=`<span> Sizin ayliq odeyeceyiniz mebleg : ${Math.round(summa)} AZN </span> `;


}

function Focus1(){

    var input1 = document.getElementById('in-span');
    input1.style.top = '0px';


}

function Focus2 (){
    var input2 = document.getElementById('in-span1');
    input2.style.top = '0px';

}

function Focus3 (){
    var input3 = document.getElementById('in-span2');
    input3.style.top = '0px';

}

function Blur1(){
    var input1 = document.getElementById('in-span');
    input1.style.top = '25px';

}

function Blurex() {
    var amount = document.getElementById('amount').value;
    if(amount.toString().length==0)
    {
       Blur1();
    }
    
}

function Blur2(){
    var input2 = document.getElementById('in-span1');
    input2.style.top = '25px';
}

function Blurey() {
    var period = document.getElementById('period').value;
    if(period.toString().length==0)
    {
       Blur2();
    }    
}
function Blur3(){
    var input3 = document.getElementById('in-span2');
    input3.style.top = '25px';
}
function Blurez() {
    var rate = document.getElementById('rate').value;
    if(rate.toString().length==0)
    {
       Blur3();
    }    
}