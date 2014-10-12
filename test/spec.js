describe('a better setTimeout', function(){
  var NOOP = function(){};
  // probably have to test using setTimeout.noConflict()
  var betterST;
  
  describe('setTimeout.noConflict()', function(){
      it('is used as an indicator of a better setTimeout', function(){
        expect(typeof setTimeout.noConflict).toBe('function');
      });
       
      it('can be called to restore the native setTimeout', function(){
        betterST = setTimeout.noConflict();
        expect(typeof setTimeout.noConflict).toBe('undefined');
      });
  });

  describe('backwards compatibility of a better setTimeout', function(){
      // 
      it('is a function just like the native setTimeout()', function(){
        expect(typeof betterST).toBe('function');
      });
      it('returns a handle that can be used in the native clearTimeout()', function(){
        
      })
  });
  
  describe('setTimeout handle.clear()', function(){
    beforeEach(function(done) {
        this.handle = betterST(NOOP, 0);
        done();
    });
    it('setTimeout handle has clear method', function(){
      expect(typeof this.handle.clear).toBe('function');
      console.log(this.handle);
    })
  });

  describe('setTimeout handle.remove()', function(){
    // This is for dojo this.own() compatibility
    beforeEach(function(done) {
        this.handle = betterST(NOOP, 0);
        done();
    });
    it('handle has remove method', function(){
      expect(typeof this.handle.remove).toBe('function');
    });
    it('handle.remove is the same as handle.clear', function(){
      expect(this.handle.remove).toBe(this.handle.clear);
    })
  });
  
  describe('setTimeout handle.called()', function(){
    beforeEach(function(done) {
        this.handle = betterST(NOOP, 0);
        this.now = new Date().getTime();
        this.handle = betterST(NOOP,0);
        done();
    });
    it('should return a number', function(){
      expect(typeof this.handle.called()).toBe('number');
    });
    it('should be close to the present time', function(){
      var diff = this.handle.called() - this.now;
      expect(diff).toBeGreaterThan(-1);
      expect(diff).toBeLessThan(2);
    });
  });

  describe('setTimeout handle.type()', function(){
    beforeEach(function(done) {
        this.handle = betterST(NOOP, 0);
        done();
    });
    it('has type method', function(){
      expect(typeof this.handle.type).toBe('function');
    });
  
    it('returns "timeout" string', function(){
      expect(this.handle.type()).toBe('timeout');
    });
  });
  
  describe('setTimeout signature change with two new optional arguments', function(){
    
  });  

  describe('setTimeout handle.tag()', function(){
    
  });

  describe('setTimeout handle.firstInvocation()', function(){
    beforeEach(function(done) {
        this.startTime = new Date().getTime();
        this.handle = betterST(function() {
            done();
        }, 500);
    });

    it('should return when the function was first invoked', function() {
        expect(this.handle.firstInvocation()).toBeGreaterThan(this.startTime);
    });
  });
  
  describe('setTimeout handle.interval()', function(){
    beforeEach(function(done) {
        this.handle = betterST(NOOP, 15);
        done();
    });
    it('should be the same as the argument', function(){
      expect(this.handle.interval()).toBe(15);
    })
  });

  describe('setTimeout handle.attempted()', function(){
    
  });

  describe('setTimeout handle.completed()', function(){
    
  });
  
  describe('a better setTimeout handle.errors()', function(){
    
  });
  
});
