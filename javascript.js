$(function() {

	setInterval(function () {
		var current = $(".current");
		var next = parseInt(current.attr('id').substring(9, 10)) + 1;
		if (next < 5) {
		var following = $("#headSlide" + next);
		} else {
			var following = $("#headSlide1");
		}
		current.addClass("invisible").removeClass("current");
		following.addClass("current");
		var dot = $(".activeDot");
		dot.removeClass("activeDot");
		if (next < 5) {
			$("#dot" + next).addClass("activeDot");
		} else {
			$("#dot1").addClass("activeDot");
		}
    }, 7000);

	$(".dot").click(function(evt) {
	  	$(".activeDot").removeClass("activeDot");
	  	$(this).addClass("activeDot");
	  	var idDot = $(".current").attr("id");
		$("#" + idDot).removeClass("current");
		$("#" + idDot).addClass("invisible");
		var numer = "#headSlide" + $(this).attr("id").substring(3,4);
		var x = "#" + $(numer).attr("id");
		$(x).removeClass("invisible").addClass("current");
	});

	$(".butTeam").click(function(evt) {
		var lewy = $("#prev");
		var prawy = $("#next");
		
		if ( $("#prev").css('visibility') == 'hidden') {
			$("#prev").css("visibility", "visible");			
		}
		if ($(this).attr("id") == "prev") {
			var enlargeNext = parseInt($(".big").attr("id").substring(4,5)) - 1;
			$(".big").removeClass("big");
			$("#team" + enlargeNext).addClass("big");
		} else {
			var enlargeNext = parseInt($(".big").attr("id").substring(4,5)) + 1;
			$(".big").removeClass("big");
			$("#team" + enlargeNext).addClass("big");
		}
		var bigOne = $(".big").attr("id").substring(4,5);
		if (bigOne == 1) {
			$("#prev").css("visibility", "hidden");
		}
		var tekst = "#q" + bigOne;
		$(".aktualny").addClass("invisible");
		$(tekst).addClass("aktualny");
		$(tekst).removeClass("invisible");
	});

		
	$("#menuHide").click(function(evt) {
		$('#navigation').toggleClass('opeNav');
	});

	$(".toggleMenu").click(function(evt) {
		$("#navigation").toggleClass('opeNav');
	});

});