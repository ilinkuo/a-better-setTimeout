(function(setTimeout, global) {
	
	var betterST = function() {
		var args = Array.prototype.slice.call(arguments, 0);
		var rawHandle = setTimeout.apply(null, args);
		var handle = {
			type: function(){ return "timeout";},
			rawHandle : rawHandle,
			clear: function(){ /* functionality to be added */}
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

