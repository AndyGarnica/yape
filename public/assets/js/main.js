// COROUSEL
$('.carousel.carousel-slider').carousel({fullWidth: true});

VALIDACION DE NUMERO

$(document).ready(function(){
  $("#checkBoxRegistro").on("change",function(){
    $("#btn_registro").removeClass("disabled");
  });
});


$.post("http://localhost:3000/api/registerNumber",{
  "phone": "",
  "terms": true
}).then(function (response) {
  console.log(response);
}).catch(function (error) {
  console.log(error);
});
