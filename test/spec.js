describe('a better setTimeout', function() {
  var NOOP = function() {};

  describe('setTimeout.noConflict()', function() {

    it('can be called to restore the native setTimeout', function() {
      this.betterST = setTimeout.noConflict();
      expect(typeof setTimeout.noConflict).toBe('undefined');
    });

    afterEach(function() {
      if (this.betterST) {
        this.betterST.yesConflict();
      }
    });
  });

  describe('setTimeout.yesConflict()', function() {

    it('can be called to restore a better setTimeout', function() {
      var betterST = setTimeout.noConflict();
      expect(typeof setTimeout.yesConflict).toBe('undefined');

      betterST.yesConflict();
      expect(typeof setTimeout.yesConflict).toBe('function');
    });
  });

  describe('backwards compatibility of a better setTimeout', function() {
    // 
    it('is a function just like the native setTimeout()', function() {
      expect(typeof setTimeout).toBe('function');
    });
    it('returns a handle that can be used in the native clearTimeout()', function() {

    });

    it('takes arguments of (handler, interval)', function(){

    });

    it('takes argument of (string)', function(){

    });

    it('takes arguments of (handler, interval, param1, param2, ...)', function(){

    });

    it('has unspecified behavior when interval < 0', function(){

    })
  });

  describe('setTimeout handle.clear()', function() {
    beforeEach(function(done) {
      this.handle = setTimeout(NOOP, 0);
      done();
    });

    it('setTimeout handle has clear method', function() {
      expect(typeof this.handle.clear).toBe('function');
      //console.log(this.handle);
    });

    it('clears the timeout just like the native clearTimeout', function(){

    });

  });

  describe('setTimeout handle.remove()', function() {
    // This is for dojo this.own() compatibility
    beforeEach(function(done) {
      this.handle = setTimeout(NOOP, 0);
      done();
    });

    it('handle has remove method', function() {
      expect(typeof this.handle.remove).toBe('function');
    });

    it('handle.remove is the same as handle.clear', function() {
      expect(this.handle.remove).toBe(this.handle.clear);
    });

  });

  describe('setTimeout handle.called()', function() {
    beforeEach(function(done) {
      this.handle = setTimeout(NOOP, 0);
      this.now = new Date().getTime();
      this.handle = setTimeout(NOOP, 0);
      done();
    });
    it('should return a number', function() {
      expect(typeof this.handle.called()).toBe('number');
    });
    it('should be close to the present time', function() {
      var diff = this.handle.called() - this.now;
      expect(diff).toBeGreaterThan(-1);
      expect(diff).toBeLessThan(2);
    });
  });

  describe('setTimeout handle.type()', function() {
    beforeEach(function(done) {
      this.handle = setTimeout(NOOP, 0);
      done();
    });
    it('has type method', function() {
      expect(typeof this.handle.type).toBe('function');
    });

    it('returns "timeout" string', function() {
      expect(this.handle.type()).toBe('timeout');
    });
  });

  describe('setTimeout signature change with new optional argument', function() {
    describe('takes an optional array of string tags as the second argument and returns a valid handle', function(){
      it('takes (string, array of string tags)', function(){

      });

      it('takes (function, array of tags, interval, param1, param2, ...)', function(){

      })
    });
  });

  describe('setTimeout handle.tag()', function() {
    it('returns an array of strings', function(){

    });

    it('returns the caller.toString() if no array is passed', function(){

    });

    it('returns the caller.toString() as the first argument if arguments are passed', function(){

    });
  });

  describe('setTimeout handle.firstInvocation()', function() {
    beforeEach(function(done) {
      this.startTime = new Date().getTime();
      this.handle = setTimeout(function() {
        done();
      }, 50);
    });

    it('should return when the function was/is invoked for the very first time', function() {
      expect(this.handle.firstInvocation()).toBeGreaterThan(this.startTime);
    });

    it('should equal handle.called + handle.interval', function(){

    });

  });

  describe('setTimeout handle.firstActualInvocation()', function(){
    it('should return 0 if the function has not yet been invoked', function(){

    });

    it('should return when the function was actually invoked for the very first time', function(){

    });

    it('should always be >= firstInvocation', function(){

    });
  });

  describe('setTimeout handle.interval()', function() {
    beforeEach(function(done) {
      this.handle = setTimeout(NOOP, 15);
      done();
    });
    it('should be the same as the argument', function() {
      expect(this.handle.interval()).toBe(15);
    })
  });

  describe('setTimeout handle.attempted()', function() {
    beforeEach(function(done) {
      this.handle = setTimeout(function() {
        done();
      }, 0);
    });
    it('is a function', function() {
      expect(typeof this.handle.attempted).toBe('function');
    });
    it('should return the number of attempts to run the handler', function() {
      expect(this.handle.attempted()).toBe(1);
    });
  });

  describe('setTimeout handle.completed()', function() {
    beforeEach(function(done) {
      var nativeSetTimeout = setTimeout.yesConflict();
      this.handle = setTimeout(function() {
        // Wait till the next turn in the JS event loop.
        nativeSetTimeout(function() {
          done();
        }, 0);
      }, 0);
    });

    it('is a function that returns the number of times the handler has run', function() {
      expect(typeof this.handle.completed).toBe('function');
    });

    it('and should increment immediately after the handler runs', function() {
      expect(this.handle.completed()).toBe(1);
    });
  });

  describe('a better setTimeout handle.errors()', function() {
    beforeEach(function(done) {
      var nativeSetTimeout = setTimeout.yesConflict();
      this.handle = setTimeout(function() {
        // Wait till the next turn in the JS event loop.
        nativeSetTimeout(function() {
          done();
        }, 0);
        foo; // ReferenceError
      }, 0);
    });

    it('is a function', function() {
      expect(typeof this.handle.errors).toBe('function');
    });

    it('should return the number of times that the handler failed to run', function() {
      expect(this.handle.errors()).toBe(1);
    });
  });

  describe('invariant relationship between completed, error, and  attempted', function(){
    it('should return attempted=0, error=0, and completed=0 just after calling setTimeout', function(){

    });

    it('should should return attempted=1, error=0, and completed=1 after successful invocation', function(){

    });

    it('should return attempted=1, error=1, and completed=0 after unsuccessful invocation', function(){

    });

    it('should obey the invariant relationship attempted + error + completed + (firstActualInvocation > 0 ? 0: 1) === 1', function(){

    });

  })

});