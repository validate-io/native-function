/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	isNative = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-native-function', function tests() {

	it( 'should export a function', function test() {
		expect( isNative ).to.be.a( 'function' );
	});

	it( 'should negatively validate', function test() {
		var values = [
			'beep',
			5,
			NaN,
			true,
			null,
			undefined,
			[],
			{},
			function(){},
			function beep(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isFalse( isNative( values[i] ), values[i] );
		}
	});

	it( 'should positively validate', function test() {
		var values = [
			Math.sqrt,
			Object.prototype.toString,
			Int16Array,
			// Buffer,
			Array,
			Boolean,
			String,
			Number,
			Math.pow,
			Function,
			eval,
			RegExp,
			Date
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isTrue( isNative( values[i] ), values[i] );
		}
	});

});
