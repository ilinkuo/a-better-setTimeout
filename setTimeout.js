window.setTimeout = (function(setTimeout, global){
	
	var betterST = function(){
		setTimeout.call(null,Array.prototype.slice.apply(arguments, 0))
	}
	betterST.noConflict = function(){
		global.setTimeout = setTimeout;
		return betterST;
	};
	return betterST;
})(setTimeout, window || global);

