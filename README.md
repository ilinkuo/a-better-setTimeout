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
* xxxxxxxhasRun: returns true if it has run at least once

  New Signature:
* setTimeout(interval, handler, owner, manager), with the new arguments being optional
 
Considerations
* Forward compatibility with timeout manager
* AMD and plain javascript versions


