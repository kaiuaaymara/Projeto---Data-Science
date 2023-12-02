function showHide()
{
  hideAll();
 var x = document.getElementById("imagensgraficos");
 x.style.display = 'flex';
 var val = document.getElementById("selectgraficos").value;


 if(val == "nacionalidades")
  document.getElementById("grafico1").style.display = 'flex';
 else if(val == "atrasosmes")
  document.getElementById("grafico2").style.display = 'flex';



console.log(val)
}


function hideAll()
  {
     document.getElementById("grafico1").style.display = 'none';
     document.getElementById("grafico2").style.display = 'none';

    
   }