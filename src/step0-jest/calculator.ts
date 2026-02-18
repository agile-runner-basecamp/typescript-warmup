// Step 0: 구현 파일
// 이 파일에 calculator 함수들을 구현하세요.

export function add(a: number, b: number): number {
    // TODO: 구현
    return a+b;
}

export function subtract(a: number, b: number): number {
    // TODO: 구현
    return a-b;
}

export function multiply(a: number, b: number): number {
    // TODO: 구현
    return a*b
}

export function divide(a: number, b: number): number {
    // TODO: 구현 (0으로 나누면 에러 던지기)
    if (b === 0) {
        throw new Error('0으로는 나눌 수 없습니다.');
    }
    return a/b;
}
