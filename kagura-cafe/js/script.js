/* -------------------------------------
					bxSlider
	------------------------------------- */
$(function(){
	 $('.bxslider').bxSlider({
    mode: 'fade',
    auto: true,
    speed: 3000,
    pause: 6000,
    touchEnabled: false,
    controls: false,
    pager: false,
		preventDefaultSwipeY: true
	});
});

/* -------------------------------------
        	archive
	------------------------------------- */
$(function(){
	$('#monthly a.btn').click(function(){
		var mHead = $(this).parent('li'),
			mList = $(this).next('dl');
		if(mList.css('display') == 'none'){
			mHead.addClass('open');
			mList.show();
		}else{
			mHead.removeClass('open');
			mList.hide();
		}
	});
});
