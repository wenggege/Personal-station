$(function(){
	var num=0
	var timer=null
	/*$('.doc').css({top:-100+'%'})*/
	$('.page01').removeClass('no')
	$('.gps li').click(function(e) {
        $(this).addClass('current').siblings().removeClass()
		var index=$(this).index()
		$('.doc').stop().animate({top:-100*index+'%'})
		num=index
		$('.doc>div').eq(index).removeClass('no').siblings().addClass('no')
		$('.nav ul li').eq(index).addClass('current2').siblings().removeClass()
    });
	$('.nav ul li').click(function(e) {
		$(this).addClass('current2').siblings().removeClass()
        var index=$(this).index()
		$('.doc').stop().animate({top:-100*index+'%'})
		num=index
		$('.gps li').eq(num).addClass('current').siblings().removeClass()
		$('.doc>div').eq(index).removeClass('no').siblings().addClass('no')
    });
	
	$(document).mousewheel(function(e,d){
		clearTimeout(timer)
		timer=setTimeout(function(){
			num-=d
			if(num>6){num=6}
			if(num<0){num=0}
			$('.gps li').eq(num).addClass('current').siblings().removeClass()
			$('.doc').animate({top:-100*num+'%'})
			$('.doc>div').eq(num).removeClass('no').siblings().addClass('no')
			$('.nav ul li').eq(num).addClass('current2').siblings().removeClass()
		},300)
	})
})

/**login */
$(function(){
var uname=sessionStorage.getItem("uname");
//console.log(uname);
if(uname){
var t=$(".login a").html(uname);
}
})

/* music */
$(function(){
	$('.music span:nth-child(1)').click(function(e) {
		$('.music audio').get(0).pause();
		$(this).css('display','none');
		$('.music span:nth-child(2)').css('display','block');
	});
	$('.music span:nth-child(2)').click(function(e) {
		$('.music audio').get(0).play();
		$(this).css('display','none');
		$('.music span:nth-child(1)').css('display','block');
	});
})

/* page02 */

$(function(){
	$('.page02 .ps').radialIndicator({
		barColor: '#f60',
		barWidth: 7,
		initValue: 0,
		roundCorner : true,
		percentage: true,
		radius : 40,
		barBgColor : '#fff',
		roundCorner : true,
		percentage : true,
    });

	var ps = $('.ps').data('radialIndicator');
	
	$('.page02 .ps').hover(function(e) {
		ps.animate(88);
    },function(){	
		ps.animate(0);
	});
	$('.page02 .dw').radialIndicator({
		barColor: '#f60',
		barWidth: 7,
		initValue: 0,
		roundCorner : true,
		percentage: true,
		radius : 40,
		barBgColor : '#fff',
		roundCorner : true,
		percentage : true,
    });

	var dw = $('.dw').data('radialIndicator');
	
	$('.page02 .dw').hover(function(e) {
		dw.animate(90);
    },function(){	
		dw.animate(0);
	});
	$('.page02 .fw').radialIndicator({
		barColor: '#f60',
		barWidth: 7,
		initValue: 0,
		roundCorner : true,
		percentage: true,
		radius : 40,
		barBgColor : '#fff',
		roundCorner : true,
		percentage : true,
    });

	var fw = $('.fw').data('radialIndicator');
	
	$('.page02 .fw').hover(function(e) {
		fw.animate(80);
    },function(){	
		fw.animate(0);
	});
	$('.page02 .ai').radialIndicator({
		barColor: '#f60',
		barWidth: 7,
		initValue: 0,
		roundCorner : true,
		percentage: true,
		radius : 40,
		barBgColor : '#fff',
		roundCorner : true,
		percentage : true,
    });

	var ai = $('.ai').data('radialIndicator');
	
	$('.page02 .ai').hover(function(e) {
		ai.animate(75);
    },function(){	
		ai.animate(0);
	});
	$('.page02 .ax').radialIndicator({
		barColor: '#f60',
		barWidth: 7,
		initValue: 0,
		roundCorner : true,
		percentage: true,
		radius : 40,
		barBgColor : '#fff',
		roundCorner : true,
		percentage : true,
    });

	var ax = $('.ax').data('radialIndicator');
	
	$('.page02 .ax').hover(function(e) {
		ax.animate(70);
    },function(){	
		ax.animate(0);
	});
})

/* page03 */
$(function(){
	var num=0;
	var timer=null;
	timer=setInterval(sport,30)
	function sport(){
		num-=3;
		if(num<-1760){num=0}
		$('.page03 .icon').css({left:num})	
	}
	$('.icon li').hover(function(e) {
        clearInterval(timer)
		$(this).siblings().stop().fadeTo(300,0.3)
    },function(){
		$('.icon li').fadeTo(300,1)
		timer=setInterval(sport,30)
	});
})

/* page04 */
$(function(){
	$('.page04 article').hover(function(e) {
		$(this).siblings().stop().fadeTo(300,0.3)
        $(this).children().children().attr('src','images/0'+($(this).index()+1)+'.png')
    },function(){
		$(this).siblings().stop().fadeTo(300,1)
        $(this).children().children().attr('src','images/00'+($(this).index()+1)+'.png')
	});
})

/* page06 */
$(function(){
	(function(){
		var shijian = 500;
		var jiangeshijian = 1500;   
		var nowimg = 2;
		var lock = false;
		var mytimer = 0;
	
		var s0 = {"width":248, "height":131, "top":100, "left": -62,"opacity":0}
		var s1 = {"width":493, "height":224, "top":44,  "left": 53,"opacity":1}
		var s2 = {"width":639, "height":270, "top":21,  "left": 186,"opacity":1}
		var s3 = {"width":493, "height":224, "top":44,  "left": 459,"opacity":1}
		var s4 = {"width":248, "height":131, "top":100, "left": 793,"opacity":0}
	
		 zidong();
		 function zidong(){
			 window.clearInterval(mytimer);
			 mytimer = window.setInterval(
				 function(){
					 $(".rightbut").trigger("click");
				 }
			 ,jiangeshijian);
		 }
	
		 $(".youku").mouseenter(
			 function(){
				 window.clearInterval(mytimer);
			 }
		 );
	
		 $(".youku").mouseleave(zidong);
	
		 $(".rightbut").click(
			 function(){
				 if(!$(".images ul li").is(":animated") || lock){
					 
					 if(nowimg < $(".images ul li").length - 1){
						 nowimg = nowimg + 1;
					 }else{
						 nowimg = 0;
					 }
					
					 $(".xiaoyuandian ul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
	
					 
					 $(".no1").animate(s0,shijian);
					 $(".no2").animate(s1,shijian);
					 $(".no3").animate(s2,shijian);
					 $(".no4").animate(s3,shijian);
					 $(".no0").css(s4);
	
					
					 $(".no3 .zhezhao").animate(
						 {
							 "opacity":0
						 },shijian
					 );
					
					 $(".no2 .zhezhao").animate(
						 {
							 "opacity":0.6
						 },shijian
					 );
	
					 
					 $(".no0").attr("class","denghou");
					 $(".no1").attr("class","no0");
					 $(".no2").attr("class","no1");
					 $(".no3").attr("class","no2");
					 $(".no4").attr("class","no3");
	
					
					 if($(".no3").next().length != 0){
						 $(".no3").next().attr("class","no4");
					 }else{
						 $(".images ul li:first").attr("class","no4");
					 }
					 
					 $(".no4").css(s4);                  
				 }
			 }
		 );
	
		 $(".leftbut").click(
			 function(){
				 if(!$(".images ul li").is(":animated") || lock){
					 
					 if(nowimg > 0){
						 nowimg = nowimg - 1;
					 }else{
						 nowimg = $(".images ul li").length - 1;
					 }
					 
					 $(".xiaoyuandian ul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
	
					 $(".no0").animate(s1,shijian);
					 $(".no1").animate(s2,shijian);
					 $(".no2").animate(s3,shijian);
					 $(".no3").animate(s4,shijian);
					 $(".no4").css(s0);
	
					 
					 $(".no1 .zhezhao").animate(
						 {
							 "opacity":0
						 },shijian
					 );
					 
					 $(".no2 .zhezhao").animate(
						 {
							 "opacity":0.6
						 },shijian
					 );
	
					 $(".no4").attr("class","denghou");
					 $(".no3").attr("class","no4");
					 $(".no2").attr("class","no3");
					 $(".no1").attr("class","no2");
					 $(".no0").attr("class","no1");
					 if($(".no1").prev().length != 0){
						 $(".no1").prev().attr("class","no0");
					 }else{
						 $(".images li:last").attr("class","no0");
					 }
					 $(".no0").css(s0);
				 }
			 }
		 );
	
		 $(".xiaoyuandian ul li").click(
			 function(){
				 
				 lock = true;
	
				 shijian = 100;
	
				 
				 if($(this).index() > nowimg){
					 var cishu = $(this).index() - nowimg;
					 for(var i = 1 ; i <= cishu ; i = i + 1){
						 $(".rightbut").trigger("click");
					 }
				 }else{
					 var cishu = nowimg - $(this).index();
					 for(var i = 1 ; i <= cishu ; i = i + 1){
						 $(".leftbut").trigger("click");
					 }
				 }
	
				
				 lock = false;
				 shijian = 500;
				 nowimg = $(this).index();
				 
				 $(".xiaoyuandian ul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
			 }
		 );
	})();
})
