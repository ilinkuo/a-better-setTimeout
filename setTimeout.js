(function(setTimeout, global) {

	// Why are we calling this interval? Shouldn't it be called delay?
	var betterST = function(handler, interval, tags, manager) {
		//var args = Array.prototype.slice.call(arguments, 0);
		var invokedTime, attemptedCount = 0, completedCount = 0;
		var rawHandle = setTimeout(function() {
			invokedTime = new Date().getTime();
            attemptedCount++;
			handler();
			completedCount++;
		}, interval);
		var called = new Date().getTime();

		var handle = {
			type: function() {
                return "timeout";
            },
			rawHandle : rawHandle,
			clear: function() {
                /* functionality to be added */
            },
			firstInvocation: function() {
				return invokedTime;
			},
			called: function() {
				return called;
			},
			attempted: function() {
				return attemptedCount;
			},
			completed: function() {
				return completedCount;
			},
			interval: function() {
				return interval;
			}
		};
		handle.remove = handle.clear;

		return handle;
	};

	betterST.noConflict = function() {
		global.setTimeout = setTimeout;
		return betterST;
	};

	betterST.yesConflict = function() {
		global.setTimeout = betterST;
		return setTimeout;
	};

	global.setTimeout = betterST;

})(setTimeout, window || global);

