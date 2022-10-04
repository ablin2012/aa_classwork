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

const has_path_recur = function(graph, src, dst) {
	if (src === dst) return true;
	if (graph[src].length === 0) return false;
	for (let i = 0; i < graph[src].length; i++) { // for (let neighbor of graph[src])
		if (has_path_recur(graph, graph[src][i], dst)) return true;
	}
	return false;
}
