/*----------------------------------------------------------------------------------

								 Project Meteor
								    main.js
						      Written in : jQuery

               I've not commented on the code much. It's just jQuery.
   I had to spend much time on animation. At first I thought of keeping it simple,
            then I decided not to. Cause, who loves simple shit anyways.
			
								  ¯\_(ツ)_/¯

----------------------------------------------------------------------------------*/




$(document).ready(function(){
	
	//toggling state of returnDate based on radio button selection
	
	$('input[name="flightType"]').change(function(){
	
		if($(this).val()==='One Way'){
			$('#datetime2').attr('disabled',"true");
		}
		
		else{
			$('#datetime2').removeAttr('disabled');
		}
		
	});
	
	
	//restrict selection of an element as destination in case the same element is selected as origin
	
	//FLIGHTS
	
	 $('#origin').change(function(){
        var airportOrigin=$(this).val();
        $("li a").removeClass("disabled");
        $("li a:contains('"+ airportOrigin + "')").attr("disabled",true);
				$("li a:contains('"+ airportOrigin + "')").addClass("disabled");
    });
	
	//TRAINS
	
	 $('#originTrain').change(function(){
        var stationOrigin=$(this).val();
        $("li a").removeClass("disabled");
        $("li a:contains('"+ stationOrigin + "')").attr("disabled",true);
				$("li a:contains('"+ stationOrigin + "')").addClass("disabled");
    });
	
	 $('#originBus').change(function(){
        var cityOrigin=$(this).val();
        $("li a").removeClass("disabled");
        $("li a:contains('"+ cityOrigin + "')").attr("disabled",true);
				$("li a:contains('"+ cityOrigin + "')").addClass("disabled");
    });
	
	//change action of search flights button based on radio button selection
	
    $('input[name="flightType"]').change(function(){
	
		if($(this).val()==='One Way'){
			document.flightSearch.action="oneWayFlightSearch.php";
		}
		
		else{
			document.flightSearch.action="returnTripOutboundFlightSearch.php";
		}
		
	}); 
	
	/*var var1=document.getElementById("radio1");
     var var2=document.getElementById("radio2");
     if(var1.checked===true)
     {
        document.myform.action="immediate.php";
     }
     else
     {
        document.myform.action="Scheduled.php";
     }*/
	
	
	//$('#r1').css("visibility", "hidden");
	$('#r1').css("visibility", "hidden");
	$('#r2').css("visibility", "hidden");
	$('#r3').css("visibility", "hidden");
	$('#r4').css("visibility", "hidden");
	$('#searchHotel').css("height", "16.5em");
	$('#searchHotelButton').css("top", "-4.8em");
	
	$('#rooms').change(function(){
		var noOfRooms=$(this).val();
		
		$('#searchHotel').css("height", "22.8em");
		
		
		//$('.drop1').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
		
		$('#r1').css("visibility", "visible");
		$('#r1').css("opacity", "0");
		
		$('#r2').css("visibility", "visible");
		$('#r2').css("opacity", "0");
		
		$('#r3').css("visibility", "visible");
		$('#r3').css("opacity", "0");
		
		$('#r4').css("visibility", "visible");
		$('#r4').css("opacity", "0");
		
		
		
		//$('#r1').css("visibility", "visible");
		
		//delaying the button animation
		
		var buttonDelay=function(){
				$('#searchHotelButton').css("top", "+0em");
			};
		
		setTimeout(buttonDelay,500);
		
		/*var inputDelay=function(){
				$('#r1').css("visibility", "visible");
			};
		
		setTimeout(inputDelay,1500);*/
		
		var fadeInInput=function(){
				//$('#r1').css({opacity: 0}).animate({opacity: 1.0});
			
			if(noOfRooms==="1"){
				$('#r1').css({opacity: 0}).fadeTo(500, 1);
				$('#room1').attr('required',"");
				$('#room2').removeAttr('required');
				$('#room3').removeAttr('required');
				$('#room4').removeAttr('required');
			}
			
			if(noOfRooms==="2"){
				$('#r1').css({opacity: 0}).fadeTo(500, 1);
				$('#r2').css({opacity: 0}).fadeTo(500, 1);
				$('#room1').attr('required',"");
				$('#room2').attr('required',"");
				$('#room3').removeAttr('required');
				$('#room4').removeAttr('required');
			}
			
			if(noOfRooms==="3"){
				$('#r1').css({opacity: 0}).fadeTo(500, 1);
				$('#r2').css({opacity: 0}).fadeTo(500, 1);
				$('#r3').css({opacity: 0}).fadeTo(500, 1);
				$('#room1').attr('required',"");
				$('#room2').attr('required',"");
				$('#room3').attr('required',"");
				$('#room4').removeAttr('required');
			}
			
			if(noOfRooms==="4"){
				$('#r1').css({opacity: 0}).fadeTo(500, 1);
				$('#r2').css({opacity: 0}).fadeTo(500, 1);
				$('#r3').css({opacity: 0}).fadeTo(500, 1);
				$('#r4').css({opacity: 0}).fadeTo(500, 1);
				$('#room1').attr('required',"");
				$('#room2').attr('required',"");
				$('#room3').attr('required',"");
				$('#room4').attr('required',"");
			}
			
			};
		
		setTimeout(fadeInInput,1200);
		
		
	});	
	
}); //document ready()