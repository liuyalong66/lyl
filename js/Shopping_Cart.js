$(document).ready(function(e){
	var nA= getCookie('R9');
	var nP= getCookie('p');
	var nH= getCookie('h2');
	var nG=getCookie('qian')

	$(".Number_01").click(function(){
		var vAlue = $(".Number input").val();
		vAlue-1;
		var a=vAlue-1;
		if(a==0){
			a=1;
		}
		$(".Number input").val(a)
	})
	$(".Number_02").click(function(){
		var vAlue = $(".Number input").val();
		vAlue++;

		var a=vAlue++;

		$(".Number input").val(a)

	})



//alert(nA);
//alert(nP)



	/*var nA1=nA.split('|');
	var nP1= nP.split('|');
	var nH1= nH.split('|');
	var nP2= nP.split('') */
	/*for(var i=1;i<nA1.length;i++){*/
		/*$(".indent_Prompt_Center01").append()*/


	/*var pd=parseInt($('.Price span').html().substring(1));
	$('.mius').html('￥'+$('.Numer_big input').eq(0).val()*pd);
	
	for(var i=0;i<$('.Number_01').length;i++){
	 $('.Number_01').eq(i)[0].index=i;
		$('.Number_01').eq(i).click(function(){
		var $index=this.index
		var nVa=$('input').eq($index+1).val();
			nVa--;
		if(nVa==-1){
			nVa=0;
			}
		$('input').eq($index+1).val(nVa);
		var pp=$('input').eq($index+1).val();
		var pc=pp*pd;
		$('.mius').html('￥'+pc);
		})
		}
	for(var j=0;j<$('.Number_01').length;j++){
		$('.Number_02_01').eq(j)[0].index=j;
		$('.Number_02_01').eq(j).click(function(){
			var $index=this.index;
			var nVa=$('.Numer_big input').eq($index).val();
			nVa++;
			$('.Numer_big input').eq($index).val(nVa);
			var pe=$('.Numer_big input').eq($index).val();
			var pc=pe*pd;
			$('.mius').html('￥'+pc);
	
		});
	}*/
	/*$("#indent_Prompt_Center01").append('<tr class="Cuj"><td width="49px"><input type="checkbox"></td><td width="417px" class="indent_Prompt_Cs"><div class="indent_Prompt_Cs_01"><a heft="#" class="Tp"><img src=""</a><div class="Name"><a href="#">wo</a></div></div></td><td width="159px" class="Price"><span>wo</span></td><td class="Number" width="116px"><a href="#"  class="Number_01">-</a><input type="text" value="1"><a href="#" class="Number_02_01">+</a></div></td><td class="Number_02" width="116px"><b>￥140.00</b></td><td class="Number_03" width="116px"><a href="javascript:void(0)" id="Dj"></a></td></tr>');*/


});


	
			

		function clearCookie(name) {  
		    setCookie(name, "", -1);  
		}  
		function checkCookie() {
		    var user = getCookie("username");
		    if (user != "") {
		        alert("Welcome again " + user);
		    } else {
		        user = prompt("Please enter your name:", "");
		        if (user != "" && user != null) {
		            setCookie("username", user, 365);
		        }
		    }
		}


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
	
	
