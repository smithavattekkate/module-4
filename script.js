
(function  (names) {
  
 var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"]; 
 var i, FirstAlpha ;
 
 for( i = 0 ; i < names.length; i++) 
  {
    FirstAlpha = names[i].charAt(0).toLowerCase();

 if ( FirstAlpha ==='j') 
   {
     byeSpeaker.speak(names[i]);  
   } 
    else 
   {
     helloSpeaker.speak(names[i]);       
   }
   
 }
   
   
})(names);


   