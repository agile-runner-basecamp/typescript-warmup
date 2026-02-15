# 🟦 Mission 0: TypeScript 워밍업

> **대상:** TypeScript로 온보딩을 진행하는 팀원
>
> **목표:** Mission 1~2에서 필요한 TS 핵심 문법을 학습합니다.

## 📌 환경 세팅

```bash
npm install       # 의존성 설치
npm test          # Jest 테스트 실행
npx jest --watch  # 파일 변경 시 자동 재실행
```

## 📖 미션 상세 가이드

상세 Step별 가이드는 **노션 페이지**의 `typescript-warmup-mission.md`를 참고하세요.

| Step | 주제 | 우선순위 |
|------|------|:--------:|
| Step 0 | Jest 테스트 기초 | 🔴 필수 |
| Step 1 | 타입 기초 — 계산기 함수 | 🔴 필수 |
| Step 2 | Interface & 배열 메서드 — 학생 성적 관리 | 🔴 필수 |
| Step 3 | Enum & Type Guard — 주문 상태 관리 | 🟡 권장 |
| Step 4 | 구조분해 & 스프레드 — 주소록 관리 | 🔴 필수 |
| Step 5 | 클래스 & OOP — 은행 계좌 | 🔴 필수 |
| Step 6 | 제네릭 — 범용 컬렉션 | 🟢 선택 |
| Step 7 | 비동기 — API 호출 시뮬레이션 | 🟡 권장 |
| Step 8 | React 컴포넌트 테스트 | 🟡 권장 |

## 📝 제출 방법

1. `feature/[티켓번호]-typescript-이름` 브랜치 생성
2. 각 Step 폴더에서 작업 (디렉토리는 미리 생성해뒀습니다)

```
src/
├── step0-jest/            ← Jest 기초 (describe/it/expect)
├── step1-calculator/      ← 타입 기초
├── step2-student/         ← Interface & 배열 메서드
├── step3-order/           ← Enum & Type Guard
├── step4-contacts/        ← 구조분해 & 스프레드
├── step5-account/         ← 클래스 & OOP (은행 계좌)
├── step6-generics/        ← 제네릭 (범용 컬렉션)
├── step7-async/           ← 비동기 (async/await)
└── step8-react-test/      ← React 컴포넌트 테스트
```

3. 모든 Step 완료 시 **PR 올리기**
  - PR 제목 예시: `[FE] 이승환 - 타입스크립트 워밍업 미션 제출합니다. (티켓번호)`
4. `any` 타입 사용 금지!

