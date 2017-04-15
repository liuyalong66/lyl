$(document).ready(function(){	
	
	
            // 邮政编码验证  添加自定义校验:addMethod：name, method, message
            $.validator.addMethod("ckName", function (value, element) {
                var name = /^[0-9]{11}$/;
                return this.optional(element) || (name.test(value));
            }, '<span class="s2">请输入正确的手机号</span>');
			$.validator.addMethod("uerpass",function(value,element){
				var name = /^[a-z0-9]{6,18}$/;
				 return this.optional(element) || (name.test(value));
			},'<span class="p2">请输入正确密码</span>');
            //对当前form表单进行表单验证
            $('#demo').validate({
                //验证规则
                rules: {
                    //userName对应页面元素的name属性
                    userName: {
                        required: true,
                        rangelength: [6, 16],
                        ckName:true
                    },
                    userPass: {
                    	required:true,
                    	rangelength:[6,18],
                    	uerpass:true
                    	
                    }
                },
                //验证失败提供的提示信息
                messages: {
                    userName: {
                        required: '<span class="s2">请输入手机号</span>',
                        rangelength:'<span class="s2">请输入正确的手机号</span>'
                    },
                    userPass: {
                    	required:'<span class="p2">请输入正确密码</span>',
                    	rangelength : '<span class="p2">请输入正确密码</span>'
                    }
                },
                //对submit提交事件进行阻止
                submitHandler: function () {
                   var data = {
                        name: $('#firstname').val(),
                        pass: $('#pass').val(),
                        age: $("#age").val(),
                        email: $("#email").val(),
                        phone: $("#phone").val(),
                        identity: $("#identity").val(),
                        sex: 1
                    }

                    $.ajax({
                        type: 'post',
                        url: 'http://dabiaogelan.duapp.com/users/insert',
                        data: data,
                        success: function (e) {
                        	setTimeout(function(){
                            	window.location="Sign_in.html";
                            },2000);
                          
                            
                            return;
                            if (e.code == 200) {
                            	
                                alert('成功')
                            } else {
                                alert('失败')
                            }
                            alert('成功')
                        }
                    })
                    
                     
                }
            });
	
   })     
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
