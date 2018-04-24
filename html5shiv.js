/*! HTML5 Shiv vpre3.6 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */
 window.addEventListener('load', yourFunction, false);
function showInput() {
    'use strict';
   /* 'use strict';
        document.getElementById('display').innerHTML = 
                    document.getElementById("id1").value;
                    
                    var x = document.getElementById("sendEmail").checked;
    document.getElementById("demo5").innerHTML = x;
                    
                    */
           

      var a= document.getElementById("demo") .innerHTML= "Title of event : "+document.getElementById("id1").value;
      var b=document.getElementById("demo1") .innerHTML= "Description of event : "+document.getElementById("id2").value;
    
     /*********/
    
    if (document.getElementById("sendEmail").checked) {
  
        var f=document.getElementById("demo5").innerHTML = "The email is already send";
}
    
    
     var e= document.getElementById("demo4").innerHTML ="The kinds of event:"+ document.getElementById("o").value;
    
    var d= document.getElementById("demo3").innerHTML = "Date : "+document.getElementById("55").value;
    
    /*********/
        
   var c;
    if (document.getElementById("1").checked) {
  var rate_value = "Time of event : "+ document.getElementById("1").value;
        c=document.getElementById("demo2").innerHTML = rate_value;
}
      /*********/
    else if (document.getElementById("2").checked) {
  var rate_value = "Time of event : "+ document.getElementById("2").value;
       c= document.getElementById("demo2").innerHTML = rate_value;
}
      /*********/
  else if (document.getElementById("3").checked) {
  var rate_value = "Time of event : "+ document.getElementById("3").value;
        c=document.getElementById("demo2").innerHTML = rate_value;
}
      /*********/
    var n="              your event is already published"+"\n"+a+"\n"+b+"\n"+c+"\n"+d+"\n"+e+"\n"+f;
  
    alert(n);
    
    }
 /*function() {
  document.getElementById("demo") .innerHTML= "Hello World";
  }();*/