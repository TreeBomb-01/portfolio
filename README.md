# 백엔드 개발자 포트폴리오

VS Code IDE 스타일의 Next.js 기반 백엔드 개발자 포트폴리오 웹사이트입니다.

## 🎨 디자인 컨셉

- **VS Code IDE 테마**: 다크 모드 기반의 코드 에디터 스타일
- **Fira Code 폰트**: 개발자 친화적인 모노스페이스 폰트
- **Preview/Source 모드**: 코드 뷰와 프리뷰 뷰 전환 기능
- **터미널 UI**: 하단 터미널 영역에 타이핑 애니메이션

## 🚀 기술 스택

- **Next.js 16** - React 기반 풀스택 프레임워크
- **TypeScript** - 타입 안정성을 위한 정적 타입 언어  
- **Tailwind CSS** - 유틸리티 퍼스트 CSS 프레임워크
- **Font Awesome** - 아이콘 라이브러리

## 📁 프로젝트 구조

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # 글로벌 스타일 (VS Code 테마, Syntax Highlighting)
│   │   ├── layout.tsx           # 루트 레이아웃
│   │   └── page.tsx             # 메인 페이지 (IDE 레이아웃)
│   ├── components/
│   │   ├── Header.tsx           # VS Code 스타일 헤더 (Mode 토글)
│   │   ├── Sidebar.tsx          # Explorer 패널 (파일 트리)
│   │   ├── TabBar.tsx           # 탭 바 + Breadcrumb
│   │   ├── ContentViewer.tsx    # 코드/프리뷰 모드 컨테이너
│   │   ├── CodeView.tsx         # 코드 뷰 (Syntax Highlighting)
│   │   ├── Terminal.tsx         # 터미널 (타이핑 애니메이션)
│   │   └── preview/
│   │       ├── ReadmePreview.tsx    # README 프리뷰 (Quick Access 포함)
│   │       ├── AboutPreview.tsx     # About 프리뷰
│   │       ├── SkillsPreview.tsx    # Skills 프리뷰
│   │       ├── ProjectPreview.tsx   # 프로젝트 상세 프리뷰
│   │       └── AwardsPreview.tsx    # 수상 경력 프리뷰
│   └── data/
│       └── portfolioData.ts     # 포트폴리오 데이터 (프로젝트, 스킬, 수상경력 등)
├── public/                      # 정적 파일
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🛠️ 개발 환경 설정

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 📝 사용 가능한 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 검사

## 🎨 주요 기능

- ✅ VS Code IDE 스타일 다크 테마
- ✅ Preview/Source 모드 전환
- ✅ 사이드바 파일 트리 네비게이션
- ✅ Syntax Highlighting 코드 뷰
- ✅ 터미널 타이핑 애니메이션
- ✅ Quick Access 바로가기 그리드
- ✅ 수상 경력 타임라인 페이지
- ✅ 반응형 디자인 (모바일, 데스크톱)
- ✅ TypeScript 지원
- ✅ Tailwind CSS 스타일링

## 📝 커스터마이징 가이드

### 1. 개인 정보 및 프로젝트 수정
`src/data/portfolioData.ts` 파일에서 모든 데이터를 관리합니다:

```typescript
// 프로젝트 데이터 수정
export const projectsData: Project[] = [
  {
    id: 'project1',
    title: "프로젝트 제목",
    description: "프로젝트 설명",
    category: "카테고리",
    period: "기간",
    contributions: [...],
    technologies: ["기술1", "기술2"],
    githubUrl: "GitHub URL",
  },
  // ...
]

// 스킬 데이터 수정
export const skillCategories: SkillCategory[] = [
  {
    title: "카테고리명",
    description: "설명",
    skills: ["스킬1", "스킬2"]
  },
  // ...
]

// 수상 경력 데이터 수정
export const awardsData: Award[] = [
  {
    date: '2025.10',
    title: '수상 프로젝트명',
    grade: '수상등급',
    project: 'project1',  // 연결할 프로젝트 ID
    organizer: '주최 기관'
  },
  // ...
]
```

### 2. 사이드바 파일 목록 수정
`src/data/portfolioData.ts`의 `sidebarFiles` 객체를 수정합니다.

### 3. 프리뷰 콘텐츠 수정
`src/components/preview/` 폴더의 각 프리뷰 컴포넌트를 수정합니다:
- `ReadmePreview.tsx` - 메인 README 프리뷰 (Quick Access 포함)
- `AboutPreview.tsx` - 소개 프리뷰
- `SkillsPreview.tsx` - 스킬 프리뷰
- `ProjectPreview.tsx` - 프로젝트 상세 프리뷰
- `AwardsPreview.tsx` - 수상 경력 프리뷰

### 4. 코드 뷰 수정
`src/components/CodeView.tsx`의 `getCodeContent` 함수를 수정합니다.

### 5. 스타일 변경
- `src/app/globals.css` - VS Code 테마 색상, Syntax Highlighting 클래스
- `tailwind.config.js` - Tailwind 설정

## 🚀 배포 방법

### Vercel (권장)
1. GitHub에 프로젝트 푸시
2. [Vercel](https://vercel.com)에서 GitHub 저장소 연결
3. 자동 배포 완료

### GitHub Pages
```bash
npm run build
npm run deploy
```

## 📞 연락처

- 📧 Email: htb010630@gmail.com
- 🐙 GitHub: [github.com/TreeBomb-01](https://github.com/TreeBomb-01)

---

💡 **Tip**: VS Code IDE 스타일의 독특한 포트폴리오로 자신을 어필해보세요!