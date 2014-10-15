describe('a better setTimeout', function() {
	var NOOP = function() {};

	describe('setTimeout.noConflict()', function() {
		it('is used as an indicator of a better setTimeout', function() {
			expect(typeof setTimeout.noConflict).toBe('function');
		});

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
		it('is used to restore to a better setTimeout', function() {
			expect(typeof setTimeout.yesConflict).toBe('function');
		});

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

		})
	});

	describe('setTimeout handle.clear()', function() {
		beforeEach(function(done) {
			this.handle = setTimeout(NOOP, 0);
			done();
		});
		it('setTimeout handle has clear method', function() {
			expect(typeof this.handle.clear).toBe('function');
			console.log(this.handle);
		})
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
		})
	});

	describe('setTimeout handle.called()', function() {
		beforeEach(function(done) {
			this.handle = setTimeout(NOOP, 0);
			this.now = new Date().getTime();
			this.handle = setTimeout(NOOP,0);
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

	describe('setTimeout signature change with two new optional arguments', function() {

	});	

	describe('setTimeout handle.tag()', function() {

	});

	describe('setTimeout handle.firstInvocation()', function() {
		beforeEach(function(done) {
			this.startTime = new Date().getTime();
			this.handle = setTimeout(function() {
				done();
			}, 500);
		});

		it('should return when the function was first invoked', function() {
			expect(this.handle.firstInvocation()).toBeGreaterThan(this.startTime);
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

	});

	describe('setTimeout handle.completed()', function() {
		beforeEach(function(done) {
            var nativeSetTimeout = setTimeout.yesConflict();
			this.handle = setTimeout(function() {
				// Wait till the next turn in the JS event loop.
				nativeSetTimeout(function() { done(); }, 0);
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

	});

});
