// Step 1: 타입 기초 — 계산기 함수
// 이 파일에 타입이 있는 계산기 함수를 구현하세요.

type Operator = '+' | '-' | '*' | '/';

export function calculate(a:number, b: number, operator:Operator): number {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/':
            if (b === 0) throw new Error('0으로는 나눌 수 없습니다.');
            return a / b;
        default:
            throw new Error('지원하지 않는 연산자입니다.')
    }
}