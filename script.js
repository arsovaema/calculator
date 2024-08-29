const resultInput=document.getElementById("outputot");
resultInput.textContent='0'
function add(a,b){
    return a+b;
};
function subtract(a,b){
    return a-b;
};
function multiply(a,b){
    return a*b;
};
function divide(a,b){
    return a/b;
};
let num1;
let num2;
let op;
function operate(operator,a,b)
{
    if(operator==='+')
    {
       return add(a,b);
    }
    if(operator==='-')
    {
       return subtract(a,b);
    }
    if(operator==='*')
    {
       return multiply(a,b);
    }
    if(operator==='/')
    {
      return  divide(a,b);
    }
};
let boardContent='';
const buttons=document.querySelectorAll("button");
buttons.forEach(button=>button.addEventListener('click',(e)=>{
  boardContent+=e.target.value;
  
  resultInput.textContent=boardContent;})

);
const clear=document.getElementById('clear')
clear.addEventListener('click',(e)=>{
    boardContent='';
    resultInput.textContent='0';
})
const equals=document.getElementById('equals')
equals.addEventListener('click',(e)=>{
    solution();
})
function solution(){
    let array=boardContent.split('');
    console.log(array);
    let op;
    let num2=0;
    let num1=0;
    for(let i=0;i<array.length;i++)
    {
        if(num1===0){
        while (i < array.length && !isNaN(array[i]) && array[i] !== ' ') {
            num1 = num1 * 10 + Number(array[i]);
            i++;
        }}
        else{
            let r=operate(op,num1,num2);
            num1=r;
            num2=0;
            i--;
        }
    
       op=array[i];
      
    i++;

    while (i < array.length && !isNaN(array[i]) && array[i] !== ' ') {
        num2 = num2 * 10 + Number(array[i]);
        i++;
    }
    let r=operate(op,num1,num2);
    console.log(r);
    }
    console.log(num1);
    console.log(op);
    console.log(num2);
    let r=operate(op,num1,num2);
    resultInput.textContent=r;

    
}


