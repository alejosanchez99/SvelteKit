export function match(param) {
    const regexExpression = /^\d+$/;
    
    return regexExpression.test(param);
}