$(document).ready(function(){
	
/*右边状态栏*/	
	
		$(".h_user_right a").hover(function(){
			$(this).children(".A2").css({"display":"block"});
			
		},
			function(){
				$(this).children(".A2").css({"display":"none"});
			}
		)
	
/*右边状态栏*/	
	$(".selected_01_center a").hover(function(){
			$(this).children("span").show();
		},function(){
			$(this).children("span").hide();
		}
	)
		
/*右边状态栏*/
	$(".h_user_right_top01").hover(function(){
			$(this).children(".user_hide_01").css({"display":"block"});
			
		},function(){
			$(this).children(".user_hide_01").css({"display":"none"});
		}				
	)			
			/*-----------------回到顶部--------------*/
			$(".user_hide04").click(function(){
				window.onscroll=function(){
						var onscrollT = document.body.scrollTop || document.documentElement.scrollTop;
					}
					
					var oTime=	setInterval(function(){
							var onscrollT = document.body.scrollTop || document.documentElement.scrollTop;
							if(onscrollT == 0){
								clearInterval(oTime);
							}else{
								window.scrollBy(0,-20);
							}
						},10)
			})
	


})