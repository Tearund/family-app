// $('.reveal').bind('touchstart click', function(){
//   alert('clicked');
// });

// $(':mobile-pagecontainer').on( "pagecontainershow", function( event ) {
// 	alert('changed');
// } )

$(':mobile-pagecontainer').on('click', '.reveal', function() {
	alert('test');
});


function reveal(element){
	console.log(element);
	//element.hide();
	console.log(element.data('id'));
	element.css('background-image','url("../../img/reveal/'+element.data("id")+'-revealed.png")');
}

$(document).on("pageshow",function(event,data){
  $('.reveal').bind('tap', function(){
  		//alert($(this));
	  reveal($(this));
	});
});

$(document).on("pageshow",function(event,data){
  $('.tooltip-parent').bind('tap', function(){
  		$('.tooltip--'+$(this).data('id')).show();
	});
});

$(document).on("pageshow",function(event,data){
  $('.bird').bind('tap', function(){
  		var element = $(this);
  		var timer = 500;
		$(this).css('background-image','url("../../img/story1/'+element.data('id')+'-fly.png")');
		//$(this).hide().delay(400).sh
		setTimeout(function(){
			console.log(element);
			element.css('background-image','url("../../img/story1/'+element.data('id')+'.png")'); 
		}, timer, element);
		setTimeout(function(){
			console.log(element);
			element.css('background-image','url("../../img/story1/'+element.data('id')+'-fly.png")'); 
		}, timer*2, element);
		setTimeout(function(){
			console.log(element);
			element.css('background-image','url("../../img/story1/'+element.data('id')+'.png")'); 
		}, timer*3, element);
		setTimeout(function(){
			console.log(element);
			element.css('background-image','url("../../img/story1/'+element.data('id')+'-fly.png")'); 
		}, timer*4, element);
		setTimeout(function(){
			console.log(element);
			element.css('background-image','url("../../img/story1/'+element.data('id')+'.png")'); 
		}, timer*5, element);
		setTimeout(function(){
			console.log(element);
			element.css('background-image','url("../../img/story1/'+element.data('id')+'-fly.png")'); 
		}, timer*6, element);
		setTimeout(function(){
			console.log(element);
			element.css('background-image','url("../../img/story1/'+element.data('id')+'.png")'); 
		}, timer*7, element);
	});
});

// function tooltip(element){
// 	console.log($('.tooltip--'+element));
// 	$('.tooltip--'+element).show();
// }