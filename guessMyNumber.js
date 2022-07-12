var y = Math.floor(Math.random() * 20 + 1);
     var guess = 0;
    var guessedNumbers = [] ; 
  
    function guessNumber(){
      
   var x = document.getElementById('guess').value;
  
  if (x <1 || x>20){ 
    document.getElementById('msg0').innerHTML ="Please don't forget : the number between 1 and 20  " ;}
  else {
    guessedNumbers.push(x);
     guess=guess+1 ;  }

   if (x < y) {
   
      document.getElementById('msg1').textContent ="Number of guesses is :"+guess ;
     document.getElementById('msg2').textContent ="Guessed Numbers are :"+guessedNumbers ;
     document.getElementById('msg3').textContent ="(OOPS SORRY!! A GREATER NUMBER)";}
      

else if (x > y) 
{     
      document.getElementById('msg1').textContent="Number of guesses is :"+ guess ;
      document.getElementById('msg2').textContent ="Guessed Numbers are :"+ guessedNumbers;
      document.getElementById('msg3').textContent ="(OOPS SORRY!! TRY A SMALLER NUMBER)";

   }

  else if(x == y)
   {    
      document.getElementById('msg1').innerHTML ="the Number was :"+x;
      document.getElementById('msg2').innerHTML ="you guessed the number after :"+guess+" times" ;
       document.getElementById('msg3').innerHTML ="(Yuuuupy You DiiiiiiiiiiiiD It)" ;
        document.getElementById('win').style.display = 'block';

   }
    }