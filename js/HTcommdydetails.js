$(document).ready(function(){
	/*二级菜单*/
	var nUl = document.getElementById("commdy_nul");
	var aLi = nUl.getElementsByTagName("li");
	//alert(aLi.length);
	var nDiv = document.getElementById("commdy_div01");
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
	$(".commdy_menu_bar_left01 a").hover(function(){
			$(this).addClass("La").parent().siblings().children("a").removeClass("La");
			
		}
		)
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
/*-------利用Ajax添加图片----------------------*/

$(document).ready(function(e) {
    $.ajax({
		url:"../data/date.txt",
		cache:true,
		beforeSend:function(){
			
			},
		success: function(str){
			var $data=eval(str);
			
			for(i=0;i<$data.length;i++){
				var $json=$data[i];
				
				$($(".commdy_exhibition_01")[0]).append('<li><a href="commodity_introduce.html"><span class="exhibition_01"><img src="'+$json["imgurl"]+'"/></span><div class="exhibition_02"><span class="W1"><img src="'+$json["imgurl1"]+'"/>国内现货</span><p>'+$json["bb2"]+'</p><div class="exhibition_03"><i class="W2">'+$json["bb3"]+'</i><span class="W3">'+$json["bb4"]+'</span></div><div class="exhibition_04">'+$json["bb5"]+'</div><span class="W4"></span></div></a></li>');
				}
			}
		})
 /*-----------------点击价格进行筛选----------------------*/
	window.onload=function(){
	var oDiv=document.getElementById('Screen');
	var nLi=oDiv.getElementsByTagName('a');
	var oDiv=document.getElementById('Screen_01');
	var oLi=oDiv.getElementsByTagName('a');
	var aDiv=document.getElementById('Exhibition');
	var aLi=aDiv.getElementsByTagName('li');
	fnClick(nLi,aLi);
	fnClick(oLi,aLi);
	
		function fnClick(Tex,Obj){
		var arr0 = [18,19,15,10,7,2,];
		var arr1 = [1,2,3,4,0];
		var arr2 = [5,10,11];
		var arr3 = [6,7,8,16];
		var arr4 =[3,4,1,2];
		var arr5 =[3,4,18,19];
		var arr6 =[12,10,13,15,2,3,8];
		var arr7 =[16,18,12,10,2]
		
			for(var i=0;i<Tex.length;i++){
				Tex[i].index=i;
				Tex[i].onclick=function(Tex,OBj){
					
				switch (this.index){
					case 0:
						for(var i=0;i<Obj.length;i++)
						{
							Obj[i].style.display = 'block';
						}
						break;
					case 1:
						for(var i=0;i<Obj.length;i++)
						{
							Obj[i].style.display = 'none';
						}
						for(var i=0;i<arr0.length;i++)
						{
							Obj[arr0[i]].style.display = 'block';
						}
						break;
					case 2:
						for(var i=0;i<Obj.length;i++)
						{
							Obj[i].style.display = 'none';
						}
						for(var i=0;i<arr0.length;i++)
						{
							Obj[arr1[i]].style.display = 'block';
						}
						break;
					case 3:
						for(var i=0;i<Obj.length;i++)
						{
							Obj[i].style.display = 'none';
						}
						for(var i=0;i<arr0.length;i++)
						{
							Obj[arr2[i]].style.display = 'block';
						}
						break;
					case 4:
						for(var i=0;i<Obj.length;i++)
						{
							aLi[i].style.display = 'none';
						}
						for(var i=0;i<arr0.length;i++)
						{
							Obj[arr3[i]].style.display = 'block';
						}
						break;
					case 5:
						for(var i=0;i<Obj.length;i++)
						{
							Obj[i].style.display = 'none';
						}
						for(var i=0;i<arr0.length;i++)
						{
							Obj[arr4[i]].style.display = 'block';
						}
						break;
					case 6:
						for(var i=0;i<Obj.length;i++)
						{
							Obj[i].style.display = 'none';
						}
						for(var i=0;i<arr0.length;i++)
						{
							Obj[arr5[i]].style.display = 'block';
						}
						break;
					case 7:
						for(var i=0;i<Obj.length;i++)
						{
							Obj[i].style.display = 'none';
						}
						for(var i=0;i<arr0.length;i++)
						{
							Obj[arr6[i]].style.display = 'block';
						}
						break;
					case 8:
						for(var i=0;i<Obj.length;i++)
						{
							Obj[i].style.display = 'none';
						}
						for(var i=0;i<arr0.length;i++)
						{
							Obj[arr7[i]].style.display = 'block';
						}
						break;
					}
				}
		}
		
		
		
	}
	
}
	})
/*-----------点击“更多”显示隐藏的文字-------------------------*/
	
	$("#Gd").click(function(){
		if(b==true){
				b=false;
				$(".commdy_Name_bottom_d2 dd").css({"height":"120px"});
				$(".commdy_Name_bottom_d2 ").css({"overflow":"visible"});
			}else if(b==false){
				b=true;
				$(".commdy_Name_bottom_d2 dd").css({"height":"30px"});
				$(".commdy_Name_bottom_d2 ").css({"overflow":"hidden"});
			}
	})




	
	
	
})
/*
//图片延迟加载

//1.对没有显示到页面上的图片元素 进行不加载

window.onload=function(){

	/!*1.src後跟图片路径，会直接加载。
	 如<img src="">，它 是标准的HTML语言  浏览器都能支持*!/
	/!*lazysrc後跟图片路径，但是不会直接加载，
	 它是延迟加载图片路径的JS插件，对于某些浏览器来说自然无法识别*!/
	//1.页面元素准备完毕 将所有的图片路径设置为空
	//并将图片保存到一个数组里
	var imgArr = [];
	//jquery对象包含的数组
	imgArr = $(".exhibition_01 img").map(function() {
		//console.info($(this).attr('lazysrc'))
		return $(this).attr('src');
	})
	//2.判断哪个图片元素显示到了当前页面
	//获取浏览器高度
	var winH = $(window).height();
	//对浏览器绑定滚动条事件
	//当滚动条滚动的时候,判断图片是否显示到当前的页面上
	//如果显示 什么都不操作
	//如果不显示，设置src
	$(window).scroll(function() {
		imgInit();
	});
	imgInit();
	function imgInit() {
		alert();
		$(".exhibition_01 img").each(function(i,obj) {
			//获取每张img
			var that = $(this);
			//获取每张图片距离浏览器顶端的距离
			var offset = that.offset();
			console.info(offset);
			//如果当前图片距离浏览器头部的距离小于浏览器高度
			//获取浏览器滚动条距离顶部的距离
			//因为浏览器有滚动条 所有判断元素是否显示应该是
			  // 元素距离window顶部的距离 < window滚动条的高度+window自身高度
			if(offset.top<winH+$(window).scrollTop()) {
				this.src = imgArr[i];
			}
		})
	}
}
*/

















