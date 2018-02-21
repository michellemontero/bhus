$(document).ready(function(){
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
  )
  wow.init();
  var $document = $(document),
  $element = $('#BotonTop'),
  $elementHeader = $('.Header'),
  className = 'hasScrolled',
  classNameHeader = 'hasActive';

  $document.scroll(function() {
    $element.toggleClass(className, $document.scrollTop() >= 120);
    $elementHeader.toggleClass(classNameHeader, $document.scrollTop() >= 120);
  });


    $('.fadeCervezas').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      arrows: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 6000,
      asNavFor: '.sliderCervezasIcon',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: false
          }
        }
      ]
    });


    $('.sliderCervezasIcon').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: false,
      draggable: true,
      centerMode: true,
      centerPadding: '100px',
      infinite: true,
      asNavFor: '.fadeCervezas',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    });



    $('div[data-slick-index=0] div').addClass('active');

    $('.fadeCervezas').on('beforeChange', function(event,slick,slide,nextSlide) {
        $('div[data-slick-index='+slide+'] div').removeClass('active');
        if( $('div[data-slick-index='+nextSlide+'] div' ).hasClass( "foo" )){

        }else{
          $('div[data-slick-index='+nextSlide+'] div').addClass('active');
        }
    });


    // $('.fadeCervezas').on('beforeChange', function(event,slick,slide,nextSlide) {
    //   var boton = $('.slick-current.slick-active').children()[0].classList[0];
    //   // var boton = $('.active')[0].classList[0];
    //
    //   switch (boton) {
    //     case "BtnSweet":
    //     BtnSweet(boton);
    //     break;
    //     case "BtnGoldFish":
    //     BtnGoldFish(boton);
    //     break;
    //     case "BtnAlfred":
    //     BtnAlfred(boton);
    //     break;
    //     case "BtnPiggy":
    //     BtnPiggy(boton);
    //     break;
    //     case "BtnNess":
    //     BtnNess(boton);
    //     break;
    //     case "BtnGarota":
    //     BtnGarota(boton);
    //     break;
    //     case "BtnSuperStar":
    //     BtnSuperStar(boton);
    //     break;
    //     case "BtnVulcano":
    //     BtnVulcano(boton);
    //     break;
    //     case "BtnLittle":
    //     BtnLittle(boton);
    //     break;
    //     case "BtnFoxy":
    //     BtnFoxy(boton);
    //     break;
    //     case "BtnDark":
    //     BtnDark(boton);
    //     break;
    //     case "BtnPanther":
    //     BtnPanther(boton);
    //     break;
    //     default:
    //       console.log("Something went horribly wrong...");
    //     break;
    //   }
    //
    //
    //
    //
    //
    // });


  $(".sliderEstadisticas").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $( ".Header-Nav ul li a" ).click(function() {
    $( ".Header-Nav ul li a" ).removeClass("active");
    $( this ).addClass("active");
    $( ".menu-mobile-open" ).fadeOut(200);
  });


  // $( ".LinkVideo" ).click(function() {
  //     $( this ).addClass("activeVideo");
  //   });

  $('#play-video1').on('click', function(ev) {
    $( this ).addClass("activeVideo");
    $("#video1")[0].src += "&autoplay=1";
    ev.preventDefault();

  });

  $('#play-video2').on('click', function(ev) {
    $( this ).addClass("activeVideo");
    $("#video2")[0].src += "&autoplay=1";
    ev.preventDefault();

  });

  // $( ".BtnSweet" ).click(() => BtnSweet('BtnSweet'));
  // $( ".BtnGoldFish" ).click(() => BtnGoldFish('BtnGoldFish'));
  // $( ".BtnAlfred" ).click(() => BtnAlfred('BtnAlfred'));
  // $( ".BtnPiggy" ).click(() => BtnPiggy('BtnPiggy'));
  // $( ".BtnNess" ).click(() => BtnNess('BtnNess'));
  // $( ".BtnGarota" ).click(() => BtnGarota('BtnGarota'));
  // $( ".BtnSuperStar" ).click(() => BtnSuperStar('BtnSuperStar'));
  // $( ".BtnVulcano" ).click(() => BtnVulcano('BtnVulcano'));
  // $( ".BtnLittle" ).click(() => BtnLittle('BtnLittle'));
  // $( ".BtnFoxy" ).click(() => BtnFoxy('BtnFoxy'));
  // $( ".BtnDark" ).click(() => BtnDark('BtnDark'));
  // $( ".BtnPanther" ).click(() => BtnPanther('BtnPanther'));
  //
  //
  $( ".BtnSweet" ).click(function() {
    $( ".Cervezas-Img img" ).removeClass("animated zoomInUp");
    $( ".BotellaCerveza" ).removeClass("animated bounceInUp");
    $( ".Cervezas-Info" ).removeClass("animated fadeInUp");

    $( ".CervezaSweetherart .Cervezas-Img img" ).addClass("animated zoomInUp");
    $( ".CervezaSweetherart .BotellaCerveza" ).addClass("animated bounceInUp");
    $( ".CervezaSweetherart .Cervezas-Info" ).addClass("animated fadeInUp");

    $( ".slidernav div" ).removeClass("active");
    $( this ).addClass("active");
    $( ".Cervezas-Content" ).removeClass("CervezaActive");
    $( ".CervezaSweetherart" ).addClass("CervezaActive");

    $('.fadeCervezas').on('click','.slick-next', function(){
    $('.slidernav div').removeClass('active');
    });
  });

  $( ".BtnAlfred" ).click(function() {
    $( ".Cervezas-Img img" ).removeClass("animated zoomInUp");
    $( ".BotellaCerveza" ).removeClass("animated bounceInUp");
    $( ".Cervezas-Info" ).removeClass("animated fadeInUp");

    $( ".CervezaAlfred .Cervezas-Img img" ).addClass("animated zoomInUp");
    $( ".CervezaAlfred .BotellaCerveza" ).addClass("animated bounceInUp");
    $( ".CervezaAlfred .Cervezas-Info" ).addClass("animated fadeInUp");

    $( ".slidernav div" ).removeClass("active");
    $( this ).addClass("active");
    $( ".Cervezas-Content" ).removeClass("CervezaActive");
    $( ".CervezaAlfred" ).addClass("CervezaActive");

  });

  $( ".BtnPiggy" ).click(function() {
    $( ".Cervezas-Img img" ).removeClass("animated zoomInUp");
    $( ".BotellaCerveza" ).removeClass("animated bounceInUp");
    $( ".Cervezas-Info" ).removeClass("animated fadeInUp");

    $( ".CervezaPiggy .Cervezas-Img img" ).addClass("animated zoomInUp");
    $( ".CervezaPiggy .BotellaCerveza" ).addClass("animated bounceInUp");
    $( ".CervezaPiggy .Cervezas-Info" ).addClass("animated fadeInUp");

    $( ".slidernav div" ).removeClass("active");
    $( this ).addClass("active");
    $( ".Cervezas-Content" ).removeClass("CervezaActive");
    $( ".CervezaPiggy" ).addClass("CervezaActive");
  });

  $( ".BtnNess" ).click(function() {
    $( ".Cervezas-Img img" ).removeClass("animated zoomInUp");
    $( ".BotellaCerveza" ).removeClass("animated bounceInUp");
    $( ".Cervezas-Info" ).removeClass("animated fadeInUp");

    $( ".CervezaNess .Cervezas-Img img" ).addClass("animated zoomInUp");
    $( ".CervezaNess .BotellaCerveza" ).addClass("animated bounceInUp");
    $( ".CervezaNess .Cervezas-Info" ).addClass("animated fadeInUp");

    $( ".slidernav div" ).removeClass("active");
    $( this ).addClass("active");
    $( ".Cervezas-Content" ).removeClass("CervezaActive");
    $( ".CervezaNess" ).addClass("CervezaActive");
  });

  $( ".BtnGoldFish" ).click(function() {
    $( ".Cervezas-Img img" ).removeClass("animated zoomInUp");
    $( ".BotellaCerveza" ).removeClass("animated bounceInUp");
    $( ".Cervezas-Info" ).removeClass("animated fadeInUp");

    $( ".CervezaGoldFish .Cervezas-Img img" ).addClass("animated zoomInUp");
    $( ".CervezaGoldFish .BotellaCerveza" ).addClass("animated bounceInUp");
    $( ".CervezaGoldFish .Cervezas-Info" ).addClass("animated fadeInUp");

    $( ".slidernav div" ).removeClass("active");
    $( this ).addClass("active");
    $( ".Cervezas-Content" ).removeClass("CervezaActive");
    $( ".CervezaGoldFish" ).addClass("CervezaActive");
  });

  $( ".BtnGarota" ).click(function() {
    $( ".Cervezas-Img img" ).removeClass("animated zoomInUp");
    $( ".BotellaCerveza" ).removeClass("animated bounceInUp");
    $( ".Cervezas-Info" ).removeClass("animated fadeInUp");

    $( ".CervezaGarota .Cervezas-Img img" ).addClass("animated zoomInUp");
    $( ".CervezaGarota .BotellaCerveza" ).addClass("animated bounceInUp");
    $( ".CervezaGarota .Cervezas-Info" ).addClass("animated fadeInUp");

    $( ".slidernav div" ).removeClass("active");
    $( this ).addClass("active");
    $( ".Cervezas-Content" ).removeClass("CervezaActive");
    $( ".CervezaGarota" ).addClass("CervezaActive");
  });

  $( ".BtnSuperStar" ).click(function() {
    $( ".Cervezas-Img img" ).removeClass("animated zoomInUp");
    $( ".BotellaCerveza" ).removeClass("animated bounceInUp");
    $( ".Cervezas-Info" ).removeClass("animated fadeInUp");

    $( ".CervezaSuperStar .Cervezas-Img img" ).addClass("animated zoomInUp");
    $( ".CervezaSuperStar .BotellaCerveza" ).addClass("animated bounceInUp");
    $( ".CervezaSuperStar .Cervezas-Info" ).addClass("animated fadeInUp");

    $( ".slidernav div" ).removeClass("active");
    $( this ).addClass("active");
    $( ".Cervezas-Content" ).removeClass("CervezaActive");
    $( ".CervezaSuperStar" ).addClass("CervezaActive");
  });

  $( ".BtnVulcano" ).click(function() {
    $( ".Cervezas-Img img" ).removeClass("animated zoomInUp");
    $( ".BotellaCerveza" ).removeClass("animated bounceInUp");
    $( ".Cervezas-Info" ).removeClass("animated fadeInUp");

    $( ".CervezaVulcano .Cervezas-Img img" ).addClass("animated zoomInUp");
    $( ".CervezaVulcano .BotellaCerveza" ).addClass("animated bounceInUp");
    $( ".CervezaVulcano .Cervezas-Info" ).addClass("animated fadeInUp");

    $( ".slidernav div" ).removeClass("active");
    $( this ).addClass("active");
    $( ".Cervezas-Content" ).removeClass("CervezaActive");
    $( ".CervezaVulcano" ).addClass("CervezaActive");
  });

  $( ".BtnLittle" ).click(function() {
    $( ".Cervezas-Img img" ).removeClass("animated zoomInUp");
    $( ".BotellaCerveza" ).removeClass("animated bounceInUp");
    $( ".Cervezas-Info" ).removeClass("animated fadeInUp");

    $( ".CervezaLittle .Cervezas-Img img" ).addClass("animated zoomInUp");
    $( ".CervezaLittle .BotellaCerveza" ).addClass("animated bounceInUp");
    $( ".CervezaLittle .Cervezas-Info" ).addClass("animated fadeInUp");

    $( ".slidernav div" ).removeClass("active");
    $( this ).addClass("active");
    $( ".Cervezas-Content" ).removeClass("CervezaActive");
    $( ".CervezaLittle" ).addClass("CervezaActive");
  });

  $( ".BtnFoxy" ).click(function() {
    $( ".Cervezas-Img img" ).removeClass("animated zoomInUp");
    $( ".BotellaCerveza" ).removeClass("animated bounceInUp");
    $( ".Cervezas-Info" ).removeClass("animated fadeInUp");

    $( ".CervezaFoxy .Cervezas-Img img" ).addClass("animated zoomInUp");
    $( ".CervezaFoxy .BotellaCerveza" ).addClass("animated bounceInUp");
    $( ".CervezaFoxy .Cervezas-Info" ).addClass("animated fadeInUp");

    $( ".slidernav div" ).removeClass("active");
    $( this ).addClass("active");
    $( ".Cervezas-Content" ).removeClass("CervezaActive");
    $( ".CervezaFoxy" ).addClass("CervezaActive");
  });

  $( ".BtnDark" ).click(function() {
    $( ".Cervezas-Img img" ).removeClass("animated zoomInUp");
    $( ".BotellaCerveza" ).removeClass("animated bounceInUp");
    $( ".Cervezas-Info" ).removeClass("animated fadeInUp");

    $( ".CervezaDark .Cervezas-Img img" ).addClass("animated zoomInUp");
    $( ".CervezaDark .BotellaCerveza" ).addClass("animated bounceInUp");
    $( ".CervezaDark .Cervezas-Info" ).addClass("animated fadeInUp");

    $( ".slidernav div" ).removeClass("active");
    $( this ).addClass("active");
    $( ".Cervezas-Content" ).removeClass("CervezaActive");
    $( ".CervezaDark" ).addClass("CervezaActive");
  });

  $( ".BtnPanther" ).click(function() {
    $( ".Cervezas-Img img" ).removeClass("animated zoomInUp");
    $( ".BotellaCerveza" ).removeClass("animated bounceInUp");
    $( ".Cervezas-Info" ).removeClass("animated fadeInUp");

    $( ".CervezaPanter .Cervezas-Img img" ).addClass("animated zoomInUp");
    $( ".CervezaPanter .BotellaCerveza" ).addClass("animated bounceInUp");
    $( ".CervezaPanter .Cervezas-Info" ).addClass("animated fadeInUp");

    $( ".slidernav div" ).removeClass("active");
    $( this ).addClass("active");
    $( ".Cervezas-Content" ).removeClass("CervezaActive");
    $( ".CervezaPanter" ).addClass("CervezaActive");
  });



  $( ".icon-menu-mobile" ).click(function() {
    $( ".MenuMobPrincipal" ).fadeIn(300);
  });

  $(".cierra-menu").click(function() {
    $( ".menu-mobile-open" ).fadeOut(200);
  });

  $("#Cerrar-Notificacion").click(function() {
    $( ".Aviso-Notificacion" ).fadeOut(200);
  });

  $(".cierra-mobile-cerveza").click(function() {
    $( ".menu-mobile-open" ).fadeOut(200);
  });

  $( ".BtnCervezaSweetherart" ).click(function() {
    $( ".ContentCervezaSweetherart" ).fadeIn(300);
  });

  $( ".BtnCervezaGoldfish" ).click(function() {
    $( ".ContentCervezaGoldfish" ).fadeIn(300);
  });

  $( ".BtnCervezaAlfred" ).click(function() {
    $( ".ContentCervezaAlfred" ).fadeIn(300);
  });

  $( ".BtnCervezaPiggy" ).click(function() {
    $( ".ContentCervezaPiggy" ).fadeIn(300);
  });

  $( ".BtnCervezaNess" ).click(function() {
    $( ".ContentCervezaNess" ).fadeIn(300);
  });

  $( ".BtnCervezaGarota" ).click(function() {
    $( ".ContentCervezaGarota" ).fadeIn(300);
  });

  $( ".BtnCervezaSuperStar" ).click(function() {
    $( ".ContentCervezaSuperStar" ).fadeIn(300);
  });

  $( ".BtnCervezaVulcano" ).click(function() {
    $( ".ContentCervezaVulcano" ).fadeIn(300);
  });

  $( ".BtnCervezaLittle" ).click(function() {
    $( ".ContentCervezaLittle" ).fadeIn(300);
  });

  $( ".BtnCervezaFoxy" ).click(function() {
    $( ".ContentCervezaFoxy" ).fadeIn(300);
  });

  $( ".BtnCervezaDarkVader" ).click(function() {
    $( ".ContentCervezaDarkVader" ).fadeIn(300);
  });

  $( ".BtnCervezaPanther" ).click(function() {
    $( ".ContentCervezaPanther" ).fadeIn(300);
  });


  $('.trigger').click(function() {
    $('.formu').toggleClass('close');
  });

  $('#servir').click(function() {
    $('#form').toggleClass('openform');
  });

});
