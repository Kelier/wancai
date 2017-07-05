//全局变量
var $phone = $("#mobile");
var $password = $("#password");
var $newpassword = $("#newpassword");
var newpassword ;
var $vercode = $("#code");
//mob验证状态
var mobStatus = false;
// 声明sendSms全局变量
var sendsms = null;
var smsVerify = null;
// 是否发送验证码的标识
var isPushCode = false;
// 发送等待句柄
var flag = null;
// 120s发送一次
var isinerval, times = 120;
var $btnObj = $("#sendVerify")[0];
//抖动定义
/*
var m1 = document.getElementById("mobile");
var sk1 = new SKclass(m1, 10, 500);
var m2 = document.getElementById("password");
var sk2 = new SKclass(m2, 10, 500);
var m3 = document.getElementById("newpassword");
var sk3 = new SKclass(m3, 10, 500);
var m4 = document.getElementById("code");
var sk4 = new SKclass(m4, 10, 500);
*/

//zepto触控感知
Zepto(function($) {
	// 点击获取按钮发送验证
	$("#sendVerify").tap(function() {
		if ($.trim($phone.val()) == "") {
			$api.attr($api.byId('mobile'), 'placeholder', '手机号不能为空');
			$phone.focus();
			flash('#mobile', 8, 4, 100);
		} else if (!checkPhone($.trim($phone.val()))) {
			$api.attr($api.byId('mobile'), 'placeholder', '手机号码不正确');
			api.toast({
				msg : '手机号码不正确',
				duration : 3000
			});
			$phone.focus();
			flash('#mobile', 8, 4, 100);
		} else {
			if (!isPushCode && times == 120) {
				api.toast({
					msg : '验证码发送中....',
					duration : 3000
				});
				//sendsmsSend();
				mobSend();
				//mob发送短信验证码

			} else {
				api.toast({
					msg : "请在" + times + "S后再发送！"
				});
			}
		}
	});
	/*
	 $("#register").tap(function() {
	 codeVerify();

	 });*/

});

//页面初始化加载SMS模块
function readyVerify() {
	/*
	//120秒内只能注册一次，不然会失败，注意下;
	sendsms = api.require('sendSms');
	// IOS的Key
	var iosParam = {
	appkey : "bd1e9fa5d414",
	appsecret : "bf0092daa381804718461b985eac8555"
	};
	// Android的Key
	var androidParam = {
	appkey : "bd1e495d4ef8",
	appsecret : "26dee820b9ebb67717db3799aa689c98"
	};
	// 判断不同的系统注册
	if (api.systemType == "ios") {
	sendsms.regSms(iosParam);
	} else {
	sendsms.regSms(androidParam);
	}
	*/
	//注册一下APP
	smsVerify = api.require('smsVerify');
	smsVerify.register(function(ret, err) {
		if (ret.status) {
			//	api.alert({msg: '注册成功'});
		} else {
			api.alert({
				msg : err.code + ' 注册失败'
			});
		}
	});

}

//滚动时间
function waitTime() {
	flag = setInterval(function() {
		if (times == 1) {
			clearInterval(flag);
			$btnObj.innerText = '重新获取';
			isPushCode = false;
			times = 120;
		} else {
			isPushCode = true;
			times = times - 1;
			$btnObj.innerText = '需等待' + times + 'S';
		}
	}, 1000);
}

// 手机号验证
function checkPhone(phone) {
	var res = !!phone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
	return res;
}

// 密码验证
function checkPassword(pwd1, pwd2) {
	if (pwd1 == pwd2)
		return true;
	else
		return false;
}

//核实验证码及密码信息
function codeVerify(number) {
	if(number!=1){
	newpassword=$.trim($password.val());
	}
	else newpassword=$.trim($newpassword.val());
	
	if ($.trim($phone.val()).length == 0) {
		$api.attr($api.byId('mobile'), 'placeholder', '手机号不能为空');
		flash('#mobile', 8, 4, 100);
		return;
	} else if (!checkPhone($.trim($phone.val()))) {
		$api.attr($api.byId('mobile'), 'placeholder', '手机号码不正确');
		api.toast({
			msg : '手机号码不正确',
			duration : 3000
		});
		$phone.focus();
		flash('#mobile', 8, 6, 100);
		return;
	} else if ($password.val().length == 0) {
		$api.attr($api.byId('password'), 'placeholder', '密码不能为空');
		$password.focus();
		flash('#password', 8, 6, 100);
		return;
	} else if (!checkPassword($.trim($password.val()), newpassword)) {
		api.toast({
			msg : '您输入的两次密码不一致'
		});
		//		$("#newpassword").focus();
		flash('#newpassword', 8, 6, 100);
		return;
	} else if ($.trim($vercode.val()).length == 0) {
		$api.attr($api.byId('code'), 'placeholder', '验证码不能为空');
		$vercode.focus();
		flash('#code', 8, 8, 100);
		return;
	} else {
		//	sendsmsVerify();
		if (mobStatus) {
			if(number==1)
				register($.trim($phone.val()), $.trim($password.val()));
			else updataPwd(); 
		} else {
			mobVerify();

		}

	}
}

//注册信息
function register(phone, password) {
	var user = api.require('user');
	user.register({
		username : phone,
		password : password,
		//		mobile : phone
	}, function(ret, err) {
		if (ret) {
			api.hideProgress();
			api.alert({
				title : '注册成功',
				buttons : ['确定']
			}, function(ret, err) {
				if (ret.buttonIndex == 1) {
					api.closeWin();
				}
			});
		} else {
			api.toast({
				msg : err.message,
				location : "middle"
			})
		}
	});
}

//登录验证
function login() {
	if ($.trim($phone.val()).length == 0) {
		$api.attr($api.byId('mobile'), 'placeholder', '手机号不能为空');
		$phone.focus();
		flash('#mobile', 8, 6, 100);
		return;
	} else if (!checkPhone($.trim($phone.val()))) {
		$api.attr($api.byId('mobile'), 'placeholder', '手机号码不正确');
		api.toast({
			msg : '手机号码不正确'
		});
		$phone.focus();
		flash('#mobile', 8, 6, 100);
		return;
	} else if ($password.val().length == 0) {
		$api.attr($api.byId('password'), 'placeholder', '密码不能为空');
		$password.focus();
		flash('#password', 8, 6, 100);
		return;
	} else {
		api.showProgress();
		var username = $.trim($phone.val());
		var password = $.trim($password.val());
		var user = api.require('user');
		user.login({
			username : username,
			password : password
		}, function(ret, err) {
			api.hideProgress();
			if (ret) {
				localStorage.setItem('userId', ret.id);
				api.execScript({
					name : 'user',
					script : 'checkUserId()'
				})
				api.execScript({
					name : 'root',
					script : 'checkUserId()'
				})
				//载入身份页
				selectIdentity();
			} else {
				api.toast({
					msg : "用户名或密码错误",
					location : "middle"
				})
			}
		});
	}

}

//身份选择页
function selectIdentity() {
	/*
	 api.closeFrame({
	 name: 'login'
	 });
	 api.openFrame({
	 name : "identity",
	 url : './identity.html',
	 animation : {
	 type : "push",
	 subType : "from_right",
	 duration : 700
	 },
	 rect : {
	 x : 0,
	 y : 0,
	 w : "auto",
	 h : 'auto'
	 }
	 })
	 */
	/*
	 api.sendFrameToBack ({
	 from: 'identity',
	 to: 'login'
	 });
	 */

	api.openWin({
		name : 'identity_win',
		url : 'identity_win.html',
		animation : {
			type : "push",
			subType : "from_right",
			duration : 700
		}
	});
}

//sendsms发送验证码
function sendsmsSend() {
	sendsms.sendMessage({
		phone : $.trim($phone.val())
	}, function(ret, err) {
		if (ret.result == "ok") {
			api.toast({
				msg : '短信已发送，请注意查收！'
			});
			// 设置120秒才能发送一次
			waitTime();
		} else {
			api.toast({
				msg : '发送失败，请重试!'
			});
		}
	});
}

//sendsms校验验证码
function sendsmsVerify() {
	// 判断验证码是否正确：
	api.showProgress();
	sendsms.enterCode({
		code : $.trim($vercode.val())
	}, function(ret, err) {
		if (ret.result == "ok") {
			clearInterval(flag);
			$btnObj.innerText = '验证通过';
			register($.trim($phone.val()), $.trim($password.val()));
		} else {
			api.hideProgress();
			api.toast({
				msg : '验证码错误'
			});
			$vercode.focus();
		}
	});
}

//mob发送短信验证码
function mobSend() {

	smsVerify.sms({
		phone : $.trim($phone.val()),
		country : "86"
	}, function(ret, err) {
		if (ret.status) {
			if (ret.smart == true) {// 安卓版特有功能 智能验证
				api.alert({
					msg : '智能验证成功：开发者可以在这里直接执行手机号验证成功之后的相关操作'
				});
				mobStatus = true;
				$btnObj.innerText = '验证通过';
				$("#code").val('不用填');
			} else {
				api.toast({
					msg : '短信已发送，请注意查收！'
				});
				waitTime();
			}
		} else {
			api.alert({
				msg : err.code + ' ' + err.msg
			});
		}
	});
}

//mob校验验证码
function mobVerify(number) {
	smsVerify.verify({
		phone : $.trim($phone.val()),
		country : "86",
		code : $.trim($vercode.val())
	}, function(ret, err) {
		if (ret.status) {
			clearInterval(flag);
			$btnObj.innerText = '验证通过';
			if(number==1)register($.trim($phone.val()), $.trim($password.val()));
			else updataPwd();
		} else {
			api.alert({
				msg : err.code + ' ' + err.msg
			});
		}
	});

}

function SKclass(obj, Rate, speed) {
	var oL = obj.offsetLeft - 23;
	var oT = obj.offsetTop;
	this.stop = null;
	this.oTime = null;
	var om = this;

	this.start = function() {
		if (parseInt(obj.style.left) == oL - 2) {

			setTimeout(function() {
				obj.style.left = oL + 2 + "px"
			}, Rate)
		} else {

			setTimeout(function() {
				obj.style.left = oL - 2 + "px"
			}, Rate)
		}
		this.oTime = setTimeout(function() {
			om.start()
		}, speed);
		setTimeout(function() {
			om.stop()
		}, 1000);
	}
	/*
	 this.start=function(){
	 if(parseInt(obj.style.left)==oL-2){
	 obj.style.top=oT+2+"px";
	 setTimeout(function(){obj.style.left=oL+2+"px"},Rate)
	 }
	 else{
	 obj.style.top=oT-2+"px";
	 setTimeout(function(){obj.style.left=oL-2+"px"},Rate)
	 }
	 this.oTime=setTimeout(function(){om.start()},speed);
	 }

	 */

	this.stop = function() {
		clearTimeout(this.oTime);
		obj.style.left = oL + "px";
	}
}

/*
 *
 * 控件震动动画
 * obj控件
 * time震动时间长——短循环长度
 * wh震动幅度px
 * fx动画速度s
 */
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

// 点击显示密码
function showPassword() {
	$api.attr($api.byId('password'), 'type', 'text');
	$api.removeCls($api.byId('showpass-btn'), 'aui-icon-attention');
	$api.addCls($api.byId('showpass-btn'), 'aui-icon-attentionfill');
	$api.attr($api.byId('showpass-btn'), 'onclick', 'hidePassword();');
	api.parseTapmode();
}

function hidePassword() {
	$api.attr($api.byId('password'), 'type', 'password');
	$api.removeCls($api.byId('showpass-btn'), 'aui-icon-attentionfill');
	$api.addCls($api.byId('showpass-btn'), 'aui-icon-attention');
	$api.attr($api.byId('showpass-btn'), 'onclick', 'showPassword();');
	api.parseTapmode();
}

function updataPwd() {

	var model = api.require('model');
	var query = api.require('query');
	model.config({
		appKey : '82E49DBB-8760-3FA8-B542-C9ACBF0F5436',
		appId : "A6904493624093"
	});
	query.createQuery(function(ret, err) {
		if (ret && ret.qid) {
			var queryId = ret.qid;
			var uname = $.trim($phone.val());
			var pwd = $.trim($password.val());
			
			query.whereEqual({
				qid : queryId,
				column : 'username',
				value : uname
			});
			model.findAll({
				class : "user",
				qid : queryId
			}, function(ret, err) {
				if (ret) {
					myid = ret[0].id;
					model.updateById({
						class : 'user',
						id : myid, //'571e03541a54cf09760ee5d7'
						value : {
							password : pwd
						}
					}, function(ret, err) {
						if (ret) {
							alert('修改成功');
							api.closeWin();
						}
					});
				}
				if (err) {
					alert('err');
					alert(JSON.stringify(err));
				}

			});
		}
	});

}


			/*
			 model.findById({
			 class : 'user',
			 id : myid
			 }, function(ret, err) {
			 if (ret) {
			 alert(JSON.stringify(ret));
			 }
			 });
			 */
			/*
			query.whereLike({
			qid:queryId,
			column:'username',
			value:uname
			});
			*/
			
			/*
			model.count({
			class : 'user',
			qid : queryId
			}, function(ret, err) {
			alert(JSON.stringify(ret));
			});
			*/





/*
 function getVerify() {
 var sendVerify = $api.byId('sendVerify');
 var status = $api.attr(sendVerify, 'status');
 if (status != 1) {
 return;
 }
 $api.removeAttr(sendVerify, 'onclick');
 api.parseTapmode();
 $api.html(sendVerify, '<span id="GetVerify">120</span>S');
 times = 119;
 isinerval = setInterval("CountDown()", 1000);
 setTimeout(function() {
 $api.val($api.byId("code"), '888888');
 }, 500)

 }

 function CountDown() {
 if (times < 1) {
 var sendVerify = $api.byId('sendVerify');
 $api.attr(sendVerify, 'onclick', 'get_verify()');
 $api.attr(sendVerify, 'status', '1');
 api.parseTapmode();
 $api.html(sendVerify, '重新获取');
 clearInterval(isinerval);
 return;
 }
 var getVerify = $api.byId('GetVerify');
 $api.html(getVerify, '' + times + '');
 times--;
 }
 */
