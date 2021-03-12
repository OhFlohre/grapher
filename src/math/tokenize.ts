import Token from './Token'

const patterns = [
    [Token.CONSTANT, /\d/],
    [Token.DECIMAL_POINT, /\./],
    [Token.OPERATOR, /[\+|\-|\*|\/|\%|\^]/],
    [Token.LEFT_PARENTHESIS, /\(/],
    [Token.RIGHT_PARENTHESIS, /\)/],
    [Token.EOI, /\$/]
]

export default function* tokenize(expression: string) {
    expression = expression
        .replace(/\s/g, '')
        .replace(/,/g, '.')
        .replace(/\$/g, '')
        + "$"

    let charArray = expression.split('')

    let constantBuffer: string[] = []
    let functionBuffer: string[] = []

    for (let i = 0; i < charArray.length; i++) {
        let char = charArray[i]

        for (let [type, pattern] of patterns) {
            if (pattern instanceof RegExp && typeof type === 'string') {

                if (pattern.test(char)) {
                    if (type === Token.CONSTANT) {
                        constantBuffer.push(char)
                    }
                    else if (type === Token.DECIMAL_POINT && constantBuffer.length > 0) {
                        constantBuffer.push(char)
                    }
                    else {
                        if (constantBuffer.length > 0) {
                            let constant = constantBuffer.join('')
                            constantBuffer = []
                            yield new Token(Token.CONSTANT, constant)
                        }

                        yield new Token(type, char)
                    }
                    break;
                }
            }
        }
    }
}