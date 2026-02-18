// Step 3: Enum & Type Guard — 주문 상태 관리
// OrderStatus enum을 정의하고, Type Guard 함수를 구현하세요.


// - [ ]  `enum OrderStatus { PENDING, PAID, SHIPPED, DELIVERED }` 정의
// - [ ]  `transition(current, next): OrderStatus` 함수 구현
// - [ ]  `getNextStatuses(current): OrderStatus[]` 함수 구현
// - [ ]  유효/무효 상태 전이 테스트 작성 및 통과


export enum OrderStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
}

export function isOrderStatus(value: unknown): value is OrderStatus {
  return Object.values(OrderStatus).includes(value as OrderStatus);
}

export function getNextStatuses(current: OrderStatus): OrderStatus[] {
    switch (current) {
        case OrderStatus.PENDING:
            return [OrderStatus.PAID];
        case OrderStatus.PAID:
            return [OrderStatus.SHIPPED];
        case OrderStatus.SHIPPED:
            return [OrderStatus.DELIVERED];
        case OrderStatus.DELIVERED:
            return [];
    }
}

export function transition(current: unknown, next:unknown): OrderStatus {
    if (!isOrderStatus(current)) {
        throw new Error('ERROR!! 없는 상태입니다.')
    }

    if (!isOrderStatus(next)) {
        throw new Error('ERROR!! 없는 상태입니다.')
    }

    const allowed = getNextStatuses(current);
    if (!allowed.includes(next)) {
        throw new Error('ERROR!! 순서를 지켜주세요');
    }
    return next;
}