(function(setTimeout, global){
	
	var betterST = function(){
		setTimeout.call(null,Array.prototype.slice.apply(arguments, 0))
	}
	betterST.noConflict = function(){
		global.setTimeout = setTimeout;
		return betterST;
	};
	
	global.setTimeout = betterST;

})(setTimeout, window || global);

