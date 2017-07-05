var appid = 'A6910011535894';
var appkey = '114BA070-B206-49B2-17E7-AD685B40A11F';
function getAppkeyInSha1() {
	var now = Date.now();
	var appKeySha1 = hex_sha1(appid + "UZ" + appkey + "UZ" + now) + "." + now;
	return appKeySha1;
}

//全局变量
//登录
var $phone = $("#username");
var $password = $("#password");
//注册
var $phone2 = $("#username2");
var $password2 = $("#password2");
var $vercode2 = $("#vercode2");
//找回
var $phone3 = $("#username3");
var $newpassword = $("#newpassword");
var $vercode = $("#vercode");

//mob验证状态
var mobStatus = false;

// 120s发送一次
var isinerval, isinerval2, times, times2;
var $sendVerify = $("#sendVerify")[0];
var $sendVerify2 = $("#sendVerify2")[0];

function selectIdentity() {
	api.openWin({
		name : 'identity_win',
		url : './html/login_System/identity_win.html',
		animation : {
			type : "fade",
			subType : "from_right",
			duration : 700
		}
	});
}

//核实验证码及密码信息
function codeVerify(number) {
	if (number == 1) {
		if ($.trim($phone.val()).length == 0) {
			$api.attr($api.byId('username'), 'placeholder', '手机号不能为空');
			flash('#username', 8, 4, 100);
		} else if (!checkPhone($.trim($phone.val()))) {
			$api.attr($api.byId('username'), 'placeholder', '手机号码不正确');
			api.toast({
				msg : '手机号码不正确',
				duration : 3000
			});
			$phone.focus();
			flash('#username', 8, 6, 100);
		} else if ($password.val().length == 0) {
			$api.attr($api.byId('password'), 'placeholder', '密码不能为空');
			$password.focus();
			flash('#password', 8, 6, 100);
		} else {
			$('#submit').addClass('loading');
			Ajax_login();
		}
	} else if (number == 2) {
		if ($.trim($phone2.val()).length == 0) {
			$api.attr($api.byId('username2'), 'placeholder', '手机号不能为空');
			flash('#username2', 8, 4, 100);
		} else if (!checkPhone($.trim($phone2.val()))) {
			$api.attr($api.byId('username2'), 'placeholder', '手机号码不正确');
			api.toast({
				msg : '手机号码不正确',
				duration : 3000
			});
			$phone2.focus();
			flash('#username2', 8, 6, 100);
		} else if ($password2.val().length == 0) {
			$api.attr($api.byId('password2'), 'placeholder', '密码不能为空');
			$password2.focus();
			flash('#password2', 8, 6, 100);
		} else {
			$('#submit').addClass('loading');
			if (mobStatus) {
				Ajax_register();
			} else {
				mobVerify(number, $.trim($phone2.val()), $.trim($vercode2.val()));
			}
		}

	} else if (number == 3) {
		if ($.trim($phone3.val()).length == 0) {
			$api.attr($api.byId('username3'), 'placeholder', '手机号不能为空');
			flash('#username3', 8, 4, 100);
		} else if (!checkPhone($.trim($phone3.val()))) {
			$api.attr($api.byId('username3'), 'placeholder', '手机号码不正确');
			api.toast({
				msg : '手机号码不正确',
				duration : 3000
			});
			$phone3.focus();
			flash('#username3', 8, 6, 100);
		} else if ($newpassword.val().length == 0) {
			$api.attr($api.byId('newpassword'), 'placeholder', '密码不能为空');
			$newpassword.focus();
			flash('#newpassword', 8, 6, 100);
		} else if ($.trim($vercode.val()).length == 0) {
			$api.attr($api.byId('vercode'), 'placeholder', '验证码不能为空');
			$vercode.focus();
			flash('#vercode', 8, 6, 100);
			return;
		} else {
			if (mobStatus) {
				Ajax_updata();
			} else {
				mobVerify(number, $.trim($phone3.val()), $.trim($vercode.val()));
			}
		}

	} else {

	}

}

function Ajax_login() {

	/*
	 api.ajax({
	 url : 'http://tempuri.org/MyLogin',
	 method : 'post',
	 cache : false,
	 timeout : 30,
	 dataType : 'json',
	 returnAll : false,
	 headers : {
	 "X-APICloud-AppId" : appid,
	 "X-APICloud-AppKey" : getAppkeyInSha1()
	 },
	 data : {
	 values : {
	 uName : $.trim($phone.val()),
	 pwd : $.trim($password.val())
	 }
	 }
	 }, function(ret, err) {
	 //coding...
	 alert(JSON.stringify(ret));
	 alert(JSON.stringify(err));
	 });
	 */

	/*
	 $.ajax({
	 "url" : "http://58.215.179.167/LoginAndRegiste.asmx",
	 "method" : "POST",
	 "cache" : false,
	 "data" : {

	 }
	 }).success(function(data, status, header) {
	 alert(JSON.stringify(ret));
	 }).fail(function(header, status, errorThrown) {
	 alert(JSON.stringify(err));
	 })
	 */
	/*
	 $('#submit').addClass('done').closest('#window').addClass('flip');
	 setTimeout(function() {
	 selectIdentity()
	 }, 1500);
	 */
	
	// 请求体
	var soapXML = "<soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>" + "<soap:Body>" + "<MyLogin  xmlns='http://tempuri.org/'>" + "<uName>" + $.trim($phone.val()) + "</uName>" + "<pwd>" + $.trim($password.val()) + "</pwd>" + "</MyLogin>" + "</soap:Body>" + "</soap:Envelope>";
	$.ajax({
		url : "http://58.215.179.167/LoginAndRegiste.asmx?op=MyLogin",
		type : "POST",
		dataType : "xml",
		contentType : "text/xml; charset=utf-8",
		data : soapXML,
		complete : endMyLogin
		/*       beforeSend: function (xhr) {
		 xhr.setRequestHeader('SOAPAction', 'http://tempuri.org/MyLogin');
		 }
		 */
	});
	
}

function endMyLogin(xmlHttpRequest, status) {
	var json = $(xmlHttpRequest.responseXML).find('MyLoginResult').text();
	data = (new Function("", "return " + json))();
	if(data.userId!=0){
	api.setPrefs({
    	key: 'userId',
   	    value: data.userId
	});
	api.setPrefs({
    	key: 'userMobile',
   	    value: $.trim($phone.val())
	});
	//alert( data.userId);
	setTimeout(function() {
	 $('#submit').addClass('done').closest('#window').addClass('flip');
	 setTimeout('selectIdentity()', 1000);
	 }, 500);
	}
	else{api.toast({msg : '手机号或者密码不正确'});}
}


function Ajax_register() {
	var soapXML = "<soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>" + 
	"<soap:Body>" + 
	"<UserRegister  xmlns='http://tempuri.org/'>" + 
	"<uName>"+$.trim($phone2.val())+"</uName>" + 
	"<pwd>"+$.trim($password2.val())+"</pwd>" + 
	"<email>"+"12345678@qq.com"+"</email>" + 
	"</UserRegister>" +
	 "</soap:Body>" + 
	 "</soap:Envelope>";

	$.ajax({
		url : "http://58.215.179.167/LoginAndRegiste.asmx?op=UserRegister",
		type : "POST",
		dataType : "xml",
		contentType : "text/xml; charset=utf-8",
		data : soapXML,
		complete : endUserRegister
	});
}
function endUserRegister(xmlHttpRequest, status) {
	var json = $(xmlHttpRequest.responseXML).find('UserRegisterResult').text();
	data = (new Function("", "return " + json))();
	alert(data.msg);
}
function wan(){//测试调用
		alert('ss');
		var temp={'total':425,
		"rows":[{"Row":"1","JobId":"205","JobName":"客服专员","JobFunctionName":"客服专员/助理(非技术)","CityName":"无锡市","PublishDate":"2016-5-10 9:52:00","DegreeName":"","WorkYears":"在读学生","NatureName":"全职","SalaryName":"",
		"JobRequirements":"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;岗位职责:负责接听客户电话，了解客户信息。<br/><br/>任职资格:1.普通话标准，有流畅的语言沟通能力，认真的工作态度。<br/>2.有上进心，有目标，能完善自我，体现自我价值，完成上级领导所安排的事宜。<br/>3.有无经验亦可，可带薪培训。<br/>工作时间:8.30-5.30，不加班，朝九晚五。&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
		"JobDescription":"","UpdateDate":"2016-5-10 9:52:00","IndustryName":"房地产开发","CompanyId":"1158","CompanyName":"九九鼎盛营销策划有限公司","CompanyNatureName":"民营公司","CompanySizeName":"20-50人",
		"CompanyIntroduce":"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无锡九九鼎盛营销策划有限公司成立于2014年，是一家资金实力雄厚，服务功能齐全，行业信誉卓越的房地产代理、企业营销策划公司。九九鼎盛的创始人经历于行业数十载，经过综合经验积累，愿意带领每一位愿意努力、不怕辛苦、满腔热忱、无限学习潜力的您一起成功，致力打造全国优质团队连锁第一品牌。<br/>&nbsp;企业精神：品质为先，以人为本，诚信经营。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
		"CompanyContact":"谢经理","CompanyAddress":"无锡崇安广益路291号A栋1519室","Contact":"18851518829"}]};
		data = (new Function("", "return " + temp))();
		alert(data.rows[0].JobName);
}



function Ajax_updata() {//apicloud云数据库的更新方式
	var filter = {
		"where" : {
			"username" : $.trim($phone3.val())
		}
	}
	$.ajax({
		"url" : "https://d.apicloud.com/mcm/api/user?filter=" + encodeURIComponent(JSON.stringify(filter)),
		"method" : "GET",
		"cache" : false,
		"headers" : {
			"X-APICloud-AppId" : appid,
			"X-APICloud-AppKey" : getAppkeyInSha1(),
		}
	}).success(function(data, status, header) {
		//更新数据

		$.ajax({
			"url" : "https://d.apicloud.com/mcm/api/user/" + data[0].id,
			"method" : "POST",
			"cache" : false,
			"headers" : {
				"X-APICloud-AppId" : appid,
				"X-APICloud-AppKey" : getAppkeyInSha1()
			},
			"data" : {
				"password" : $.trim($newpassword.val()),
				"_method" : "PUT"
			}
		}).success(function(data, status, header) {
			alert(JSON.stringify(data));
		}).fail(function(header, status, errorThrown) {
			alert(JSON.stringify(header));
		})
	}).fail(function(header, status, errorThrown) {

	})
}

function Ajax_logout() {
	$.ajax({
		"url" : "https://d.apicloud.com/mcm/api/user/logout",
		"method" : "POST",
		"cache" : false,
		"headers" : {
			"X-APICloud-AppId" : appid,
			"X-APICloud-AppKey" : getAppkeyInSha1(),
			"authorization" : ""
		}
	}).success(function(data, status, header) {

	}).fail(function(header, status, errorThrown) {

	})
}

	function Ajax_updatepwd() {
	var soapXML = "<soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>" + 
				"<soap:Body>" +
				"<UpdatePassword   xmlns='http://tempuri.org/'>" + 
				"<userName>" + userName + "</userName>" + 
				"<oldpwd>" + oldpwd + "</oldpwd>" + 
				"<newpwd>" + newpwd + "</newpwd>" + 
				"</UpdatePassword>" + 
				"</soap:Body>" + 
				"</soap:Envelope>";
				$.ajax({
					url : "http://58.215.179.167/BasicInfoManageInterface.asmx?op=UpdatePassword",
					type : "POST",
					dataType : "xml",
					contentType : "text/xml; charset=utf-8",
					data : soapXML,
					complete : endUpdatepwd
				});
}

function endUpdatepwd(xmlHttpRequest, status){
		var json = $(xmlHttpRequest.responseXML).find('UpdatePasswordResult').text();
		var data = JSON.parse(json);
		if(data.result){
		$("#myModal").modal('hide');
		H.toastSuccess();
		api.toast({msg : '新密码修改成功'});
		}else{
		H.toastError();
		api.toast({msg : '密码修改失败'});
		}
}


function getVerify(number) {
	var sendVerify;
	if (number == 2) {
		sendVerify = $api.byId('sendVerify2');
		$api.removeAttr(sendVerify, 'onclick');
		$api.html(sendVerify, '<span id="GetVerify2">120</span>S');
		times2 = 119;
		isinerval2 = setInterval("CountDown(2)", 1000);
	} else if (number == 3) {
		sendVerify = $api.byId('sendVerify');
		$api.removeAttr(sendVerify, 'onclick');
		$api.html(sendVerify, '<span id="GetVerify">120</span>S');
		times = 119;
		isinerval = setInterval("CountDown(3)", 1000);
	}
}

function CountDown(number) {
	if (number == 2) {
		if (times < 1) {
			var sendVerify = $api.byId('sendVerify2');
			$api.attr(sendVerify, 'onclick', 'mobSend(2)');
			$api.html(sendVerify, '重新获取');
			clearInterval(isinerval2);
			return;
		}
		var getVerify = $api.byId('GetVerify2');
		$api.html(getVerify, '' + times2 + '');
		times2--;
	} else if (number == 3) {
		if (times < 1) {
			var sendVerify = $api.byId('sendVerify');
			$api.attr(sendVerify, 'onclick', 'mobSend(3)');
			$api.html(sendVerify, '重新获取');
			clearInterval(isinerval);
			return;
		}
		var getVerify = $api.byId('GetVerify');
		$api.html(getVerify, '' + times + '');
		times--;
	}

}

//mob发送短信验证码
function mobSend(number) {
	var myphone;
	if (number == 2) {
		myphone = $.trim($phone2.val());
		if (myphone.length == 0) {
			$api.attr($api.byId('username2'), 'placeholder', '手机号不能为空');
			return;
		} else if (!checkPhone(myphone)) {
			$api.attr($api.byId('username2'), 'placeholder', '手机号码不正确');
			api.toast({
				msg : '手机号码不正确',
				duration : 3000
			});
			$phone2.focus();
			return;
		}
	} else if (number == 3) {
		myphone = $.trim($phone3.val());
		if (myphone.length == 0) {
			$api.attr($api.byId('username3'), 'placeholder', '手机号不能为空');
			return;
		} else if (!checkPhone(myphone)) {
			$api.attr($api.byId('username3'), 'placeholder', '手机号码不正确');
			api.toast({
				msg : '手机号码不正确',
				duration : 3000
			});
			$phone3.focus();
			return;
		}
	}
	smsVerify.sms({
		phone : myphone,
		country : "86"
	}, function(ret, err) {
		if (ret.status) {
			if (ret.smart == true) {// 安卓版特有功能 智能验证
				api.alert({
					msg : '智能验证成功!'
				});
				mobStatus = true;

				if (number == 2) {
					$sendVerify2.innerText = '验证通过';
					$("#vercode2").val('不用填');
					//	$api.val($api.byId("vercode2"), '不用填');
				} else if (number == 3) {
					$sendVerify.innerText = '验证通过';
					$("#vercode").val('不用填');
				}

			} else {
				api.toast({
					msg : '短信已发送，请注意查收！'
				});
				getVerify(number);
			}
		} else {
			api.alert({
				msg : err.code + ' ' + err.msg
			});
		}
	});
}

//mob校验验证码
function mobVerify(number, myphone, mycode) {
	smsVerify.verify({
		phone : myphone,
		country : "86",
		code : mycode
	}, function(ret, err) {
		if (ret.status) {
			if (number == 2) {
				Ajax_register();
			} else if (number == 3) {
				Ajax_updata();
			}
		} else {
			api.alert({
				msg : err.code + ' ' + err.msg
			});
		}
	});
}

// 手机号验证
function checkPhone(phone) {
	var res = !!phone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
	return res;
}

// 点击显示密码
function showPassword() {
	//登录
	$api.attr($api.byId('password'), 'type', 'text');
	$api.removeCls($api.byId('showpass-btn'), 'aui-icon-attention');
	$api.addCls($api.byId('showpass-btn'), 'aui-icon-attentionfill');
	$api.attr($api.byId('showpass-btn'), 'onclick', 'hidePassword();');
	//注册
	$api.attr($api.byId('password2'), 'type', 'text');
	$api.removeCls($api.byId('showpass-btn2'), 'aui-icon-attention');
	$api.addCls($api.byId('showpass-btn2'), 'aui-icon-attentionfill');
	$api.attr($api.byId('showpass-btn2'), 'onclick', 'hidePassword();');
	//找回
	$api.attr($api.byId('newpassword'), 'type', 'text');
	$api.removeCls($api.byId('showpass-btn3'), 'aui-icon-attention');
	$api.addCls($api.byId('showpass-btn3'), 'aui-icon-attentionfill');
	$api.attr($api.byId('showpass-btn3'), 'onclick', 'hidePassword();');

	api.parseTapmode();
}

function hidePassword() {

	$api.attr($api.byId('password'), 'type', 'password');
	$api.removeCls($api.byId('showpass-btn'), 'aui-icon-attentionfill');
	$api.addCls($api.byId('showpass-btn'), 'aui-icon-attention');
	$api.attr($api.byId('showpass-btn'), 'onclick', 'showPassword();');

	$api.attr($api.byId('password2'), 'type', 'password');
	$api.removeCls($api.byId('showpass-btn2'), 'aui-icon-attentionfill');
	$api.addCls($api.byId('showpass-btn2'), 'aui-icon-attention');
	$api.attr($api.byId('showpass-btn2'), 'onclick', 'showPassword();');

	$api.attr($api.byId('newpassword'), 'type', 'password');
	$api.removeCls($api.byId('showpass-btn3'), 'aui-icon-attentionfill');
	$api.addCls($api.byId('showpass-btn3'), 'aui-icon-attention');
	$api.attr($api.byId('showpass-btn3'), 'onclick', 'showPassword();');

	api.parseTapmode();
}

function flash(obj, time, wh, fx) {
	$(function() {
		var $panel = $(obj);
		var offset = $panel.offset() - $panel.width();
		var x = offset.left;
		var y = offset.top;
		for (var i = 1; i <= time; i++) {
			if (i % 2 == 0) {
				$panel.animate({
					left : '-' + wh + 'px'
				}, fx);
			} else {
				$panel.animate({
					left : '+' + wh + 'px'
				}, fx);
			}

		}
		$panel.animate({
			left : 0
		}, fx);
		$panel.offset({
			top : y,
			left : x
		});

	})
}