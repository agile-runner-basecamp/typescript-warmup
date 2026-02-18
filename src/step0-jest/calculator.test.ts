import { add, divide, multiply, subtract } from './calculator'; 

// Step 0: Jest 테스트 기초
// 이 파일에서 describe / it / expect 사용법을 연습합니다.

describe('calculator', () => {
    // TODO: 아래 테스트를 완성하세요

    it('1 + 1은 2이다', () => {
        expect(add(1, 1)).toBe(2);
    });

    it('2 - 2는 0이다.', () => {
        expect(subtract(2,2)).toBe(0);
    });

    it('2 * 2는 4이다.', () => {
        expect(multiply(2,2)).toBe(4);
    });

    it('4 / 2는 2이다.', () => {
        expect(divide(4,2)).toBe(2);
    });

    it('4 는 0으로 나눌 수 없다.', () => {
        expect(() => divide(4,0)).toThrow('0으로는 나눌 수 없습니다.');
    });
});


