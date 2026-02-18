// Step 2: Interface & 배열 메서드 — 학생 성적 관리
// interface Student를 정의하고, 배열 메서드(map, filter, reduce 등)로 함수를 구현하세요.
// ⚠️ for 루프 사용 금지!

export interface Student {
    name: string,
    score: number
};

function validateNotEmpty(students: Student[]) {
    if (students.length === 0) {
        throw new Error("학생 목록이 비어있습니다.");
    }
}

export function getAverage(students: Student[]): number {
    validateNotEmpty(students);
    const sum = students.reduce((sum, n) => sum + n.score, 0);
    return sum / students.length;
}

export function getTopStudents(students: Student[]): Student {
    validateNotEmpty(students);
    const sortedStudents: Student[] = [...students].sort((a, b) => b.score - a.score);
    return sortedStudents[0];
}

export function getTopStudents2(students: Student[]): Student {
    validateNotEmpty(students);
    return students.reduce((top, current) => current.score > top.score ? current : top);
}

export function getFailedStudents(students: Student[]): Student[] {
    return students.filter(n => n.score < 60);
}

export function getNames(students: Student[]): string[] {
    return students.map(n => n.name);
}

export function sortByScore(students: Student[]): Student[] {
    return [...students].sort((a, b) => b.score - a.score);
}

export function hasFailedStudent(students: Student[]): boolean {
    return students.some(n => n.score < 60);
}

export function isAllPassed(students: Student[]): boolean {
    return students.every(n => n.score >= 60);
}

export function findByName(students: Student[], name: string): Student | undefined {
    return students.find(n => n.name === name);
}