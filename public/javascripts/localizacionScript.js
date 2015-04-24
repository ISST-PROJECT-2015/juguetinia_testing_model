var codigoGeo = "NSO";
var latitude = "0";
var longitude ="0";
var ejecutado = "NO";

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }else { 
        codigoGeo = "NSO"; //No Soportado
        ejecutado = "SI";
    }
}

function showPosition(position) {
    codigoGeo = "SO";
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    ejecutado = "SI";
}

getLocation();

$(document).ready(function(){

    var host = window.location.hostname;
    var total = document.getElementById("TOTAL").innerHTML;
    var exito = document.getElementById("EXITO").innerHTML;
    var dataString = "host=" + host + "&total=" +total + "&exito=" +exito + "&codigoGeo=" +codigoGeo + "&latitude=" +latitude + "&longitude=" +longitude;

    $.ajax({
        type: "POST",
        url: "http://www.facturas3-isst.appspot.com/prueba2",
        data: dataString,
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'jsonpCallback',

        success: function( data, textStatus, jqXHR){
            if(data.success){
                $("#IVA").html("");
    			$("#IVA").append(data.countryInfo.iva);
                $("#TOTALIVA").html("");
                $("#TOTALIVA").append(data.totalIva);
                $("#LOCALIZADO").html("");
                $("#LOCALIZADO").append(data.localizadoPor);
            } 
            else {
                $("#IVA").html("ERROR");
                $("#TOTALIVA").html("ERROR");
                $("#LOCALIZADO").html("ERROR");
            }
        },
         
        error: function(jqXHR, textStatus, errorThrown){
            console.log("Algo malo ha ocurrido: " + textStatus);
            $("#IVA").html(jqXHR.responseText);
            $("#TOTALIVA").html(jqXHR.responseText);
        },
    });
});