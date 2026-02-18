// Step 2: 테스트 파일

import { findByName, getAverage, getFailedStudents, getNames, getTopStudents, getTopStudents2, hasFailedStudent, isAllPassed, sortByScore, Student } from "./student"

describe('학생 성적 관리', () => {
    const students: Student[] = [
        {name: '홍길동', score: 85},
        {name: '김철수', score: 42},
        {name: '이영희', score: 95},
        {name: '박민수', score: 58}
    ];

    it('평균 성적을 계산할 수 있다.', () => {
      expect(getAverage(students)).toBe(70);
    });

    it('', () => {
      expect(() => getAverage([])).toThrow("학생 목록이 비어있습니다.");
    });

    it('가장 성적이 높은 학생을 구할 수 있다. (1)', () => {
      expect(getTopStudents2(students)).toEqual({ name: "이영희", score: 95 });
    });

    it('가장 성적이 높은 학생을 구할 수 있다. (2)', () => {
        expect(getTopStudents2(students)).toEqual({ name: "이영희", score: 95 });
    });

    it('낙제생 목록을 구할 수 있다.', () => {
      expect(getFailedStudents(students)).toEqual([{name: '김철수', score: 42}, {name: '박민수', score: 58}]);
    });

    it('학생 이름 목록을 구할 수 있다.', () => {
      expect(getNames(students)).toEqual(["홍길동", "김철수", "이영희", "박민수"]);
    });

    it('성적이 높은 순으로 정렬할 수 있다.', () => {
      expect(sortByScore(students)).toEqual([{name: '이영희', score: 95}, {name: '홍길동', score: 85}, {name: '박민수', score: 58}, {name: '김철수', score: 42}]);
    });

    it('낙제한 학생이 있는지 확인할 수 있다.', () => {
      expect(hasFailedStudent(students)).toBeTruthy();
    });

    it('모든 학생이 시험을 통과했는지 확인할 수 있다.', () => {
      expect(isAllPassed(students)).toBeFalsy();
    });

    it('이름으로 학생을 찾을 수 있다.', () => {
      expect(findByName(students, "이영희")).toEqual({name: '이영희', score: 95});
    });

    it('없는 사람일 경우 undefined가 출력된다.', () => {
      expect(findByName(students, "없는 사람")).toBeUndefined();
    });
})