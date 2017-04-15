$(document).ready(function(){
	/*var oInput=document.getElementsByTagName("input");
		var oUl=document.getElementsByTagName("ul");
		for(var i=0;i<oInput.length;i++){
			oInput[i].index=i;
			oInput[i].onclick=function(){
				for(var i=0;i<oInput.length;i++){
					oUl[i].style.display="none";
					oInput[i].style.background="none";
					
				}
				this.style.background="#d1d1d1";
				oUl[this.index].style.display="block";
			}
		}*/
		
/*-----------选项卡事件--------------------*/		
	$(".Sign_in_S2 li").each(function(){
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
/*-----------------登录验证--------------------------*/


$(function(){
	$('#name').blur(function() {
		//$(this).val()
		var nameVal = this.value;
		$(this).nextAll().remove();
		//判断是否为空
		if(nameVal == "") {
			$(this).after('<span class="S2">请输入手机号</span>');
		} else if(nameVal.length>11||nameVal.length<11){
			$(this).after('<span class="S2">请输入正确的手机号</span>');
		}
	})
	//密码
	//非空 长度6~16位
	//blur当元素失去焦点时触发 blur 事件。
	$('#pass').blur(function() {
		//$(this).val()
		var passVal = this.value;
		$(this).nextAll().remove();
		if(passVal =="") {
			$(this).after('<span class="P2">请输入密码</span>');
		} else if(passVal.length<6 || passVal.length>16){
			$(this).after('<span class="P2">密码长度为6~16位</span>');
		}
	})
	
	
//点击登录事件
	$('#login_btn').click(function() {
		//主动验证是否符合格式,如果不符合格式
		//插入span标签 显示错误信息
		
		$('#name,#pass').trigger('blur');
			if($(".S2,.P2").length == 0){
		//	alert(2323);
				$.ajax({
					url:"http://dabiaogelan.duapp.com/users/login",
					type:"get",
					data:{name:$("#name").val(),pass:$("#pass").val()},
					success:function(e){
						if(e.data){
							window.location="../HaiTao.com.html";
						}else{
							$(".basic").prepend('<span class="P01">亲！用户名或密码不正确</span>');
							setTimeout(function(){
								$(".basic .P01:first").remove();
							},1000)
						}
					}
				})
			}
				
	 })
	
	
	
	
	

})
	
	
	
	
