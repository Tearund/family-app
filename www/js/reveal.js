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