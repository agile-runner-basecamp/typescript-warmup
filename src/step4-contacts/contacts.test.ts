// Step 4: 테스트 파일
import { Contact, formatContact, getEmailOrDefault, getCity, mergeContacts, addContact, updateContact, summarize } from "./contacts";

const hong: Contact = {
  name: "홍길동",
  phone: "010-1234-5678",
  email: "hong@test.com",
  address: { city: "서울", street: "강남대로" }
};

const kim: Contact = { name: "김철수", phone: "010-9999-0000" };

describe('formatcontact', () => {
    it('이름 전화번호 변환', () => {
        expect(formatContact(kim)).toBe("김철수 (010-9999-0000)");
    });  
});

describe('getEmailOrDefault', () => {
    it('이메일이 있으면 이메일', () => {
        expect(getEmailOrDefault(hong)).toBe('hong@test.com');
    });

    it('이메일 없으면 이메일 없음', () => {
        expect(getEmailOrDefault(kim)).toBe('이메일 없음');
    });
});

describe("getCity", () => {
  it('주소가 있으면 도시', () => {
    expect(getCity(hong)).toBe("서울");
  });

  it('주소가 없으면 undefined', () => {
    expect(getCity(kim)).toBeUndefined();
  });
});

describe('mergeContacts', () => {
    it('update가 base 덮어씌움', () => {
        const result = mergeContacts(kim, {email: 'kim@test.com'});
        expect(result).toEqual({
            name: '김철수',
            phone: '010-9999-0000',
            email: 'kim@test.com'
        });
    });

    it('원본 불변', () => {
        mergeContacts(kim, {email: 'change@test.com'});
        expect(kim.email).toBeUndefined();
    });
})

describe('addContact', () => {
    it('새연락처 추가 ', () => {
        const list = [hong, kim];
        const result =  addContact(list, { name: "이영희", phone: "010-1111-2222" });
        expect(result).toHaveLength(3)
    });


    it('새연락처 추가 원본 배열 안바뀜', () => {
        const list = [hong, kim];
        addContact(list, { name: "이영희", phone: "010-1111-2222" });
        expect(list).toHaveLength(2)
    });
});

describe('updateContact', () => {
    it('해당이름 연락처만 수정', () => {
        const list = [hong, kim];
        const result = updateContact(list, '김철수', { email: 'new@test.com'});

        expect(result[1].email).toBe('new@test.com');
    })

    it('원본 배열 바뀌지 않음', () => {
        const list = [hong, kim];
        updateContact(list, '김철수', { email: 'new@test.com'});
        
        expect(kim.email).toBeUndefined();
    });
});


describe('summarize', () => {
    it('없으면 없음 반환', () => {
        expect(summarize([])).toBe('연락처 없음');
    });

    it('1명 이름반환', () => {
        expect(summarize([hong])).toBe('홍길동');
    });

    it('연락처 여러명 -> 외 N명', () => {
        expect(summarize([hong,kim])).toBe('홍길동 외 1명');
    });
});