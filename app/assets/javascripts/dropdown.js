/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
$( document ).ready(function() {
	$(".dropdown").each(function( i ) {
	    $(this).find(".dropbtn").click(function() {
 			$( this ).parent().find(".dropdown-content").toggle("show");
		});
	    $(this).find(".dropdown-content .close").click(function() {
 			$( this ).parent().hide();
	    });
	});
});

$(document).ready(function(){    
    $('li').on('click', function(e) {           
        $(".dropdown > li").addClass('dontshow');            
    });  
});


$(document).ready(function(){    
    $(".close").on('click', function(e){
      $(".dropdown > li").removeClass("dontshow");
  });  
});
