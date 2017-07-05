
			var callBtnTexNormal = "Call";
			var callBtnTexIncoming = "Accept";
			var callBtnTexCalling = "Calling";
			var muteStr = "Mute";
			var unmuteStr = "Unmute";
			var loudSpeakerStr = "LoudSpeaker";
			var phoneSpeakerStr = "PhoneSpeaker";
			function onGlobalStatus(data) {
				document.getElementById('globalStatus').innerHTML = data;
			}

			function cbLogStatus(data) {
				if ("OK" == data.substring(0, 2)) {
					var status = data.split("OK:")[1];
					var showStr = "";
					if ("LOGIN" == status) {
						showStr = "Logout";
					} else if ("LOGOUT" == status) {
						showStr = "Login";
					}
					document.getElementById("logBtn").value = showStr;
				} else {
					alert(data);
				}
			}

			function cbCallStatus(data) {
				if ("OK" == data.substring(0, 2)) {
					var status = data.split("OK:")[1];
					var showStr = "";
					if ("NORMAL" == status) {
						showStr = callBtnTexNormal;
					} else if ("INCOMING" == status) {
						showStr = callBtnTexIncoming;
					} else if ("CALLING" == status) {
						showStr = callBtnTexCalling;
					}
					document.getElementById("callBtn").value = showStr;
				} else {
					alert(data);
				}
			}

			function cbRemotePicPath(data) {
				document.getElementById('remotePicPathTx').innerHTML = data;
			}

			function cbMessageStatus(data) {
				alert(data);
			}

			var rtcApi = null;
			apiready = function() {
			
				rtcApi = api.require('tyRTC');
				rtcApi.setGlobalStatusListener(onGlobalStatus);
				rtcApi.setLogStatusListener(cbLogStatus);
				rtcApi.setCallStatusListener(cbCallStatus);
				rtcApi.setRemotePicPathListener(cbRemotePicPath);
				rtcApi.setMessageListener(cbMessageStatus);
			}
			function logResponse() {
				var status = document.getElementById("logBtn").value;
				if ("Login" == status) {
					login();
				} else if ("Logout" == status) {
					rtcApi.logout();
				}
			}

			function callResponse() {
				var status = document.getElementById("callBtn").value;
				var callType = document.getElementById("callType").value;
				var calledUserName = document.getElementById("calledUserName").value;
				var callInfo = document.getElementById("callInfo").value;
				if (callBtnTexNormal == status) {
					rtcApi.call({
						callType : callType,
						callName : calledUserName,
						callInfo : callInfo
					});
				} else if (callBtnTexIncoming == status) {
					rtcApi.acceptCall({
						callType : callType
					});
				}
			}

			function mute() {
				var status = document.getElementById("muteBtn").value;
				if (muteStr == status) {
					rtcApi.mute({
						value : "true"
					});
					document.getElementById("muteBtn").value = unmuteStr;
				} else if (unmuteStr == status) {
					rtcApi.mute({
						value : "false"
					});
					document.getElementById("muteBtn").value = muteStr;
				}
			}

			function loudSpeaker() {
				var status = document.getElementById("loudSpeakerBtn").value;
				if (loudSpeakerStr == status) {
					rtcApi.loudSpeaker({
						value : "true"
					});
					document.getElementById("loudSpeakerBtn").value = phoneSpeakerStr;
				} else if (phoneSpeakerStr == status) {
					rtcApi.loudSpeaker({
						value : "false"
					});
					document.getElementById("loudSpeakerBtn").value = loudSpeakerStr;
				}
			}

			function setAppKeyAndAppId() {
				var appKey = document.getElementById("AppKeytb").value;
				var appId = document.getElementById("AppIdtb").value;
				rtcApi.setAppKeyAndAppId({
					appId : appId,
					appKey : appKey
				});
			/*	var setparam = {
					appId : "70038",
					appKey : "MTQxMDkyMzU1NTI4Ng=="
				};
				rtcApi.setAppKeyAndAppId(setparam);*/
			
			}

			function login() {
				var x1 = document.getElementById("axis1").value;
				var y1 = document.getElementById("ordinate1").value;
				var w1 = document.getElementById("width1").value;
				var h1 = document.getElementById("hight1").value;
				var x2 = document.getElementById("axis2").value;
				var y2 = document.getElementById("ordinate2").value;
				var w2 = document.getElementById("width2").value;
				var h2 = document.getElementById("hight2").value;
				var jsonObj1 = {};
				jsonObj1.x = x1;
				jsonObj1.y = y1;
				jsonObj1.w = w1;
				jsonObj1.h = h1;
				var jsonObj2 = {};
				jsonObj2.x = x2;
				jsonObj2.y = y2;
				jsonObj2.w = w2;
				jsonObj2.h = h2;
				var json = {};
				json.localView = jsonObj1;
				json.remoteView = jsonObj2;
				var jsonStr = JSON.stringify(json);
				var userName = document.getElementById("userName").value;
				rtcApi.login({
					jsonViewConfig : jsonStr,
					userName : userName
				});
			}

			function setVideoAttr() {
				var videoAttr = document.getElementById("videoAttr").value;
				rtcApi.setVideoAttr({
					value : videoAttr
				});
			}

			function takeRemotePicture() {
				rtcApi.takeRemotePicture();
			}

			function sendMsg() {
				var calledUserName = document.getElementById("calledUserName").value;
				var message = document.getElementById("message").value;
				rtcApi.sendMessage({
					userName : calledUserName,
					msg : message
				});
			}

			function switchCam() {
				var camera = document.getElementById("switchCamera").value;
				if (camera == "back")
					document.getElementById("switchCamera").value = "front";
				else if (camera == "front")
					document.getElementById("switchCamera").value = "back";
				rtcApi.switchCamera({
					value : camera
				});
			}

			function rotateCam() {
				var angle = document.getElementById("angle").value;
				rtcApi.rotateCamera({
					value : angle
				});
			}
