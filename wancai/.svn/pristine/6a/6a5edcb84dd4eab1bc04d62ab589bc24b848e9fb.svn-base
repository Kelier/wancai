function logout() {
/*
	api.showProgress();
	var user = api.require('user');
	user.logout(function(ret, err) {
		api.hideProgress();
		if (ret) {
			api.confirm({
				title : '确定要登出账号?',
				buttons : ['取消', '确定']
			}, function(ret, err) {
				if (ret.buttonIndex == 2) {
					localStorage.removeItem('userId');
					api.execScript({
						name : 'user',
						script : 'checkUserId()'
					});
					api.execScript({
						name : 'root',
						script : 'checkUserId()'
					})
					openLogin();
				} else {
				}
			});
		} else {
			api.toast({
				msg : err.message,
				location : "middle"
			})
		}
	});
	*/
	H.confirmTip(function (ret) {if(ret.buttonIndex=="1"){
	api.openWin({
	    name: 'login_win',
		url : '../../login2.html'
    });
	
	}}, '确认提示：', '您确定要登出账户吗？');
}

//打开登录页
function openLogin() {
	api.openFrame({
		name : 'login',
		url : '../login_System/login.html',
		bounces : false,
		rect : {
			x : 0,
			y : 0,
			w : 'auto',
			h : 'auto'
		},
		animation : {
			type : "fade",
			duration : 700
		}
	});
}

//打开是否身份选择页
function change_win() {
	api.openWin({
		name : 'identity_win',
		url : '../login_System/identity_win.html',
		nimation : {
			type : "movein",
			subType : "from_bottom",
			duration : 1000
		}
	});
}

//打开列表集合
function list_set(type) {
	api.openWin({
		name : 'list_win',
		url : 'list_win.html',
		pageParam : {
			type : type
		},
		nimation : {
			type : "push",
			subType : "from_bottom",
			duration : 700
		}
	});
}
