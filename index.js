/*
* @Author: 智
* @Date:   2018-07-30 09:34:56
* @Last Modified by:   智
* @Last Modified time: 2018-07-30 10:23:06
*/
$(function(){
		var valPattern = /^((1[3,5,8,7][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
		var pasPattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;  //为数字字母的组合，不能全是数字，也不能全是字母
		$("#inpVal").on('blur',function(e){ 
			e.preventDefault()
			let vals = $(this).val()
			if(!valPattern.test(vals)){
				alert('请输入正确的大陆手机号码')
			}
			getUser()
		})

		$("#pasVal").on('blur',function(e){
			e.preventDefault()
			let vals = $(this).val()
			if(!pasPattern.test(vals)){
				alert('密码仅接受8-16位字母和数字混合')
			}
		})



		$(".result").on('click',function(){
			let userName = $("#inpVal").val()
			let pasVal = $("#pasVal").val();
			$.ajax({
				url:'./data.json',
				success:function(res){
					console.log(res.login)
					if(userName == res.login.name && pasVal == res.login.name){
						layer.open({
						   content: res.login.loginmsg,
						   btn: '我知道了'
						});
					}else {
						layer.open({
						   content: res.login.errmsg,
						   btn: '我知道了'
						});
					}
				}
			})
		})
})