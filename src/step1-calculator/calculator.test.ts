// Step 1: 테스트 파일
// calculator.ts에 구현한 함수를 테스트하세요.

import { calculate } from "./calculator";

describe('calculate', () => {
    it('1 + 1은 2이다', () => {
        expect(calculate(1, 1, '+')).toBe(2);
    });

    it('2-2', () => {
        expect(calculate(2, 2, '-')).toBe(0);
    });

    it('2 * 2', () => {
        expect(calculate(2, 2, '*')).toBe(4);
    });

    it('10/5', () => {
        expect(calculate(10, 5, '/')).toBe(2);
    });

    it('0으로 나눌 수 없다', () => {
        expect(() => calculate(10,0,'/')).toThrow('0으로는 나눌 수 없습니다.');
    });

    it('지원하지 않는 연산자는 에러를 던진다.', () => {
        // @ts-ignore
        expect(() => calculate(10, 5, '%')).toThrow('지원하지 않는 연산자입니다.');
    });
})

