describe('a better setTimeout', function(){
  // probably have to test using setTimeout.noConflict()
  
  describe('setTimeout.noConflict()', function(){
      it('is loaded if setTimeout.noConflict exists', function(){
        expect(typeof setTimeout.noConflict).toBe('function');
        throw 'exception'; // testing to see if travis ci picks up this failure.
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
    it('setTimeout handle has clear method', function(){
    
    })
  });

  describe('setTimeout handle.remove()', function(){
    // This is for dojo this.own() compatibility
    it('setTimeout handle has remove method', function(){
    
    })
  });
  
  describe('setTimeout handle.called()', function(){
    // returns when the setXXX was invoked.
  });

  describe('setTimeout handle.type()', function(){
    
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