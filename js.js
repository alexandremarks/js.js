// JavaScript Document

//Referências
//http://learn.jquery.com/using-jquery-core/document-ready/

$( document ).ready(function() {
    $(".shopping").css({ opacity: 0.5 });
	
	$('.centro').click(function (e) {
			$('.centro').css({ opacity: 1 });
			$('.shopping').css({ opacity: 0.5 });
            $('.unidade2').hide();
			$('.unidade1').fadeIn();
        });
		
	$('.shopping').click(function (e) {
			$('.shopping').css({ opacity: 1 });
			$('.centro').css({ opacity: 0.5 });
            $('.unidade1').hide();
			$('.unidade2').fadeIn();
        });
});