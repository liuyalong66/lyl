$(document).ready(function(){
	/*二级菜单*/
	var nUl = document.getElementById("nul");
	var aLi = nUl.getElementsByTagName("li");
	//alert(aLi.length);
	var nDiv = document.getElementById("div01");
	var nUl01 = nDiv.getElementsByTagName("ul");
	//alert(nUl01.length);
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
			
			$(this).css({"background":"url(../images/T.gif) no-repeat"});
		}else if(b==false){
			b=true;
			$(".menu_bar_right").css({"display":"none"});
			$(this).css({"background":"url(../images/img100.png) no-repeat"});
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
	
		
		
	/*----利用Ajax加载页面图片-----*/	
		
	$(document).ready(function(e) {
    $.ajax({
		url:"../data/data01.txt",
		cache:true,
		beforeSend:function(){
			
			},
		
		success: function(str){
			
			var $data=eval(str);
			
			for(i=0;i<$data.length;i++){
				var $json=$data[i];
				
				$($(".activity_commodity_center")[0]).append('<li><a href="../HTcommdydetails/commodity_introduce.html"><span class="activity_exhibition_01"><img src="'+$json["imgurl"]+'"/></span><div class="activity_exhibition_02"><span class="W1"><img src="'+$json["imgurl1"]+'"/>国内现货</span><p>'+$json["bb2"]+'</p><div class="activity_exhibition_03"><i class="W2">'+$json["bb3"]+'</i><span class="W3">'+$json["bb4"]+'</span></div><div class="activity_exhibition_04">'+$json["bb5"]+'</div><span class="W4"></span></div></a></li>');
				}
			}
		})
	})	
		
		
	$(document).ready(function(e) {
    $.ajax({
		url:"../data/data02.txt",
		cache:true,
		beforeSend:function(){
			
			},
		
		success: function(str){
			var $data=eval(str);
			
			
			for(i=0;i<$data.length;i++){
				
				var $json=$data[i];
				var $Li =$("<li></li>");
				var $ALi =$('<a href="javascript:void(0)"></a>');
				var $Img =$('<span class="activity01_exhibition_01"><img src="'+$json["imgurl"]+'"/></span>');
				var $Ion = $('<i class="Z1"></i>');
				var $Div =$('<div class="activity01_exhibition_02"></div>');
				var $Spimg =$('<span class="S1"><img src="'+$json["imgurl1"]+'"/>韩国直采杭州保税仓发货</span>');
				var $Pan =$('<p>'+$json["bb2"]+'</p>');
				var $Div0 = $('<div class="activity01_exhibition_03"></div>');
				var $Isp =$('<i class="S2">'+$json["bb3"]+'</i>');
				var $Spa01 = $('<span class="S3">'+$json["bb4"]+'</span><span class="S4">'+$json["bb5"]+'</span>');
				var $Div02 = $('<div class="activity01_exhibition_04">距开售 <span class="S6" id="aTime"></span></div>');
				var $aSpn = $('<span class="S7" id="Xs">开团提醒</span>');
				var $App01 = $Div0.append($Isp,$Spa01);
				var $App02 = $Div.append($Spimg,$Pan,$App01,$Div02);
				var $App03 = $ALi.append($Img,$Ion,$App02,$aSpn);
				var $App04=  $Li.append($App03,$aSpn);

				$($(".activity_commodity_center01")[0]).append($App04);
				/*获取时间*/	
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
			var uN = (hour<10?"0"+hour:hour)+"小时"+(minutes<10?"0"+minutes:minutes)+"分"+(ss<10?"0"+ss:ss)+"秒";

				$(".S6").html(uN); 


	},1000);

			/*	$($(".activity_commodity_center01")[0]).append('<li><a href="#"><span class="activity01_exhibition_01"><img src="'+$json["imgurl"]+'"/></span><i class="Z1"></i><div class="activity01_exhibition_02"><span class="S1"><img src="'+$json["imgurl1"]+'"/>韩国直采杭州保税仓发货</span><p>'+$json["bb2"]+'</p><div class="activity01_exhibition_03"><i class="S2">'+$json["bb3"]+'</i><span class="S3">'+$json["bb4"]+'</span><span class="S4">'+$json["bb5"]+'</span></div><div class="activity01_exhibition_04">距开售 <span class="S6" id="aTime"></span></div></div></a><span class="S7" id="Xs">开团提醒</span></li>');
		 /*------点击开团提醒事件--------------*/
					$(".S7").click(function(){
							$(".Remind").css({"display":"block"});
							$(".Remind_01").css({"display":"block"})
					})
				}
			}
		})
    $(".nb").click(function(){
    	$(".Remind").css({"display":"none"});
		$(".Remind_01").css({"display":"none"})
    })
})

/*-----------选项卡事件--------------------*/
	$(".activity_commodity_r li").each(function(){
        $(this).click(function(){
            if(!$(this).hasClass('current')){
                $(this).addClass('current').siblings('.current').removeClass('current');
            }else{
                $(this).siblings('.current').removeClass('current');
            }
            var target = $(this).attr('name');
            $("."+target).show();
             //alert(123);
            $("."+target).siblings('.X1').hide();
        });
    });
})