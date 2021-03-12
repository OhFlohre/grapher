class Token {
    static CONSTANT = "CONSTANT"
    static DECIMAL_POINT = "DECIMAL_POINT"
    static OPERATOR = "OPERATOR"
    static LEFT_PARENTHESIS = "LEFT_PARENTHESIS"
    static RIGHT_PARENTHESIS = "RIGHT_PARENTHESIS"
    static EOI = "EOI"

    type: string
    value: string

    constructor(type: string, value: string) {
        this.type = type
        this.value = value
    }
}

export default Token