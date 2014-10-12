(function(setTimeout, global) {
	
	var betterST = function(handler, interval, tags, manager) {
		//var args = Array.prototype.slice.call(arguments, 0);
		var rawHandle = setTimeout(handler, interval);
		var called = new Date().getTime();
		var handle = {
			type: function(){ return "timeout";},
			rawHandle : rawHandle,
			clear: function(){ /* functionality to be added */},
			called: function(){
				return called;
			},
			interval: function(){
				return interval;
			}
		};
		handle.remove = handle.clear;
		return handle;
	};
	betterST.noConflict = function(){
		global.setTimeout = setTimeout;
		return betterST;
	};
	
	global.setTimeout = betterST;

})(setTimeout, window || global);

