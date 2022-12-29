var numero = 0;

numero = prompt('Indique un número: ', '');

if((numero % 2) == 0){
  
  console.log(numero + ' es par');
  
   for(i = 1; i <= numero; i++){
     if(i % 2 == 0){
      console.log(i); 
     }

   }
        
         
}else{
  
  console.log(numero + ' es impar');
  
  for(i = 1; i <= numero; i++){
     if(i % 2 == 1){
      console.log(i); 
     }

   }
}