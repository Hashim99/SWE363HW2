function toggle() {
  var x = document.getElementById("searchBar");
    
if(x.style.display==="block"){
       x.style.display = "none" 
}
    
else{
   x.style.display = "block"; 
}
    
} 




$(".dismiss").click(function(){

   var x = $(".sidebar");
     
  

  if(x.css("width")==="1px"){
    x.css("width", "13%")
  }

  else{
     x.css("width", "1px") ;
  }
    
  
    


 
    console.log("lol")
});


 


