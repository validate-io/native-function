'use strict';

var isNative = require( './../lib' );

console.log( isNative( Math.sqrt ) );
// returns true

console.log( isNative( String ) );
// returns true

console.log( isNative( Object.prototype.toString ) );
// returns true

console.log( isNative( Int16Array ) );
// returns true

console.log( isNative( function(){} ) );
// returns false

console.log( isNative( null ) );
// returns false
