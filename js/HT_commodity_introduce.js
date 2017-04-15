$(document).ready(function(){
	/*二级菜单*/
	var nUl = document.getElementById("commdy_nul");
	var aLi = nUl.getElementsByTagName("li");
	var nDiv = document.getElementById("commdy_div01");
	var nUl01 = nDiv.getElementsByTagName("ul");
	for(var a = 0;a<aLi.length;a++){
		aLi[a].index = a;
		aLi[a].onmouseover=function(){
			for(var a =0;a<aLi.length;a++){
				nUl01[a].style.display="none";
			}
			nUl01[this.index].style.display="block";
		}
	}
	/*二级菜单上的点击显示或隐藏*/
	$(".commdy_menu_bar_left01 a").hover(function(){
			$(this).addClass("La").parent().siblings().children("a").removeClass("La");
		})
	var b= true;
	$("#A1").click(function(){
		$(".commdy_menu_bar_left01 li").eq(0).children(0).addClass("La").parent().siblings().children("a").removeClass("La");
		if(b==true){
			b=false;
			$(".commdy_menu_bar_right").css({"display":"block"});
			
			$(this).css({"background":"url(../images/T.gif) no-repeat"});
		}else if(b==false){
			b=true;
			$(".commdy_menu_bar_right").css({"display":"none"});
			$(this).css({"background":"url(../images/img100.png) no-repeat"});
		}
	})
/*--------------点击小图片让大图切换------------------------------*/	
	app($(".introduce_center_left_b li"),$(".introduce_center_left_02 .big_img"));
	add($(".share_w"),$(".wx"));
/*--------------------------------封装函数---------------------------------*/
function add(boy,box){
	$(boy).hover(function(){
			$(box).css({"display":"block"})
		},function(){
			$(box).css({"display":"none"})
		})
	}
	function app(boy,box){
		$(boy).hover(function(){
			var $index=$(this).index();
			$(box).eq($index).addClass('active').siblings().removeClass('active');
			$(this).css({"border":"1px solid #ccc"})
		},function(){
			$(this).css({"border":"1px solid #eee"})
			
		})
	}
	/*商品数量的加和减*/
	
	$(".Reduce_R").click(function(){
		var vAlue = $(".Z4 input").val();
		vAlue--;
		var a=vAlue--;
		if(a==0){
			a=1;
		}
	$(".Z4 input").val(a)
	})
	$(".Plus").click(function(){
		var vAlue = $(".Z4 input").val();
		vAlue++;
		
		var a=vAlue++;
		
		$(".Z4 input").val(a)
		
	})
	
	
/*-----------选项卡事件--------------------*/			
	
	$(".details_introduce_Top li").each(function(){
        $(this).click(function(){
            if(!$(this).hasClass('current')){
                $(this).addClass('current').siblings('.current').removeClass('current');
                $(this).siblings().children().css({display:"inline",borderBottom:"none"});
                $(this).children().css({display:"inline-block",height:"34px",color:"#E10482",borderBottom:"2px solid #E10482"});
            }/*else{
                $(this).siblings('.current').removeClass('current');
                $(this).siblings().children().css({display:"inline",borderBottom:"none"});
            }*/
            var target = $(this).attr('name');
            $("."+target).show();
             //alert(123);
            $("."+target).siblings('.X1').hide();
        });
    });	
	
	
	
	
	$("#Gou").click(function(){
		alert()
		var nA=$('.introduce_center_left_02 .big_img img').eq(1).attr('src');
		var nB=$('.introduce_center_right h3').eq(0).html();
		var nC=$('.introduce_cen_R span').eq(0).html();
		var Nd=$(".Z4 input").val();
		var nD=getCookie('R9');
		var nE=getCookie('h2');
		var nF=getCookie('p');
		var nG=getCookie('qian')
		setCookie('R9',nA,7);
		setCookie('h2',nB,7);
		setCookie('p',nC,7);
		setCookie('qian',Nd,7);
		})
})
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
