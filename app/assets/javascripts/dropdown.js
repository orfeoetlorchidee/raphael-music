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

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

