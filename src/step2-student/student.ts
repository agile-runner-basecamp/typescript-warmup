// Step 2: Interface & 배열 메서드 — 학생 성적 관리
// interface Student를 정의하고, 배열 메서드(map, filter, reduce 등)로 함수를 구현하세요.
// ⚠️ for 루프 사용 금지!

export interface Student {
    name: string;
    score: number;
}

const checkEmpty = (students: Student[]) => {
    if (students.length === 0) throw new Error('학생 목록이 비어있습니다.');
};

export function getAverage(students: Student[]): number {
    checkEmpty(students);
    return students.reduce((sum, s) => sum + s.score, 0) / students.length;
}

export function getTopStudent(students: Student[]): Student {
    checkEmpty(students);
    return students.reduce((top, s) => s.score > top.score ? s : top);
}

export function getFailedStudents(students: Student[]): Student[] {
    checkEmpty(students);
    return students.filter(s => s.score < 60);
}

export function getNames(students: Student[]): string[] {
    checkEmpty(students);
    return students.map(s => s.name);
}

export function sortByScore(students: Student[]): string[] {
    checkEmpty(students);
    return [...students]
        .sort((a,b) => b.score - a.score)
        .map(s => `${s.name}(${s.score})`);
}

export function hasFailedStudent(students: Student[]): boolean {
    checkEmpty(students);
    return students.some(s => s.score < 60);
}

export function isAllPassed(students: Student[]): boolean {
    checkEmpty(students);
    return students.every(s => s.score >= 60);
}

export function findByName(students: Student[], name: string): Student | undefined {
    checkEmpty(students);
    return students.find(s => s.name === name);
}