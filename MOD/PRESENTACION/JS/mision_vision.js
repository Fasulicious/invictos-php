


function OBJ_PRESENTACION(html_qns_sms,html_mision_vision) {
    this.qns_sms;
    this.mision;
    this.vision;

    this.directorio=GL_DNS_POST+"/MOD/PRESENTACION";

	if($('#gl_admin').val()=='1'){
    	this.admin=true;
    }else{
    	this.admin=false;
    }

    this.html_qns_sms=html_qns_sms;
    this.html_mision_vision=html_mision_vision;


    this.get_mision_vision=function(){
    	var objeto=this;
		$.ajax({
	        url: this.directorio+"/POST/get_mision_vision.php",
	        type: "POST",
	        datatype:'json',
	        data:{},
	        async:true,
	        beforeSend: function(objeto){
	        	
	        },	        
			success: function(data){
				
				if(data=="mysql_no"){
					FMSG_ERROR_CONEXION();
				}else{

					respuesta=$.parseJSON(data);

					if(objeto.admin){
						$(html_qns_sms).val(fun_invierte_tratamiento_carac_esp(respuesta.qns_sms));


						$(html_mision_vision).val(fun_invierte_tratamiento_carac_esp(respuesta.mision_vision));




					}else{
						$(html_qns_sms).html(respuesta.qns_sms);


						$(html_mision_vision).html(respuesta.mision_vision);
					}
				}
			}

		});
    };



    this.set_presentacion=function(presentacion){
		objeto=this;


		$.ajax({
	        url: this.directorio+"/POST/modificar_presentacion.php",
	        type: "POST",
	        datatype:'json',
	        data:{qns_sms:fun_tratamiento_caracteres_especiales(presentacion.qns_sms),mision_vision:fun_tratamiento_caracteres_especiales(presentacion.mision_vision)},
	        async:true,
	        beforeSend: function(objeto){
	        	
	        },	        
			success: function(data){

				if(data=="mysql_no"){
					FMSG_ERROR_CONEXION();
				}else{

					if(data!='no data'){
						alert('Información guardada');
											
/*
							GL_IMG_TEMP_MISION.id='';
							GL_IMG_TEMP_MISION.ext='';

							GL_IMG_TEMP_VISION.id='';
							GL_IMG_TEMP_VISION.ext='';
							
							$('#div_qns_sms').val();
							$('#div_mision').val();
							$('#div_vision').val();

							$('#area_vision #img_previa img').attr('src','');
							$('#area_vision #btn_subir_img_vision').removeClass('btn_subir_img_minimizado');
							$('#area_vision .div_subir_foto').removeClass('div_subir_foto_reducido');

							$('#area_mision #img_previa img').attr('src','');
							$('#area_mision #btn_subir_img_mision').removeClass('btn_subir_img_minimizado');
							$('#area_mision .div_subir_foto').removeClass('div_subir_foto_reducido');*/

						
					}
					
				}
			}

		});
    };


}

$(document).ready(function(){

	if($('#gl_admin').val()=='1'){

		mision_vision=new OBJ_PRESENTACION('#div_qns_sms','#div_mision_vision');
		mision_vision.get_mision_vision();
		
	}

});


			



function fileread(event) {

//Check File API support
    if (window.File && window.FileList && window.FileReader) {

        var files = event.target.files; //FileList object
        var output = document.getElementById("thumb");

		var formData = new FormData();

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            //Only pics
            if (!file.type.match('image')) continue;

            var picReader = new FileReader();
            picReader.addEventListener("load", function (event) {



                var picFile = event.target;
                var div = document.createElement("div");

				 formData.append('filename[]', picFile, picFile.name);

                div.innerHTML = "<img class='thumbnail' src='" + picFile.result + "'" + "title='" + picFile.name + "'/>";
                output.insertBefore(div, null);


			 uploadajax(formData);

            });
            //Read the image
            picReader.readAsDataURL(file);
        }
    } else {
        console.log("Your browser does not support File API");
    }



/*	var fsize = file.files[0].size;

	var fname = file.files[0].name;

	var ftype = file.files[0].type;


	
	 var fielArray = ["image/png", "image/jpeg", "image/gif", "image/jpg"];

	 var fileTrue = fielArray.indexOf(ftype);

	if(fileTrue>=0){

		
		for (var i = 0; i < file.files.length; i++) {
		 var reader = new FileReader();

		// reader.element = $(file).parent().find('thumb');

alert('h1 '+ file.files[i].name);
		 reader.onload = function(e) {

			 
alert('h2 '+ file.files[i].name);

			 
			var formData = new FormData();



			
			 $('#thumb').append("<img class='thumb' src='" + e.target.result + "'" + "title='" + file.files[i].name + "'/>");




			 var fileup = file.files[i];

			 // Check the file type.

				 if (!fileup.type.match('image.*')) {

				 continue;

				 }

			 // Add the file to the request.

			 formData.append('filename[]', fileup, fileup.name);

			

		 uploadajax(formData);

		 };

	}
		 reader.onerror = function(e) {

		 alert("error: " + e.target.error.code);

		 };

	 	reader.readAsDataURL(file.files[0]);

	 	}else{

	 	document.getElementById("error").innerHTML = "Incorrect file format, Please select an image file format..";

		}
*/
 }


 function uploadajax(formData){

 	var xhr = new XMLHttpRequest();


	xhr.open('POST', 'demo_form.php', true);

	xhr.onload = function () {
		alert('oye');
		 if (xhr.status === 200) {

		 //console.log(xhr.responseText);

		 } else {

		 alert('An error occurred!');

		 }

	};

	 
	xhr.upload.addEventListener("progress", imageprogress, false);

	xhr.addEventListener("load", Completed, false);

	xhr.addEventListener("error", failstatus, false);

	 xhr.addEventListener("abort", Abortedstatus, false);

	xhr.send(formData);

 

}

 

 function imageprogress(event){

 document.getElementById('complete').style.display = 'none';

document.getElementById('progress_status').style.display = 'block';

 //document.getElementById("loaded_n_total").innerHTML = "Uploaded "+event.loaded+" bytes of "+event.total;

 var percent = (event.loaded / event.total) * 100;

alert(percent);
 document.getElementById("status").value = Math.round(percent);

 $("#progressbar").progressbar({value: document.getElementById("status").value});

 document.getElementById("status").innerHTML = Math.round(percent)+"%";

}
