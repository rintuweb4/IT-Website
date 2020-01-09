
// wow

new WOW().init();





//navbar-toggle x icon....

$(document).ready(function () {
			  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
			  });
		});



 //button up

	$(document).ready(function(){
 var btnUp = $('<div/>', {'class':'btntoTop'});
    btnUp.appendTo('body');
    $(document)
        .on('click', '.btntoTop', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 700);
        });

    $(window)
        .on('scroll', function() {
            if ($(this).scrollTop() > 200)
                $('.btntoTop').addClass('active');
            else
                $('.btntoTop').removeClass('active');
        });
        });



   //tooltip
   
 $(function(){
   
   $('[data-toggle="tooltip"]').tooltip();
   
   })
   

