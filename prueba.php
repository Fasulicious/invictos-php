<?php 
  // server should keep session data for AT LEAST 1 hour
  ini_set('session.gc_maxlifetime', 360000);

  // each client should remember their session id for EXACTLY 1 hour
  session_set_cookie_params(360000);
  session_start();

require_once('UTIL/variables_globales.php');


/*
require_once('UTIL/verificacion.php');


require_once("CONEXION/Conexion.php");
$og_consulta='';


if(isset($_GET['view']) && isset($_GET['id'])  ){



  switch(strtolower($_GET['view'])){
    case 'anuncios':
      require_once("DAO/AVISOS/DAOAvisos.php");

        $DAOAvisos=new DAOAvisos();

        $id_aviso=explode('_', $_GET['id']);


    
        $og_consulta=$DAOAvisos->get_aviso_por_id($id_aviso[0]);


        if($og_consulta)
        {
          $og_ttl=$og_consulta[0]['titulo'];
          $og_desc=$og_consulta[0]['descripcion'];
          $og_img='IMG/AVISOS/VISTA_PREVIA/WEB/'.$og_consulta[0]['img_previa'].'.'.$og_consulta[0]['img_previa_ext'];
          $og_url=$GL_DNS.'/anuncios/'.$og_consulta[0]['id'].'_'.$og_consulta[0]['img_previa'];
        }

      break;

      case 'noticias':

        require_once("MOD/INSTALACIONES/DAO/DAOInstalaciones.php");

        $DAOInstalaciones=new DAOInstalaciones();

        $id_aviso=explode('_', $_GET['id']);

        $og_consulta=$DAOInstalaciones->get_noticia_por_id($id_aviso[0]);


        if($og_consulta)
        {
          $og_ttl=$og_consulta[0]['titulo'];
          $og_desc=$og_consulta[0]['descripcion'];
          $og_img='IMG/NOTICIAS/FONDOS/WEB/'.$og_consulta[0]['id_img'].'.'.$og_consulta[0]['ext_img'];
          $og_url=$GL_DNS.'/noticias/'.$og_consulta[0]['id_noticia'].'_'.$og_consulta[0]['id_img'];
        }

      break;
      }
    if($og_consulta){
      $og_consulta=json_encode($og_consulta);
    }else{
      $og_ttl='Invictos S.A.C.';
      $og_desc='Descripcion invictos';
      $og_img='IMG/logo-invictos.png';
      $og_url=$GL_DNS;
      $og_consulta='';
    }
}else{
      $og_ttl='Invictos S.A.C.';
      $og_desc='Descripcion invictos';
      $og_img='IMG/logo-invictos.png';
      $og_url=$GL_DNS;
      $og_consulta='';
}

*/

?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta charset="utf-8">
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <meta name="author" content=""> 
  <meta property="og:type" content="website"> 
  
  <meta property="og:site_name" content="www.invictos.pe">
  <meta property="og:url" content="<?php echo $og_url;?>">
  <meta property="og:title" content="<?php echo $og_ttl;?>">
  <meta property="og:description" content="<?php echo $og_desc;?>">  
  <meta property="og:image" content="<?php echo $og_img;?>">  

  <base href="<?php echo $GL_DNS;?>/"></base>

  
  <meta name="description" content="<?php echo $og_desc;?>">

  <link rel="shortcut icon" href="IMG/icon.png">
  <script type="text/javascript" src="JS/LIBRERIAS/jquery-2.1.1.min.js"></script>   


<script type="text/javascript" src="JS/funciones_generales.js"></script>   

  
  <script type="text/javascript" src="COMPONENTES/ini.js"></script>
<!--
<script type="text/javascript" src="JS/funciones_votacion.js"></script>  
-->



  <title>Invictos</title>
</head>


<section>
  <div id="cargando" class="comp-cargando" data-srclogo="" data-animacionretirar="desplazar_arriba">
    <div data-elemento="imagen" data-src="IMG/logo_blanco.png" ></div>
    <div data-elemento="barra"></div>
    <div data-elemento="fondo" data-src="" data-expandido="false"></div>
  </div>
</section>

<body class="inicio">

<input id="ciudad" type="text">


<style id=""></style>


    <script>
// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

var placeSearch, autocomplete;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('ciudad')),
      {types: ['geocode']});

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);





}

// [START region_fillform]
function fillInAddress() {

    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

  /*
    for (var component in componentForm) {
      document.getElementById(component).value = '';
      document.getElementById(component).disabled = false;
    }*/

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.

    $('#barra_buscador #lugar_latitud').val(place.geometry.location.lat());
    $('#barra_buscador #lugar_longitud').val(place.geometry.location.lng());


    GL_RESET_CIRCULO=true;
    $('#seccion_funcion-buscar #posicion-circulo').val('no');

    /*for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
        document.getElementById(addressType).value = val;
      }
    }*/

}
// [END region_fillform]

// [START region_geolocation]
// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}
// [END region_geolocation]

    </script>

    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDynHed2PBvIyUCd6WkYmDyQbuC5aiYGHs&libraries=places&callback=initAutocomplete"></script>

</body></html>