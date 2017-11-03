
jQuery(document).ready(function() {  
  jQuery("#subscribe-btn").click(function() {

  	var email= $("#email").val();
    alert(email+" "+"has been successfully added to our list of subscribers.Thank you!");
    });
	$("#show-hide").click(function(event){
		event.preventDefault();
		// $(".showing").fadeIn();
		// $(".showing").fadeOut();
		// $(".showing").fadeToggle();
		$(".showing").slideToggle();
		$("body").removeClass();
		$("body").addClass("background-color");
	});
});
    