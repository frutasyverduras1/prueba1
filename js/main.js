
$(document).ready(function(){
  var ancho= $("#contenedor").width();
  var top= 100;
  var tope= 0;
  var fin = 0;
  var tip=0;
  var tiempo =0;
  var largo=0;
  var velocidad=10;
  var des = $("#des").height()+460;
  var move = $("#move").position();
  var pos = $("#pj1").position();
  var pos2 = $("#pj2").position();
  var pos3 = $("#pj3").position();
  var pleft = pos.left;
  var ptop = pos.top;



$("#pj1, #pj2 , #pj3").draggable({
  containment: "#contenedor",
  revert:true,

  drag: function(event, ui) {
      ancho= $("#contenedor").width();
      if ( ui.position.left > 220 && ui.position.left < 321 && ui.position.top < 460 ) {

        $("#pj1, #pj2 , #pj3").trigger("mouseup");

      }

      if ( ui.position.left > 369 && ui.position.left < 470) {
        if (ui.position.top < 129 || ui.position.top > 170) {

        $("#pj1, #pj2 , #pj3").trigger("mouseup");
        }
      }

      if ( ui.position.left > 520 && ui.position.left < 620) {
        if (ui.position.top < 109 || ui.position.top > 270) {
        $("#pj1, #pj2 , #pj3").trigger("mouseup");
        }
      }
  }

 });


 setInterval(function(){
   move = $("#move").position();
   pos = $("#pj1").position();
   pos2 = $("#pj2").position();
   pos3 = $("#pj3").position();
    if ( pos.left > 520 && pos.left < 620) {
      if (pos.top < top+109 && pos.top+89 > top+9) {
      $("#pj1").trigger("mouseup");
      }
    }
    if ( pos2.left > 520 && pos2.left < 620) {
      if (pos2.top < top+109 && pos2.top+89 > top+9) {
      $("#pj2").trigger("mouseup");
      }
    }
    if ( pos3.left > 520 && pos3.left < 620) {
      if (pos3.top < top+109 && pos3.top+89 > top+9) {
      $("#pj3").trigger("mouseup");
      }
    }
  },
  velocidad
  );

  setInterval(function(){
    des = $("#des").height()+461;
    pos = $("#pj1").position();
    pos2 = $("#pj2").position();
    pos3 = $("#pj3").position();
    if ( pos.left > 220 && pos.left < 321 && pos.top < des ) {
      $("#pj1").trigger("mouseup");
    }
    if ( pos2.left > 220 && pos2.left < 321 && pos2.top < des ) {
      $("#pj2").trigger("mouseup");
    }
    if ( pos3.left > 220 && pos3.left < 321 && pos3.top < des ) {
      $("#pj3").trigger("mouseup");
    }
   },
   velocidad
   );

setInterval(function(){

  if (tip==0) {
    if (largo < 150) {
      largo++;
      $("#des").css("height", largo);
    }else{
      tip=1;
    }
  }
  if (tip==1) {
    if (largo > 0) {
      largo--;
      $("#des").css("height", largo);
    }else{
      tip=0;
    }
  }
},
velocidad
);

 setInterval(function(){
  if (tope==0) {
  if (top < 260 ) {
      top++;
      $("#move").css("top", top);
    }else {
      tope = 1;
    }
  }

if (tope==1) {
  if (top > 100) {
    top--;
    $("#move").css("top", top);
  }else {
    tope=0;
  }
}

 },
 1
);

$("#contpj1").droppable({
  accept: "#pj1",
  drop: function(event, ui){
    $("#pj1").draggable({ revert: false });
    $("#pj1").draggable("disable");
    $("#pj1").css("left", 708);
    $("#pj1").css("top", 50);
    fin++;
    if (fin==3) {
        alert("Felicidades lo lograste!");
        location.reload();
      }
    }
  });

$("#contpj2").droppable({
  accept: "#pj3",
  drop: function(event, ui){
    $("#pj3").draggable({ revert: false });
    $("#pj3").draggable("disable");
    $("#pj3").css("left", 706);
    $("#pj3").css("top", 190);
    fin++;
    if (fin==3) {
        alert("Felicidades lo lograste!");
        location.reload();
      }
    }
  });

$("#contpj3").droppable({
  accept: "#pj2",
  drop: function(event, ui){
    $("#pj2").draggable({ revert: false });
    $("#pj2").draggable("disable");
    $("#pj2").css("left", 704);
    $("#pj2").css("top", 330);
    fin++;
    if (fin==3) {
        alert("Felicidades lo lograste!");
        location.reload();
      }
    }
  });
$("#tiempo").click(function(){
  setInterval(function(){
    tiempo++;
    $("#tiempo").css("display","none");
    $("#tiempo2").css("display","none");
    $("#tiempo3").css("display","none");
    $("#tiempop").html(tiempo);
    if (tiempo==51) {
      alert("Ups! se te acabo el tiempo!");
      location.reload();
    }
   },
   1000
   );
});

$("#tiempo2").click(function(){
  setInterval(function(){
    tiempo++;
    $("#tiempo").css("display","none");
    $("#tiempo2").css("display","none");
    $("#tiempo3").css("display","none");
    $("#tiempop").html(tiempo);
    if (tiempo==31) {
      alert("Ups! se te acabo el tiempo!");
      location.reload();
    }
   },
   1000
   );
});

$("#tiempo3").click(function(){
  setInterval(function(){
    tiempo++;
    $("#tiempo").css("display","none");
    $("#tiempo2").css("display","none");
    $("#tiempo3").css("display","none");
    $("#tiempop").html(tiempo);
    if (tiempo==21) {
      alert("Ups! se te acabo el tiempo!");
      location.reload();
    }
   },
   1000
   );
});
});
