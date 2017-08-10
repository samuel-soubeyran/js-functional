var TreeFunctor = function(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

TreeFunctor.of = function(value) {
	var tree = Array.prototype.slice.call(arguments);
	var map = [];
	var node = null;
	for(var i = 0; i < tree.length; i++) {
		node = new TreeFunctor(tree[i]);
		map[i] = node;
		parentIndex = Math.floor((i-1)/2);
		if(parentIndex >= 0) {
			i & 1 ? map[parentIndex].left = node : map[parentIndex].right = node;
		}
	}
	return map[0];
}

TreeFunctor.prototype.map = function(f) {

}

TreeFunctor.prototype.toString = function() {
	s = "( ";
	if (this.value) {
		s += this.value;
	}
	if (this.left) {
		s += " " + this.left.toString();
	}
	if (this.right) {
		s += " " + this.right.toString();
	}
	s += " )";
	return s;
}


module.exports = TreeFunctor;