// Step 1: 테스트 파일
// calculator.ts에 구현한 함수를 테스트하세요.

import { calculate } from "./calculator";

describe('calculator', () => {
    const a: number = 2;
    const b: number = 1;

    it('두 수를 더할 수 있다.', () => {
        expect(calculate(a, b, '+')).toBe(3);
    });

    it('두 수를 뺄 수 있다', () => {
        expect(calculate(a, b, '-')).toBe(1);
    });

    it('두 수를 곱할 수 있다.', () => {
        expect(calculate(a, b, '*')).toBe(2);
    });

    it('두 수를 나눌 수 있다.', () => {
        expect(calculate(a, b, '/')).toBe(2);
    })

    it('0으로 나눌 경우 예외가 발생한다.', () => {
        expect(() => calculate(a, 0, '/')).toThrow("0으로 나눌 수 없습니다.");
    })

    it('지원하지 않는 연산자일 경우 예외가 발생한다.', () => {
        expect(() => calculate(a, b, '%' as any)).toThrow("지원하지 않는 연산자입니다.");
    })
})