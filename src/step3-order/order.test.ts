// Step 3: 테스트 파일
import { OrderStatus, getNextStatuses, transition } from "./order";

describe("getNextStatuses", () => {
  it("PENDING → [PAID]", () => {
    expect(getNextStatuses(OrderStatus.PENDING)).toEqual([OrderStatus.PAID]);
  });
  it("PAID → [SHIPPED]", () => {
    expect(getNextStatuses(OrderStatus.PAID)).toEqual([OrderStatus.SHIPPED]);
  });
  it("SHIPPED → [DELIVERED]", () => {
    expect(getNextStatuses(OrderStatus.SHIPPED)).toEqual([OrderStatus.DELIVERED]);
  });
  it("DELIVERED → []", () => {
    expect(getNextStatuses(OrderStatus.DELIVERED)).toEqual([]);
  });
});


describe('transition - 유효', () => {
    it('pending -> paid' , () => {
        expect(transition(OrderStatus.PENDING, OrderStatus.PAID)).toBe(OrderStatus.PAID);
    });
    it('paid -> shipped' , () => {
        expect(transition(OrderStatus.PAID, OrderStatus.SHIPPED)).toBe(OrderStatus.SHIPPED);
    });
    it('shipped -> delivered' , () => {
        expect(transition(OrderStatus.SHIPPED, OrderStatus.DELIVERED)).toBe(OrderStatus.DELIVERED);
    });
})


describe('transition - 무효', () => {
    it('pending -> shipped', () => {
        expect(() => transition(OrderStatus.PENDING, OrderStatus.SHIPPED)).toThrow('ERROR!! 순서를 지켜주세요')
    });
    it('없는값', () => {
        expect(() => transition('NONO', OrderStatus.SHIPPED)).toThrow('ERROR!! 없는 상태입니다.')
    });
})