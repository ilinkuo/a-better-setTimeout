describe('a better setTimeout', function(){
  var NOOP = function(){};
  // probably have to test using setTimeout.noConflict()
  
  describe('setTimeout.noConflict()', function(){
      it('is used as an indicator of a better setTimeout', function(){
        expect(typeof setTimeout.noConflict).toBe('function');
      });
       
  });

  describe('backwards compatibility of a better setTimeout', function(){
      // 
      it('is a function just like the native setTimeout()', function(){
        expect(typeof setTimeout).toBe('function');
      });
      it('returns a handle that can be used in the native clearTimeout()', function(){
        
      })
  });
  
  describe('setTimeout handle.clear()', function(){
    var handle = setTimeout(NOOP, 0);
    it('setTimeout handle has clear method', function(){
      expect(typeof handle.clear).toBe('function');
      console.log(handle);
    })
  });

  describe('setTimeout handle.remove()', function(){
    // This is for dojo this.own() compatibility
    var handle = setTimeout(NOOP, 0);
    it('handle has remove method', function(){
      expect(typeof handle.remove).toBe('function');
    });
    it('handle.remove is the same as handle.clear', function(){
      expect(handle.remove).toBe(handle.clear);
    })
  });
  
  describe('setTimeout handle.called()', function(){
    var now = new Date().getTime();
    var handle = setTimeout(NOOP,0);
    it('should return a number', function(){
      expect(typeof handle.called()).toBe('number');
    });
    it('should be close to the present time', function(){
      var diff = handle.called() - now;
      expect(diff).toBeGreaterThan(-1);
      expect(diff).toBeLessThan(2);
    });
  });

  describe('setTimeout handle.type()', function(){
    var handle = setTimeout(NOOP, 0);
    it('has type method', function(){
      expect(typeof handle.type).toBe('function');
    });
  
    it('returns "timeout" string', function(){
      expect(handle.type()).toBe('timeout');
    });
  });
  
  describe('setTimeout signature change with two new optional arguments', function(){
    
  });  

  describe('setTimeout handle.tag()', function(){
    
  });

  describe('setTimeout handle.firstInvocation()', function(){
    var handle, startTime = new Date().getTime();

    beforeEach(function(done) {
        handle = setTimeout(function() {
            done();
        }, 500);
    });

    it('should return when the function was first invoked', function() {
        expect(handle.firstInvocation()).toBeGreaterThan(startTime);
    });
  });
  
  describe('setTimeout handle.interval()', function(){
    var handle = setTimeout(NOOP, 15);
    it('should be the same as the argument', function(){
      expect(handle.interval()).toBe(15);
    })
  });

  describe('setTimeout handle.attempted()', function(){
    
  });

  describe('setTimeout handle.completed()', function(){
    
  });
  
  describe('a better setTimeout handle.errors()', function(){
    
  });
  
});
