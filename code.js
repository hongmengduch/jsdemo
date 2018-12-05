
function calculateBmi() {
    
    var Markw = document.getElementById("weigh1").value;
    var Markh = document.getElementById("heigh1").value;
    var Johnw = document.getElementById("weigh2").value;
    var Johnh = document.getElementById("heigh2").value;
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    
    document.getElementById("demo1").innerHTML = name1 + " has weight: " + Markw + "&nbsp kg, and heigh: " + Markh + "&nbsp cm <br>";
    document.getElementById("demo2").innerHTML = name2 + " has weight: " + Johnw + "&nbsp kg, and heigh: " + Johnh + "&nbsp cm <br>";
  
   
    
    
    var finalBmi=0; 
    var meaning= "";
        if(Markw > 0 && Markh > 0){	
         finalBmi = Markw/(Markh/100*Markh/100)
            
            result(finalBmi);
            document.getElementById("markbmi").innerHTML =name1 + " has BMI &nbsp"+finalBmi+ "&nbsp&nbsp&nbsp<p>" +name1+"&nbsp"+ result(meaning) + "<p><br>";
               
        }  
    if(Johnw > 0 && Johnh > 0){	
         finalBmi = Johnw/(Johnh/100*Johnh/100)
            
            result(finalBmi);
            document.getElementById("johnbmi").innerHTML =name2 + " has BMI &nbsp"+finalBmi+ "&nbsp&nbsp&nbsp<p>" +name2+"&nbsp"+ result(meaning) + "<p><br>" ;
               
        }  
    
    
    
function result(meaning){
 if(finalBmi < 18.5){
        meaning = "is too thin."
        }

 if(finalBmi > 18.5 && finalBmi < 25){
            meaning = "is healthy."
        }
 if(finalBmi > 25){
            meaning = "has overweight."
        }

	return meaning;
}

}
