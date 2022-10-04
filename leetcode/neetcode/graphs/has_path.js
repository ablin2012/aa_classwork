const has_path = function(graph, src, dst) { // f, k
	let stack = [src];  // [g, g, k]
	while(stack.length) {
		let curr = stack.pop(); // f i k
		if (curr === dst) return true;
		for (let i = 0; i < graph[curr].length; i++) {
			stack.push(graph[curr][i]);
		}
	}
	return false;
}
