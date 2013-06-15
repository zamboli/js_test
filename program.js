
var myObject = {
	count: 0,
	increment: function (inc) {
		this.count += typeof inc === 'number' ? inc : 1;
	}
};
document.writeln(myObject.count);
myObject.increment(9);
document.writeln(myObject.count);
myObject.increment();
document.writeln(myObject.count);




var add = function (a, b) {
	return a + b;
};



myObject.double = function ( ) {
	var that = this;

	var helper = function ( ) {
		that.count = add(that.count, that.count)
	};

	helper( );
};

myObject.double( );
document.writeln(myObject.count);
