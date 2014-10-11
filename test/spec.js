describe('a better setTimeout', function(){
  // probably have to test using setTimeout.noConflict()
  
  describe('setTimeout.noConflict()', function(){
      it('is loaded if setTimeout.noConflict exists', function(){
        expect(typeof setTimeout.noConflict).toBe('function');
      });
       
  });

  describe('backwards compatibility of a better setTimeout', function(){
      // 
      it('a better setTimeout is a function just like the native setTimeout()', function(){
        expect(typeof setTimeout).toBe('function');
      });
      it('the returned handle can be used in the native clearTimeout()', function(){
        
      })
  });
  
  describe('setTimeout handle.clear()', function(){
    var handle = setTimeout(function(){}, 0);
    it('setTimeout handle has clear method', function(){
      expect(typeof handle.clear).toBe('function');
      console.log(handle);
    })
  });

  describe('setTimeout handle.remove()', function(){
    // This is for dojo this.own() compatibility
    var handle = setTimeout(function(){}, 0);
    it('handle has remove method', function(){
      expect(typeof handle.remove).toBe('function');
    });
    it('handle.remove is the same as handle.clear', function(){
      expect(handle.remove).toBe(handle.clear);
    })
  });
  
  describe('setTimeout handle.called()', function(){
    // returns when the setXXX was invoked.
  });

  describe('setTimeout handle.type()', function(){
    var handle = setTimeout(function(){}, 0);
    it('handle has type method', function(){
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
    
  });
  
  describe('setTimeout handle.interval()', function(){
    
  });

  describe('setTimeout handle.attempted()', function(){
    
  });

  describe('setTimeout handle.completed()', function(){
    
  });
  
  describe('a better setTimeout handle.errors()', function(){
    
  });
  
});