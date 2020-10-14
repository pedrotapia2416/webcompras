jQuery(document).ready(function(){		
	// hide #back-top first
		// scroll body to 0px on click
		jQuery('.irtop a').click(function () {
			jQuery('body,html,header').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
jQuery('a[href^="#"].btn-buscar').click(function(e) {
		 e.preventDefault();
jQuery('.search-submit').css({display:'block'},250);
		 jQuery( ".search-field" ).addClass( "activo" );
		 jQuery( ".search-field" ).focus();
		 jQuery('.search-form .btn-buscar').css({display:'none'},250);
		
			})

jQuery( ".search-field" ).focusout(function() {
				setTimeout(function(){ 
		jQuery(".search-field").removeClass("activo");	
		jQuery('.search-submit').css({display:'none'},250);
		 jQuery('.search-form .btn-buscar').css({display:'block'},250);
		  }, 500);
											})
		
///problem z-index embed
var frames = document.getElementsByTagName("iframe");
    for (var i = 0; i < frames.length; i++) {
        src = frames[i].src;
        if (src.indexOf('embed') != -1) {
        if (src.indexOf('?') != -1) {
            frames[i].src += "&wmode=transparent";
        } else {
            frames[i].src += "?wmode=transparent";
        }
    }
}
//	
	});
    
   ////valido busqueda
   function validasearch(formulario) {
  if(formulario.s.value.length==0) { //¿Tiene 0 caracteres?
    formulario.s.focus();    // Damos el foco al control
    alert('No has escrito el término a buscar'); //Mostramos el mensaje
    return false; //devolvemos el foco
  }
  return true; 
} 

///abro links externos en otra pagina
    jQuery(document).ready(function() {
    jQuery('a').each(function() {
       var a = new RegExp('/' + window.location.host + '/');
       if(!a.test(this.href) && (this.href!='javascript:history.go(-1);')) {
           jQuery(this).click(function(event) {                                
               event.preventDefault();
               event.stopPropagation();
			   window.open(this.href, '_blank');
		ga('send', 'event', 'Externas', 'click', this.href);
           });
       }
    });   
    });