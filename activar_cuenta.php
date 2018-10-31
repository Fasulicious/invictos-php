
<section id="activar_cuenta" >
<div class="contenedor-tabla">
  <div class="contenedor-celda">
    <div class="texto">

      Su cuenta no est&aacute; activada.
      Para activar su cuenta debe acceder al link que se le proporcion&oacute; en su correo electr&oacute;nico: <span><?php echo $_SESSION['correo'];?></span>, al momento de registrarse.<br>

      Verifique que el correo de activaci&oacute;n no haya llegado a su bandeja de <span>Correo no deseado o Spam</span>, y si est&aacute; seguro de que el correo no ha llegado a&uacute;n, puede <a id="solicitar_otra_vez">volver a solicitarlo haciendo click aqu&iacute;</a>.
      <br>

    </div>
    <div class="texto enviando reglon" >Enviando el c&oacute;digo a su correo...<br>Espere un momento por favor...</div>
    <div class="texto reglon" id="msj_codigo_enviado">Se ha enviado el c&oacute;digo de activaci&oacute;n al correo: <span><?php echo $_SESSION['correo'];?> </span>
    </div>
    
  </div>
</div>




<style>


#activar_cuenta .texto{

    max-width: 1000px;
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
    margin: auto;
}

#activar_cuenta span{
  font-weight:bold;
}

#activar_cuenta .reglon{

    margin-top: 20px;
    display:none;
}

#solicitar_otra_vez{
  color: blue;
  cursor: pointer;
}
#solicitar_otra_vez:hover{
  text-decoration: underline;
}

</style>




<script type="text/javascript">

  $(document).ready(function(){
    $('body').on('click','#solicitar_otra_vez',function(){

    $('#activar_cuenta .enviando').slideDown(300);
    //$('#activar_cuenta .texto').slideUp(300);
      fun_solicitar_codigo_activacion();
    });
  });


  function fun_accion_despues_solicitar_codigo(){
    $('#msj_codigo_enviado').slideDown(300);
    $('#activar_cuenta .enviando').slideUp(300);
 /*   var delay=setInterval(function(){
      clearInterval(delay);
      $('#msj_codigo_enviado').slideUp(300);

    },4000);*/
  }

</script>