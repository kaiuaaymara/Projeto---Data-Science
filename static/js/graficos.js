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
else if(val == "cancelamentosmes")
  document.getElementById("grafico3").style.display = 'flex';
else if(val == "aeroportostempo")
  document.getElementById("grafico4").style.display = 'flex';
else if(val == "aeroportoscancelados")
  document.getElementById("grafico5").style.display = 'flex';
else if(val == "aeroportosatraso")
  document.getElementById("grafico6").style.display = 'flex';
else if(val == "distribuicaoaeroportos")
  document.getElementById("grafico7").style.display = 'flex';
else if(val == "Departure_Date")
  document.getElementById("grafico8").style.display = 'flex';
console.log(val)
}


function hideAll()
  {
     document.getElementById("grafico1").style.display = 'none';
     document.getElementById("grafico2").style.display = 'none';
     document.getElementById("grafico3").style.display = 'none';
     document.getElementById("grafico4").style.display = 'none';
     document.getElementById("grafico5").style.display = 'none';
     document.getElementById("grafico6").style.display = 'none';
     document.getElementById("grafico7").style.display = 'none';
     document.getElementById("grafico8").style.display = 'none';
   }