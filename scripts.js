
    (function($) {
    "use strict"; // Inicio de uso estricto
  
    // Desplazamiento suave con jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Desplácese al botón superior aparece
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Cierra el menú receptivo cuando se hace clic en un enlace de activación de desplazamiento
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Active scrollspy para agregar la clase activa a los elementos de la barra de navegación en el desplazamiento
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Contraer barra de navegación
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Contraer ahora si la página no está en la parte superior
    navbarCollapse();
    // Contraer la barra de navegación cuando se desplaza la página
    $(window).scroll(navbarCollapse);
  
    // Encabezados de etiqueta flotante para el formulario de contacto
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // Fin de uso estricto