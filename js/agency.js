/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
 
$(document).load(function(){
	
	// Init
    //var $anchor = $(this);
    var initanchor = location.hash;
    console.log( $(initanchor).offset().top );
     
    if( $(initanchor).offset() ){    
	    $('html, body').stop().animate({
	        scrollTop: $(initanchor).offset().top
	    }, 0, 'easeInOutExpo');
	}
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	
	// Click
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        console.log( $($anchor.attr('href')).offset().top );
        
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});