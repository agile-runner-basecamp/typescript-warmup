// Step 2: 테스트 파일
import {
    getAverage,
    getFailedStudents,
    getTopStudent,
    getNames,
    Student,
    sortByScore,
    hasFailedStudent,
    findByName,
    isAllPassed
} from './student';

const students: Student[] = [
  { name: "홍길동", score: 85 },
  { name: "김철수", score: 42 },
  { name: "이영희", score: 95 },
  { name: "박민수", score: 58 },
];

describe('students', () => {
    describe('getAverage', () => {
        it('전체 평균 반환', () => {
            expect(getAverage(students)).toBe(70);
        });

        it('빈 배열이면 에러를 던진다.', () => {
            expect(() => getAverage([])).toThrow('학생 목록이 비어있습니다.');
        });
    });


    describe('getTopStudent', () => {
        it('최고 점수 학생 반환.', () => {
            expect(getTopStudent(students)).toEqual({name: '이영희', score: 95});
        });

        it('빈 배열이면 에러를 던진다.', () => {
            expect(() => getAverage([])).toThrow('학생 목록이 비어있습니다.');
        });
    });

    describe('getFailedStudents', () => {
        it('60점 미만 학생 목록 반환.', () => {
            expect(getFailedStudents(students)).toEqual([
                { name: "김철수", score: 42 },
                { name: "박민수", score: 58 },
            ]);
        });

        it('빈 배열이면 에러를 던진다.', () => {
            expect(() => getAverage([])).toThrow('학생 목록이 비어있습니다.');
        });
    });

    describe('getNames', () => {
        it('이름 목록 반환', () => {
            expect(getNames(students)).toEqual(['홍길동', '김철수', '이영희', '박민수']);
        });

        it('빈 배열이면 에러를 던진다.', () => {
            expect(() => getAverage([])).toThrow('학생 목록이 비어있습니다.');
        });
    });

    describe('sortByScore', () => {
        it('점수 높은 순 정렬', () => {
            expect(sortByScore(students)).toEqual(['이영희(95)', '홍길동(85)', '박민수(58)', '김철수(42)'])
        });
        
        it('빈 배열이면 에러를 던진다.', () => {
            expect(() => getAverage([])).toThrow('학생 목록이 비어있습니다.');
        });
    });

    describe('hasFailedSTudent', () => {
        it('낙제 한 사람이 있는지 확인', () => {
            expect(hasFailedStudent(students)).toBe(true);
        });

        it('빈 배열이면 에러를 던진다.', () => {
            expect(() => getAverage([])).toThrow('학생 목록이 비어있습니다.');
        });

    });

    describe('isAllPassed', () => {
        it('낙제자가 있으면 false를 반환한다.', () => {
            expect(isAllPassed(students)).toBe(false);
        });

        it('빈 배열이면 에러를 던진다.', () => {
            expect(() => getAverage([])).toThrow('학생 목록이 비어있습니다.');
        });
    })

    describe('findByName', () => {
        it('이름으로 학생을 찾는다', () => {
            expect(findByName(students, '이영희')).toEqual({ name: "이영희", score: 95 })
        })

        it('이름이 없으면 undefined', () => {
            expect(findByName(students, '없는사람')).toBeUndefined();
        });
    });


})