a-better-setTimeout
===================

An improved yet backwards compatible drop-in replacement for JavaScript's built-in setTimeout and setInterval methods.

Tasks:
  Expose:
* time of setXXX call
* type: 0=setTimeout, 1=setInterval
* handler:
* tag: defaults to arguments.caller.toString()
* firstInvTime: time of first invocation
* interval:
* attempted: number of times attempted to run
* completed: number of times completed run
* errors: attempted = completed + errors + "pending"
* xxxxxxxhasRun: returns true if it has run at least once

  New Signature:
* setTimeout(interval, handler, owner, manager), with the new arguments being optional
 
Considerations
* Forward compatibility with timeout manager
* AMD and plain javascript versions

INSTALLATION
============

Install phantomjs. If you're on windows, make sure you add phantomjs.exe's location to your path.

In the home directory, run the tests by 

	phantomjs test/jasmine2-junit-master/src/jasmine2-runner.js test/specrunner.html

based on the jasmine2 runner at https://github.com/sandermak/jasmine2-junit

