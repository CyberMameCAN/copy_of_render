/*$(function() {
    var nav = $('#nav');
    //表示位置
    var navTop = nav.offset().top+50;
    //ナビゲーションの高さ（シャドウの分だけ足してます）
    var navHeight = nav.height()+0;
    var showFlag = false;
    nav.css('top', -navHeight+'px');
    //ナビゲーションの位置まできたら表示
    $(window).scroll(function () {
        var winTop = $(this).scrollTop();
        if (winTop >= navTop) {
            if (showFlag == false) {
                showFlag = true;
                nav
                    .addClass('fixed')
                    .stop().animate({'top' : '0px'}, 200);
            }
        } else if (winTop <= navTop) {
            if (showFlag) {
                showFlag = false;
                nav.stop().animate({'top' : -navHeight+'px'}, 200, function(){
                    nav.removeClass('fixed');
                });
            }
        }
    });
});*/


;(function () {
	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};
	
  var navFix = function() {
	  	$('#nav').waypoint( function() {  
		    $('body #nav').removeClass('nav_init')
  		  $('body #nav').addClass('nav_fix')
	    }, { offset: 0 } );
	  	$('#nav').waypoint( function() {  
  		  $('body #nav').removeClass('nav_fix')
		    $('body #nav').addClass('nav_init')
	    }, { offset: 1 } );
  };

	// Document on load.
	$(function(){

		contentWayPoint();
		navFix();

	});


}());