class ProjectNode {
    constructor(value) {
        this.value = value;
        this.dependencies = {};
        this.dependents = [];
        this.visited = false;
    }

    hasDependencies(){
        if (Object.keys(this.dependencies).length === 0) {
            return false;
        }
        return true;
    }

    addDependent(node) {
        this.dependents.push(node);
    }

    addDependency(node) {
        this.dependencies[node] = true;
    }

    deleteDependency(node) {
        if (this.dependencies[node]) {
            delete this.dependencies[node];
        }
    }
}

const buildOrder = function(nodes) {
    let order = [];
    while (order.length < nodes.length) {
        for (let i = 0; i < nodes.length; i++) {
            if (!nodes[i].hasDependencies() && !nodes[i].visited) {
                order.push(nodes[i]);
                nodes[i].visited = true;
                let dependents = nodes[i].dependents;
                for (let j = 0; j < dependents.length; j++) {
                    dependents[j].deleteDependency(nodes[i]);
                }
            }
        }
    }
    return order;
}