jQuery(document).ready(function($) {
	//cache some jQuery objects
	var modalTrigger1 = $('.cd-modal-trigger1'), modalTrigger2 = $('.cd-modal-trigger2'), modalTrigger3 = $('.cd-modal-trigger3'), modalTrigger4 = $('.cd-modal-trigger4'), transitionLayer = $('.cd-transition-layer'), transitionBackground = transitionLayer.children(), modalWindow = $('.cd-modal');

	var frameProportion = 1.78, //png frame aspect ratio
	frames = 25, //number of png frames
	resize = false;

	//set transitionBackground dimentions
	setLayerDimensions();
	$(window).on('resize', function() {
		if (!resize) {
			resize = true;
			(!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
		}
	});

	//open modal window
	modalTrigger1.on('click', function(event) {
		userName = $("#real-name").val();	
		gender = parseInt($("input[name='r1']:checked").val());
		if(userName.length==0){
		api.toast({
	        msg:'请输入真实姓名'
        });
			
		}else{
		 api.setPrefs({
    		key: 'Username',
   	    	value: userName
			});
			
		api.setPrefs({
    		key: 'Gender',
   	    	value: gender
			});
		event.preventDefault();
		transitionLayer.addClass('visible opening');
		var delay = ($('.no-cssanimations').length > 0 ) ? 0 : 600;
		setTimeout(function() {
			modalWindow.addClass('visible');
		}, delay);
		setTimeout(function() {
			self.location = 'transition2.html';
		}, 1000);
		}
		
	});
	modalTrigger2.on('click', function(event) {
	degree=parseInt(jQuery("#degree-select  option:selected").val());
	expectSalary=parseInt(jQuery("#expect-salary  option:selected").val());
	workyear=parseInt(jQuery("#work-year  option:selected").val());
	
	api.setPrefs({
    		key: 'degree',
   	    	value: degree
			});
		api.setPrefs({
    		key: 'expectSalary',
   	    	value: expectSalary
			});
		api.setPrefs({
    		key: 'workyear',
   	    	value: workyear
			});
			
		event.preventDefault();
		transitionLayer.addClass('visible opening');
		var delay = ($('.no-cssanimations').length > 0 ) ? 0 : 600;
		setTimeout(function() {
			modalWindow.addClass('visible');
		}, delay);
			
		api.showProgress({
        });		
		updateResume_tra1();
			
	});

	modalTrigger3.on('click', function(event) {
		event.preventDefault();
		transitionLayer.addClass('visible opening');
		var delay = ($('.no-cssanimations').length > 0 ) ? 0 : 600;
		setTimeout(function() {
			modalWindow.addClass('visible');
		}, delay);
		setTimeout(function() {
			self.location = '../person_System/person_win2.html';
		}, 2000);
	});

	//close modal window
	modalWindow.on('click', '.modal-close', function(event) {
		event.preventDefault();
		transitionLayer.addClass('closing');
		modalWindow.removeClass('visible');
		transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
			transitionLayer.removeClass('closing opening visible');
			transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

	function setLayerDimensions() {
		var windowWidth = $(window).width(), windowHeight = $(window).height(), layerHeight, layerWidth;

		if (windowWidth / windowHeight > frameProportion) {
			layerWidth = windowWidth;
			layerHeight = layerWidth / frameProportion;
		} else {
			layerHeight = windowHeight * 1.2;
			layerWidth = layerHeight * frameProportion;
		}

		transitionBackground.css({
			'width' : layerWidth * frames + 'px',
			'height' : layerHeight + 'px',
		});

		resize = false;
	}

	//完善数据更新
	var userName, gender, ResumeId,degree,expectSalary,workyear;
	apiready = function() {
		api.getPrefs({
			key : 'resumeId'
		}, function(ret, err) {
			if (ret) {
				ResumeId = ret.value;
		
			}
		});
		
		api.getPrefs({
				key : 'Username'
			}, function(ret, err) {
					 userName=ret.value;			
			});
		api.getPrefs({
				key : 'Gender'
			}, function(ret, err) {
					 gender=ret.value;			
			});
	    api.getPrefs({
				key : 'degree'
			}, function(ret, err) {
					 degree=ret.value;			
			});
		api.getPrefs({
				key : 'expectSalary'
			}, function(ret, err) {
					 expectSalary=ret.value;			
			});
		api.getPrefs({
				key : 'workyear'
			}, function(ret, err) {
					 workyear=ret.value;			
			});
		
	}
	

	function updateResume_tra1() {
		var soapXML = "<soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>" + "<soap:Body>" + 
			"<UpdateResumeBasicInfo  xmlns='http://tempuri.org/'>" + 
			"<resumeId>" + ResumeId + "</resumeId>" + 
			"<resumeName>我的简历</resumeName>" + 
			"<userName>"+userName+"</userName>" + 
			"<gender>"+gender+"</gender>" + 
			"<marriage>2</marriage>" + 
			"<birthday>2000-01-01</birthday>" + 
			"<degree>"+degree+"</degree>" + 
			"<location>3202</location>" + 
			"<workyear>0</workyear>" + 
			"<mobile>13022297135</mobile>" + 
			"<email>1025398501@qq.com</email>" + 
			"<politicalStatus>5</politicalStatus>" + 
			"<selfEvalation>简历描述</selfEvalation>" + 
			"</UpdateResumeBasicInfo>" + "</soap:Body>" + "</soap:Envelope>";
		
		$.ajax({
			url : "http://58.215.179.167/ResumeManageInterface.asmx?op=UpdateResumeBasicInfo",
			type : "POST",
			dataType : "xml",
			contentType : "text/xml; charset=utf-8",
			data : soapXML,
			complete : endupdateResume_tra1
			
		});
		
	}

	function endupdateResume_tra1(xmlHttpRequest, status) {
		var json = $(xmlHttpRequest.responseXML).find('UpdateResumeBasicInfoResult').text();
		alert(JSON.stringify(json));
		var data = JSON.parse(json);
		if (data.result == 'true') {
		UpdateJobObjective()
		
		} else {
			api.hideProgress();
			api.toast({
				msg : '信息更新失败'
			});
		}
	}
	
			function UpdateJobObjective() {
			var soapXML = "<soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>" +
		    "<soap:Body>" + 
			"<UpdateJobObjective   xmlns='http://tempuri.org/'>" + 
			"<expectIndustryType>计算机软件</expectIndustryType>" + 
			"<expectjob>1101</expectjob>" + 
			"<expectlocation>3202</expectlocation>" + 
			"<jobnature>1</jobnature>" + 
			"<expectSalary>"+expectSalary+"</expectSalary>" + 
			"<resumeId>" + ResumeId + "</resumeId>" + 
			"</UpdateJobObjective>" + "</soap:Body>" + "</soap:Envelope>";
			
			$.ajax({
				url : "http://58.215.179.167/ResumeManageInterface.asmx?op=UpdateJobObjective",
				type : "POST",
				dataType : "xml",
				contentType : "text/xml; charset=utf-8",
				data : soapXML,
				complete : endUpdateJobObjective
			});
		}

		function endUpdateJobObjective(xmlHttpRequest, status) {
			var json = $(xmlHttpRequest.responseXML).find('UpdateJobObjectiveResult').text();
			var data = JSON.parse(json);
			if(data.result=='true'){
			//alert('更新期望成功');
			setTimeout(function() {
			api.hideProgress();
			self.location = '../person_System/person_win2.html';
			}, 1000);
			}else{
			api.hideProgress();
			api.toast({
	            msg:'简历修改失败'
            });
			}
		}
	

});
