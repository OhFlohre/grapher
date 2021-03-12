import Token from './Token'
import { OperatorNode, ConstantNode, Node } from './Node'
import tokenize from './tokenize'

function parse(expression: string) {
    let result: Node[] = []
    let stack: Token[] = []
    const tokenGenerator = tokenize(expression)


    for (let token of tokenGenerator) {
        if (token.type === Token.CONSTANT) {
            handleConstants(token.value)
        }
        else if (token.type === Token.OPERATOR) {
        }
        else if (token.type === Token.LEFT_PARENTHESIS) {
        }
    }

    function handleConstants(value: string) {
        let number = parseFloat(value)
        result.push(new ConstantNode(number))
    }

    function handleOperators(value: string) {

    }

    function handleLeftParenthesis() {

    }

    function handleRightParenthesi() {

    }
    //console.log(result, stack)

}

export default parse