function onDeviceReady() {
  directToHome();
}

function goToStory(id){
  $(':mobile-pagecontainer').pagecontainer('change', 'stories/'+id+'/page1.html', {
        //  beforeshow: function( event, ui ) {alert('test')}
        transition: 'fade',
        changeHash: true,
        reverse: false,
        showLoadMsg: true,
        reload: true,
        show: function( event, ui ) {
          alert('show');
          $('.reveal').bind('touchstart click', function(){
            alert('clicked');
          });
        }
    });
}

function directToHome(){
	$(':mobile-pagecontainer').pagecontainer('change', 'home.html', {
        //  beforeshow: function( event, ui ) {alert('test')}
        transition: 'fade',
        changeHash: true,
        reverse: false,
        showLoadMsg: true,
        reload: true
    });
}

// function goToStory(id){
// 	// $(':mobile-pagecontainer').pagecontainer('change', 'story.html', {
//  //        //  beforeshow: function( event, ui ) {alert('test')}
//  //        transition: 'fade',
//  //        changeHash: true,
//  //        reverse: false,
//  //        showLoadMsg: true,
//  //        reload: true,
//  //        id: id
//  //    });

// 	var url = "http://localhost:8888/tf-stories-wp/wp-json/wp/v2/posts/"+id;
//     console.log(url);
//     $.getJSON(url, function(result){
//     	console.log(result['_jc_stories']);
//     	$('.story-title').append(result['title']['rendered']);
//     	var page = 1;
//         $.each(result['_jc_stories'], function(i, field){
//         	console.log(field);
//             var html;
//             html = "<div data-role='page' id='page-" + page +"' class='page page-" + page +"' style='background-image: url(" + field['page_image'] + ")'>";
//                 html += "<div class='page-content'>" + field['page_text'];
//                 	html += "<a href='#' onclick='nextPage(" + page + ")' class='next-page'>Next page</a>";
//                 html += "</div>";
//             html += "</div>";
//             page++;
//             $('body').append(html)
//         });
//         $(':mobile-pagecontainer').pagecontainer('change', '#page-1', {
// 	       //  beforeshow: function( event, ui ) {alert('test')}
// 	       transition: 'flip',
// 	       changeHash: true,
// 	       reverse: false,
// 	       showLoadMsg: true,
// 	       reload: true,
// 	   });
//     });
// }

$(document).on("pageshow",function(event,data){
  $('.next-page').bind('tap', function(){
      //alert($(this));
      nextPage($(this).data('story'), $(this).data('page'));
  });
});

function nextPage(story, page){
	page++;
	$(':mobile-pagecontainer').pagecontainer('change', 'page'+page+'.html', {
       //  beforeshow: function( event, ui ) {alert('test')}
       transition: 'flip',
       changeHash: true,
       reverse: false,
       showLoadMsg: true,
       reload: true,
   });
}

// $(document).on("pagebeforechange", function (e, data) {
//     if (data.toPage[0].id == "story") {
//         var id = data.options.id;
//         //showStuff("#p2", stuff);
//         var url = "http://localhost:8888/tf-stories-wp/wp-json/wp/v2/posts/"+id;
//         console.log(url);
//         $.getJSON(url, function(result){
//         	console.log(result['_jc_stories']);
//         	$('.story-title').append(result['title']['rendered']);
//         	var page = 1;
//             $.each(result['_jc_stories'], function(i, field){
//                 var html;
//                 html = "<div class='page page-" + page +"' style='background-image: url(" + field['page_image'] + ")'>";
// 	                html += "<div class='page-content'>" + field['page_text'] + "</div>";
// 	            html += "</div>";
// 	            page++;
//                 $('.story').append(html)
//             });
//         });
//     }
// });