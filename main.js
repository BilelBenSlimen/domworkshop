let likes= document.querySelectorAll('.fa')
let btnPlus= document.querySelectorAll('.plus-btn')

let counter= document.querySelectorAll('.Quant')
let btnMinus=document.querySelectorAll('.minus-btn')
let deleteC=document.querySelectorAll('.delete')

console.log('hllo')

for ( let i=0; i<likes.length; i++){

    likes[i].addEventListener('click', function(){
        if(likes[i].style.color === '#e2c0d1'){
            likes[i].style.color ='red'}
            else{
                likes[i].style.color === '#e2c0d1'
            }
        }) 
 }

 for( let i=0 ; i<btnPlus.length;i++){
     btnPlus[i].addEventListener('click',function(){
         counter[i].value= Number(counter[i].value ) +1




 })
 }
 for (let i=0 ;i<btnMinus.length; i++) {
     btnMinus[i].addEventListener('click',function(){
       if(counter[i].value>1){
        counter[i].value=Number(counter[i].value)- 1
       }})}
     

 
 for(let i=0; i<deleteC.length;i++){
     deleteC[i].addEventListener('click',function(){
         deleteC [i].parentNode.remove()
        })
     }
 
 //function totalPrices(){
   //  let prices= document.querySelectorAll('price')
   //  let count=document.querySelectorAll('quant')
   //  let sum=0
  //   for( let i=0; i<prices.length;i++)
  //   sum=

 