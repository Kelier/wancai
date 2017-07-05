var appId = 'X0000000000000';
var appKey = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';
var host = 'https://d.apicloud.com';
var now = Date.now();
var AppKey = hex_sha1(appId + "UZ" + appKey + "UZ" + now) + "." + now;
//调用hex_sha1函数要先包含附件的sha1.js文件
var appPath = '/mcm/api/XXX_class';
//XXX_class是你要查询的类
var getParam = '?filter[order]=createdAt DESC';
//此处不必用%20替换空格，正序则用ASC
getParam += '&filter[where][yyy]=' + paraVal;
//查询条件
getParam += '&filter[limit]=' + limit;
getParam += '&filter[skip]=' + page * limit;
//limit和skip一起定义数据分页
getParam += '&filter[include]=xxxPointer';
//xxx为pointer字段，则包含时要用xxxPointer，查询结果中名称仍然是xxx，这里要注意
api.ajax({
	url : host + appPath + getParam,
	method : 'get',
	cache : false,
	timeout : 20,
	dataType : 'json',
	returnAll : false,
	headers : {
		"X-APICloud-AppId" : appId,
		"X-APICloud-AppKey" : AppKey
	} //通过头信息进行认证
}, function(ret, err) {
	if (ret) {
		api.alert({
			msg : JSON.stringify(ret)
		});
	} else {
		var err_msg = '错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode;
		api.toast({
			msg : err_msg,
			location : 'middle'
		});
	};
}); 