var appid = 'A6904201313775';
var appkey = "A37A6022-56C7-78F8-56B2-A4FD8B8947F4";
function getAppkeyInSha1() {
	var now = Date.now();
	var appKeySha1 = SHA1(appid + "UZ" + appkey + "UZ" + now) + "." + now;
	return appKeySha1;
}

function getVercode() {
	api.ajax({
		url : 'https://d.apicloud.com/mcm/api/user',
		method : 'get',
		headers : {
			"Content-Type" : "application/json",
			"X-APICloud-AppId" : appid,
			"X-APICloud-AppKey" : getAppkeyInSha1()
		},
		dataType : 'json'
	}, function(ret, err) {
		//coding...
	});

}

function getVercode() {
	$.ajax({
		"url" : "https://d.apicloud.com/mcm/api/user/sendvercode",
		"method" : "POST",
		"cache" : false,
		"headers" : {
			"X-APICloud-AppId" : "{{" + appid + "}}",
			"X-APICloud-AppKey" : "{{" + getAppkeyInSha1() + "}}"
		},
		"data" : {
			"mobile" : "{{" + $phone.val() + "}}"
		}
	}).success(function(data, status, header) {
		//success body
		alert("发送成功");
	}).fail(function(header, status, errorThrown) {
		//fail body
		alert(JSON.stringify(ret) + JSON.stringify(err));
	})
}

function test233() {
api.alert({
			msg :  appid+" "+ getAppkeyInSha1()
		});
	api.ajax({
		url : 'https://d.apicloud.com/mcm/api/user/login',
		method : 'post',
		cache : false,
		dataType : 'json',
		headers : {
	//		"Content-Type" : "application/json",
			"X-APICloud-AppId" : appid,
			"X-APICloud-AppKey" : getAppkeyInSha1()
		},
		data : {
			values : {
				username : '13022297135',
				password : '258'
			}
		}
	}, function(ret, err) {
		var msg = JSON.stringify(ret);
		if (err) {
			msg = JSON.stringify(err);
		}
		api.alert({
			msg : msg
		});
	});
}

function Ajax_login2() {
	$.ajax({
		"url" : "https://d.apicloud.com/mcm/api/user/login",
		"method" : "POST",
		"cache" : false,
		"headers" : {
			"X-APICloud-AppId" : appid,
			"X-APICloud-AppKey" : getAppkeyInSha1()
		},
		"data" : {
			"username" : '13022297135', // $.trim($phone.val()),
			"password" : '258'// $.trim($password.val())
		}
	}).success(function(data, status, header) {
		alert(JSON.stringify(data));
	}).fail(function(header, status, errorThrown) {
		alert(JSON.stringify(header));
	})
}

function Ajax_register2() {
	$.ajax({
		"url" : "https://d.apicloud.com/mcm/api/user",
		"method" : "POST",
		"cache" : false,
		"headers" : {
			"X-APICloud-AppId" : appid,
			"X-APICloud-AppKey" : getAppkeyInSha1()
		},
		"data" : {
			"email" : "111",
			"username" : $.trim($phone.val()),
			"password" : $.trim($password.val())
		}
	}).success(function(data, status, header) {
		alert(JSON.stringify(data));
	}).fail(function(header, status, errorThrown) {
		alert(JSON.stringify(header));
	})
}

function Ajax_updata2() {
	var filter = {
		"where" : {
			"username" : "13022297135"
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
				"password" : '258',
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

function Ajax_logout2() {
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

function Ajax_query() {
	var filter = {
		/*
		fields : {
		"id" : true,
		"make" : true,
		"model" : true

		}//或者["id","make","model"]

		*/
		//条数过滤语句 limit:5
		//条件查询
		"where" : {
			"username" : "13022297135"
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
		alert(JSON.stringify(data));
	}).fail(function(header, status, errorThrown) {

	})
}

function fnRegister() {
	var username = $api.byId('userName').value, password = $api.byId('password').value;

	api.ajax({
		url : "http://nxt.wei800.com/api/Mall/Account/UseInfo.ashx",
		method : 'post',
		timeout : 30,
		dataType : 'json',
		"data" : {
			"userName" : "112",
			"password" : "1234",
			"Action" : "AddUserInfo",
			"TokenId" : "200900"
		}
	}, function(ret, err) {
		if (ret) {
			aler(json.stringify(ret));
		} else {
			api.alert({
				msg : ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)
			});
		};
	});

}

