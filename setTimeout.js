(function(setTimeout, global) {
	
	var betterST = function() {
		var rawHandle = setTimeout.apply(null, Array.prototype.slice.call(arguments, 0));
		return {
			rawHandle : rawHandle
		};
	};
	betterST.noConflict = function(){
		global.setTimeout = setTimeout;
		return betterST;
	};
	
	global.setTimeout = betterST;

})(setTimeout, window || global);

