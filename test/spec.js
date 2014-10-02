describe('setTimeout', function(){
  describe('a better setTimeout.noConflict()', function(){
      it('setTimeout is loaded', function(){
        expect(typeof setTimeout.noConflict).toBe('function');
      });
       
  });

  describe('a better setTimeout is backwards compatible', function(){
      // 
      it('setTimeout is a function say', function(){
        expect(typeof setTimeout).toBe('function');
      });
  });
  

  
  describe('a better setTimeout handle.clear()', function(){
    it('setTimeout handle has clear method', function(){
    
    })
  });

  describe('a better setTimeout handle.remove()', function(){
    it('setTimeout handle has remove method', function(){
    
    })
  });
  
  describe('a better setTimeout handle.called()', function(){
    // returns when the setXXX was invoked.
  });

  describe('a better setTimeout handle.type()', function(){
    
  });

  describe('a better setTimeout handle.tag()', function(){
    
  });

  describe('a better setTimeout handle.firstInvocation()', function(){
    
  });
  
  describe('a better setTimeout handle.interval()', function(){
    
  });

  describe('a better setTimeout handle.attempted()', function(){
    
  });

  describe('a better setTimeout handle.completed()', function(){
    
  });
  
  describe('a better setTimeout handle.errors()', function(){
    
  });
  
});