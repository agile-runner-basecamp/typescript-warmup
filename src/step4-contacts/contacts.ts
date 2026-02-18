// Step 4: 구조분해 & 스프레드 — 주소록 관리
// 구조분해 할당, 스프레드 연산자(...), Optional Chaining(?.), Nullish Coalescing(??)을 연습합니다.
// ⚠️ 불변성(immutability) 유지: push() 대신 [...arr, newItem] 사용!


export interface Address {
  city: string;
  street: string;
}

export interface Contact {
  name: string;
  phone: string;
  email?: string;          
  address?: Address;      
}


export function formatContact({name, phone}: Contact):string{
    return `${name} (${phone})`;
}

export function getEmailOrDefault(contact: Contact): string {
    return contact.email ?? '이메일 없음';
}

export function getCity(contact: Contact): string | undefined {
    return contact.address?.city;
}

export function mergeContacts(base: Contact, update: Partial<Contact>): Contact {
    /// Partial<Contact> = Contact의 모든 필드가 선택적
    return {...base, ...update}
}

export function addContact(list: Contact[], contact: Contact): Contact [] {
    return [...list, contact];
}

export function updateContact(list: Contact[], name: string, update: Partial<Contact>): Contact[] {
    return list.map((contact) => {
        if (contact.name === name) {
            return { ...contact, ...update};
        }
        return contact
    });
}

export function summarize(contacts: Contact[]): string {
    if (contacts.length === 0) return '연락처 없음';

    const [first, ...rest] = contacts;

    const {name} = first;

    if (rest.length === 0) {
        return name
    }

    return `${name} 외 ${rest.length}명`
}