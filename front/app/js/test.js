
function addOne(input) {
	return input + 1;
}

var multipyByTwo = function(input_array, addOne) {
	var result = [];
	for (var i = 0; i < input_array.length; i++) {
		result[i] = addOne(input_array[i] * 2);
	}
	return result;
};



multipyByTwo([1,2,3],function(toBeAdded) {
	return toBeAdded + 2;
});

// self-invoking
(function(){
	console.log("hello here");
})();

var foo = function() {
	function setUp() {
		console.log('set up');
	}
	setUp();
	return function() {
		console.log('do the real thing');
	}
}();

foo();