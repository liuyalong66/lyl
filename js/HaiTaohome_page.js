$(document).ready(function(){
	/*二级菜单*/
	var nUl = document.getElementById("nul");
	var aLi = nUl.getElementsByTagName("li");
	
	var nDiv = document.getElementById("div01");
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
	$(".menu_bar_left01 a").hover(function(){
			$(this).addClass("La").parent().siblings().children("a").removeClass("La");
			
		}
		)
	var b= true;
	$("#A1").click(function(){
		$(".menu_bar_left01 li").eq(0).children(0).addClass("La").parent().siblings().children("a").removeClass("La");
		if(b==true){
			b=false;
			$(".menu_bar_right").css({"display":"block"});
			
			$(this).css({"background":"url(images/T.gif) no-repeat"});
		}else if(b==false){
			b=true;
			$(".menu_bar_right").css({"display":"none"});
			$(this).css({"background":"url(images/img100.png) no-repeat"});
		}
		
	})
	/*图片轮播*/
		var oBox = document.getElementById("nbanner");
		var oLi = oBox.getElementsByTagName("li");
		var oBox01 =document.getElementById("nbanner01")
		var oSpan = oBox01.getElementsByTagName("span");
		//alert(oSpan.length);
		var oBox02 =document.getElementById("nbanner02")
		var oSpan01 = oBox01.getElementsByTagName("span");
		
		var num = 0;
		oLi[num].className="active";
		oSpan[num].className="active";
		//设置定时器；
		var timer = setInterval(function(){
			fnClick();
		},2000);
	//鼠标放上关上定时器；
		oBox.onmouseover = function (){
			clearInterval(timer);
			oBox02.style.display="block";
		}
		oBox.onmouseout=function(){
			oBox02.style.display="none";
			timer = setInterval(function(){
				fnClick();
			},3000);
		}
		//oBox下子元素下标为1的鼠标点击事件；
		oBox02.children[0].onclick =function(){
				num--;
				if(num <0){
					num = oLi.length-1;
				}
				for(var a = 0;a < oLi.length;a++){
					oLi[a].className="";
					oSpan[a].className="";
				}	
					oLi[num].className = "active";
					oSpan[num].className="active";
		}
		//oBox下子元素下标为2的鼠标点击事件；
		oBox02.children[1].onclick =function(){
			fnClick();
		}
		for(var i=0;i<oSpan.length;i++){
			oSpan[i].index=i;
			oSpan[i].onclick =function(){
				num=this.index;
				fnn();
				
			}
		}
		//封装
		function fnClick(){
			num++;
				if(num >=oLi.length){
					num=0;
				}
				fnn();
		}
		function fnn(){
			for(var a = 0;a < oLi.length;a++){
				oLi[a].className= "";
				oSpan[a].className="";
			}
				oLi[num].className="active";
				oSpan[num].className="active";
		}
/*----热销品牌中的下标提显示*/
	$(".selling_top a").hover(function(){
		$(this).children("span").show();
		$(this).css({"border":"1px solid #F0F0F0"});
	},function(){
		$(this).children("span").hide();
		$(this).css({"border":""});
	})
	
	
	/*嗨淘大牌中遮罩层*/
	$(".selected_01_center a").hover(function(){
		$(this).children("span").show();
	},function(){
		$(this).children("span").hide();
		
	})
/*全球特卖中的倒计时*/
	var nPg = document.getElementById("nsp01");
	var wSpan = nPg.getElementsByTagName("i");
	//alert(wSpan.length)
	setInterval(function(){
			var endTime = new Date('2017/4/15 10:00:00').getTime();
			//console.info("下班时间",endTime);
			var nowTime = new Date().getTime();
			//日期时间是不能直接相减的 所以先转化为毫秒
			//console.info("距离下班还有",endTime-nowTime,'毫秒');
			//时分秒
			//endT距离下班的毫秒
			var endT = parseInt((endTime-nowTime)/1000);
			//求多少小时
			var hour = Math.floor(endT/3600);
			//求多少分
			var minutes = Math.floor((endT%3600)/60);
			//求多少秒
			var ss = endT%60;
			var uN = (hour<10?"0"+hour:hour)+":"+(minutes<10?"0"+minutes:minutes)+":"+(ss<10?"0"+ss:ss);
			for(var a=0;a<wSpan.length;a++){
				wSpan[a].innerHTML =uN; 
				
			}
	},1000)
	
})