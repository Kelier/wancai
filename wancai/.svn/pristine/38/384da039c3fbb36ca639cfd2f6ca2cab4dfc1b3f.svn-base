/**
 * Fyll.js
 * Distributed under MIT license.
 * Source: https://github.com/nicklassandell/Fyll.js
*/
;(function() {
	"use strict";

	window.fyll = {

		// 默认的配置
		config: {
			actionDelay: 500,
			keyPressInterval: 100,
			humanisePressInterval: true,
			focusClass: 'fyll-focus',
			complete: false
		},

		// 初始化
		go: function(query, config) {

			// 确保它没有运行
			if(this.isRunning) {
				console.warn('Fyll: Only one instance of Fyll can be run at once.');
				return false;
			}

			// 提供配置默认合并
			if(typeof config === 'object') {
				this.config = this.helpers.mergeObjects(this.config, config);
			}
			// 如果获得通过，将它设置为回调函数
			else if(typeof config === 'function') {
				this.config.complete = config;
			}

			this.isRunning = true;
			this.queue = this.parseQuery(query);
			this.readQueue();
		},

		// 活套；发起的每一个动作和调用下一个
		// 同时负责中间停顿。
		readQueue: function() {
			var fyll = window.fyll;
			
			// 队列是空的吗？如果是这样，运行“完全”回调
			if(!fyll.queue.length) {
				if(typeof fyll.config.complete === 'function') {
					fyll.config.complete();
				}
				fyll.isRunning = false;
				return false;
			}

			var next = fyll.queue.pop(),
				instr = fyll.parseInstruction(next),
				action = fyll.actions[instr.action];

			// 行动是否存在？
			if(typeof action === 'object') {
				action.execute(instr.value, function() {

					// 只要有任何指示离开，继续
					if(fyll.queue.length > 0) {

						// Default pause is 0ms
						var pauseAfter = 0;

						if(action.pauseAfter) {
							pauseAfter = fyll.config.actionDelay;
						}
						setTimeout(fyll.readQueue, pauseAfter);
					
					// 这是最后一个，没有必要暂停
					} else {
						fyll.readQueue();
					}
				});

			// 行动不存在，让我们继续，但抛出一个错误
			} else {
		//		console.error('Fyll: The specified action `'+ instr.action +'` does not exist.');
				fyll.readQueue();
			}
		},

		// 解析成小的指令完全查询
		parseQuery: function(instr) {
			var then = instr.split('then');
			
			for(var i=0; i < then.length; ++i) {
				then[i] = this.helpers.betterTrim(then[i]);
			}
			return then.reverse();
		},

		// 解析单指令行动/值对
		parseInstruction: function(query) {
			var kv = query.split(' '),
				res = {};

			res.action = kv[0];
			res.value = kv[1];

			return res;
		},

		// 得到按时间间隔
		// 依赖config.humanisepressinterval
		getPressInterval: function() {
			var interval = this.config.humanisePressInterval ? this.config.keyPressInterval + ((Math.random()*1.5-.5)*100) : this.config.keyPressInterval;
			return interval;
		},


		// Various helpers
		helpers: {
			betterTrim: function(text) {
				return text.replace(/\s+(?=\s)/g, '').trim();
			},
			mergeObjects: function (originalObject, objectToAppend) {
			    for (var item in objectToAppend) {
			        if (objectToAppend.hasOwnProperty(item)) {
			            originalObject[item] = objectToAppend[item];
			        }
			    }
			    return originalObject;
			}
		},


		// 行动助手
		actionHelpers: {
			setFocus: function(target, callback) {
				var fyll = window.fyll;

				// Add focus class
				target.className += ' ' + fyll.config.focusClass;

				// Wait a keystroke after focus
				if(typeof callback === 'function') {
					setTimeout(callback, fyll.getPressInterval());
				}
			},
			removeFocus: function(target, callback) {
				var fyll = window.fyll;

				setTimeout(function() {
					target.className = target.className.replace(fyll.config.focusClass, '');

					if(typeof callback === 'function') {
						callback();
					}
				}, fyll.getPressInterval());
			}
		},


		// 所有可用的操作都在这里。这个对象可以扩展
		actions: {

			// Fill a text field
			fill: {
				pauseAfter: true,
				execute: function(value, callback) {
					var fyll = window.fyll,
						target = document.getElementById(value);

					if(!target) {
						console.warn('Fyll: The specified target `'+ value +'` does was not found.');
						callback();
						return false;
					}

					// 重置目标值
					target.value = '';

					var fillValue = target.getAttribute('data-fyll');

					// 检查是否有一个值来填充
					if(fillValue) {
						var letters = fillValue.split('').reverse();

						// 等待按键后焦点
						fyll.actionHelpers.setFocus(target, function() {

							// 函数运行的每个按键
							var pressFunc = function() {
								target.value += letters.pop();

								// 最后一封信，让我们来运行这个回调
								if(letters.length < 1) {
									fyll.actionHelpers.removeFocus(target);
									callback();

								// 不是最后一封信，让我们自己调用
								} else {
									setTimeout(pressFunc, fyll.getPressInterval());
								}
							}

							// 呼叫媒体。它会自动调用。
							pressFunc();
						});

					// 没有填充值被连接到元素
					} else {
						console.warn('Fyll: No fill value was attached to element #' + value);
						callback();
					}
				}
			},

			// 单击一个按钮
			click: {
				pauseAfter: true,
				execute: function(value, callback) {
					var fyll = window.fyll,
						target = document.getElementById(value);

					if(!target) {
						console.warn('Fyll: The specified target `'+ value +'` does was not found.');
						callback();
						return false;
					}

					fyll.actionHelpers.setFocus(target, function() {
						fyll.actionHelpers.removeFocus(target, function() {
							callback();
						});
					});
				}
			},

			// 切换复选框/单选框
			toggle: {
				pauseAfter: true,
				execute: function(value, callback) {
					var fyll = window.fyll,
						target = document.getElementById(value);

					if(!target) {
						console.warn('Fyll: The specified target `'+ value +'` does was not found.');
						callback();
						return false;
					}

					if(typeof target.checked === 'boolean') {
						target.checked = !target.checked;
					}
					callback();
				}
			},

			// 在继续前暂停指定时间
			pause: {
				pauseAfter: false,
				execute: function(value, callback) {
					setTimeout(callback, value);
				}
			}
		}
	};

})();