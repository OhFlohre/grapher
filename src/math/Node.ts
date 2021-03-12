interface Node {
    eval: () => number
}

class OperatorNode implements Node {
    operator: string
    left: Node
    right: Node

    constructor(operator: string, left: Node, right: Node) {
        this.operator = operator
        this.left = left
        this.right = right
    }

    eval() {
        return 0
    }
}

class ConstantNode implements Node {
    value: number

    constructor(value: number) {
        this.value = value
    }

    eval() {
        return this.value
    }
}

export { OperatorNode, ConstantNode }
export type { Node }