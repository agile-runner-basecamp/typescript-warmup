// Step 0: Jest 테스트 기초
// 이 파일에서 describe / it / expect 사용법을 연습합니다.

import { add, divide, multiply, subtract } from "./calculator";

describe('calculator', () => {
    // TODO: 아래 테스트를 완성하세요
    // given
    const a: number = 1;
    const b: number = 2;

    // when + then
    it('덧셈을 수행한다.', () => {
        expect(add(a, b)).toBe(3);
    });

    it('뺄셈을 수행한다.', () => {
        expect((subtract(a, b))).toBe(-1);
    });

    it('두 수를 곱한다.', () => {
        expect((multiply(a, b))).toBe(2);
    });

    it('0이 아닌 수로 나눌 수 있다.', () => {
        expect((divide(a, b))).toBe(0.5);
    })

    it('0으로 나눌 경우 예외가 발생한다.', () => {
        expect(() => divide(a, 0)).toThrow('0으로 나눌 수 없습니다.');
    })
});
