var Name="";
var Correo="";
var Pass="";
var ConfPass="";

function Enviar(){

    if(Name=="Correcto" && Correo=="Correcto" && Pass=="Correcto" && ConfPass=="Correcto"){
        alert("La inscripcion ha sido correcta")
        formulario=document.getElementById('formulario');
        formulario.reset();
        document.getElementById("Nombre").style.borderColor= "";
        document.getElementById("Nombre").style.backgroundImage = "";
        document.getElementById("Email").style.borderColor= "";
        document.getElementById("Email").style.backgroundImage = "";
        document.getElementById("Clave").style.borderColor= "";
        document.getElementById("Clave").style.backgroundImage = "";
        document.getElementById("ConfClave").style.borderColor= "";
        document.getElementById("ConfClave").style.backgroundImage = "";
        Name="";
        Correo="";
        Pass="";
        ConfPass="";
    }
    else if(Name=="Incorrecto" || Correo=="Incorrecto" || Pass=="Incorrecto" || ConfPass=="Incorrecto"){
        alert("Hay campos con errores")
        Name="";
        Correo="";
        Pass="";
        ConfPass="";

    }
    else  {
        if(document.getElementById('Nombre').value==""){
            document.getElementById('nomb').innerHTML="Rellene este campo";
            document.getElementById("nomb").style.color = "red";
        }
        if(document.getElementById('Email').value==""){
            document.getElementById('email').innerHTML="Rellene este campo";
            document.getElementById("email").style.color = "red";
        }
        if(document.getElementById('Clave').value==""){
            document.getElementById('clave').innerHTML="Rellene este campo";
            document.getElementById("clave").style.color = "red";
        }
        
        if(document.getElementById('ConfClave').value==""){
            document.getElementById('confclave').innerHTML="Rellene este campo";
            document.getElementById("confclave").style.color = "red";
        }
       
    }
        
}

function Validar_Nombre(){
    Nombre=document.getElementById('Nombre').value;
    var validarNombre = /^[a-zA-Z]*$/;
    
    if( (Nombre<'a' || Nombre >'z') && (Nombre<'A' || Nombre>'Z' )){
       document.getElementById('nomb').innerHTML="El nombre no es correcto";
       document.getElementById("nomb").style.color = "red";
       document.getElementById("Nombre").style.borderColor= "red";
       document.getElementById("Nombre").style.backgroundImage = "url('error-icon.svg')";
       document.getElementById("Nombre").style.backgroundRepeat= "no-repeat";
       document.getElementById("Nombre").style.backgroundPosition="right";
       Name="Incorrecto";
    }

    else if(!validarNombre.test(Nombre)){
        document.getElementById('nomb').innerHTML="El nombre no es correcto";
       document.getElementById("nomb").style.color = "red";
       document.getElementById("Nombre").style.borderColor= "red";
       document.getElementById("Nombre").style.backgroundImage = "url('error-icon.svg')";
       document.getElementById("Nombre").style.backgroundRepeat= "no-repeat";
       document.getElementById("Nombre").style.backgroundPosition="right";
       Name="Incorrecto";

    }
   
    else {
       document.getElementById('nomb').innerHTML="";
       document.getElementById("Nombre").style.borderColor= "green";
       document.getElementById("Nombre").style.backgroundImage = "url('success-icon.svg')";
       document.getElementById("Nombre").style.backgroundRepeat= "no-repeat";
       document.getElementById("Nombre").style.backgroundPosition="right";
       Name="Correcto";
    }
    
}

function Validar_Email(){
    Email=document.getElementById('Email').value;
    var validEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    if( !validEmail.test(Email) ){
        document.getElementById('email').innerHTML="Email invalido";
        document.getElementById("email").style.color = "red";
        document.getElementById("Email").style.borderColor= "red";
        document.getElementById("Email").style.backgroundImage = "url('error-icon.svg')";
        document.getElementById("Email").style.backgroundRepeat= "no-repeat";
        document.getElementById("Email").style.backgroundPosition="right";
        Correo="Incorrecto";
		
	}else {
        document.getElementById('email').innerHTML="";
        document.getElementById("Email").style.borderColor= "green";
        document.getElementById("Email").style.backgroundImage = "url('success-icon.svg')";
        document.getElementById("Email").style.backgroundRepeat= "no-repeat";
        document.getElementById("Email").style.backgroundPosition="right";
        Correo="Correcto";
	}
    
}

function Validar_Clave(){
    Clave=document.getElementById('Clave').value;

   if(Clave=="" || Clave==" ")
    {
        document.getElementById('clave').innerHTML="La contrasena no es correcta";
        document.getElementById("clave").style.color = "red";
        document.getElementById("Clave").style.borderColor= "red";
        document.getElementById("Clave").style.backgroundImage = "url('error-icon.svg')";
        document.getElementById("Clave").style.backgroundRepeat= "no-repeat";
        document.getElementById("Clave").style.backgroundPosition="right";
        Pass="Incorrecto";

    }

    if(Clave.length>8){
        document.getElementById('clave').innerHTML="No debe tener mas de 8 caracteres";
        document.getElementById("clave").style.color = "red";
        document.getElementById("Clave").style.borderColor= "red";
        document.getElementById("Clave").style.backgroundImage = "url('error-icon.svg')";
        document.getElementById("Clave").style.backgroundRepeat= "no-repeat";
        document.getElementById("Clave").style.backgroundPosition="right";
        Pass="Incorrecto";
    }
    else if(Clave.length>0 && Clave.length<=8 && Clave!=" "){
        document.getElementById('clave').innerHTML="";
        document.getElementById("Clave").style.borderColor= "green";
        document.getElementById("Clave").style.backgroundImage = "url('success-icon.svg')";
        document.getElementById("Clave").style.backgroundRepeat= "no-repeat";
        document.getElementById("Clave").style.backgroundPosition="right";
        Pass="Correcto";
    }

}

function Validar_ConfClave(){
    Clave=document.getElementById('Clave').value;
    ConfClave=document.getElementById('ConfClave').value;

   if(ConfClave==" " || ConfClave==""){
        document.getElementById('confclave').innerHTML="La contrasena no es correcta";
        document.getElementById("confclave").style.color = "red";
        document.getElementById("ConfClave").style.borderColor= "red";
        document.getElementById("ConfClave").style.backgroundImage = "url('error-icon.svg')";
        document.getElementById("ConfClave").style.backgroundRepeat= "no-repeat";
        document.getElementById("ConfClave").style.backgroundPosition="right";
        ConfPass="Incorrecto";
    }
   if(ConfClave.length> 0 && ConfClave!=" "){
        

        if(ConfClave!=Clave){
            document.getElementById('confclave').innerHTML="Las contrasenas no coinciden";
            document.getElementById("confclave").style.color = "red";
            document.getElementById("ConfClave").style.borderColor= "red";
            document.getElementById("ConfClave").style.backgroundImage = "url('error-icon.svg')";
            document.getElementById("ConfClave").style.backgroundRepeat= "no-repeat";
            document.getElementById("ConfClave").style.backgroundPosition="right";
            ConfPass="Incorrecto";
            Pass="Incorrecto"
        }
        else if(ConfClave==Clave){
        document.getElementById('confclave').innerHTML="";
        document.getElementById("ConfClave").style.borderColor= "green";
        document.getElementById("ConfClave").style.backgroundImage = "url('success-icon.svg')";
        document.getElementById("ConfClave").style.backgroundRepeat= "no-repeat";
        document.getElementById("ConfClave").style.backgroundPosition="right";
        ConfPass="Correcto"}
    }
 
}