

  
      <section id="pagina-biblioteca" class="estilo-pagina area-pagina  comp-animacion-ini" data-area="biblio">             
            <header>
              <h1>
                Biblioteca
              </h1>
              <h2>
                Busca un libro de tu inter&eacute;s
              </h2>              
            </header>
            <div id="buscador-biblioteca">
              <div class="inputs">

                <input type="hidden" id="id_curso">
                <input type="text" class="input-materia nombre_tema_curso_buscar" placeholder="Materia, Matem&aacute;ticas, Finanzas, etc...">                
              </div>
              <div class="boton_busqueda boton_invictos">
                Buscar
              </div>
            </div>
            
            <div class="resultados-biblioteca">
              <div class="descripcion">
                <span>Libros encontrados:</span> <span id="conteo_libros">0 Libro(s)</span>
              </div>              
              <ul class="cabecera">
                <li class="titulo">T&iacute;tulo del libro - Autor</li>
                <li class="descargas">Cant. descargas</li>
                <li class="usuario">Usuario</li>
                <li class="valoracion">Valoraci&oacute;n</li>
                <li class="enlace">Enlace</li>
              </ul>
              <div class="lista-resultados">

                <div class="comp-consultor-elemento" data-elemento="busqueda_recurso" data-condicion="consulta_1" data-orderby="order_1" data-conteo="10" data-recarga="true" data-txt_recarga="Buscar m&aacute;s libros" data-vacio="No se encontraron m&aacute;s libros">
                  
                  
                  <condicion data-iddom="condicion_texto" data-campo="texto" data-valor=""></condicion>
                  
                  <estructura>
                    <ul class="resultado elemento" data-nombre="{titulo}"  data-id_elemento="{id}">                    
                      <li class="titulo"><span class="icono"></span> <span>{titulo} - {autor}</span></li>
                      <li class="descargas">{descargas} descargas</li>
                      <li class="usuario"><span style="cursor:pointer;" class="comp-submenu-celda-content" data-area="perfil" data-columna="perfil" data-rol="principal" data-href="if['{username}'!='' && '{username}'!='null' && '{username}'!='NULL']then[{username}]else[{id_profe}]">{nombres} {apellidos}</span></li>
                      <li class="valoracion"><div <?php if(isset($_SESSION['id'])){ echo 'class="btn_votar_recurso"'; } ?>><span class="icono"></span> <span class="numero">{valoraciones}</span></div></li>
                      <li class="enlace"><a href="{link_externo}" target="blank"><span class="icono"></span></a></li>
                    </ul>
                  </estructura>

                </div>

              </div>
            </div>

      </section>

  <script>

    $(document).ready(function(){
      $('body').on('click','.resultados-biblioteca .lista-resultados .enlace a',function(){
        fun_registrar_descarga_recurso($(this).parents('.elemento').data('id_elemento'));
      });

    });

    function fun_registrar_descarga_recurso(id_recurso){

      $.ajax({

        url:'POST/VOTACIONES/registra_descarga_libro.php',
        data:{id_recurso: id_recurso},
        type:'POST',
        datatype:'json',
        async:true,
        beforeSend:function(objeto){

        },
        success:function(data){
          console.log(data);
        }
      });
    }
  </script>
