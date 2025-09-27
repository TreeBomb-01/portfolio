# 백엔드 개발자 포트폴리오

Next.js 14와 TypeScript를 사용한 백엔드 개발자 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **Next.js 14** - React 기반 풀스택 프레임워크
- **TypeScript** - 타입 안정성을 위한 정적 타입 언어  
- **Tailwind CSS** - 유틸리티 퍼스트 CSS 프레임워크
- **React** - 사용자 인터페이스 구축을 위한 라이브러리

## 📁 프로젝트 구조

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css      # 글로벌 스타일
│   │   ├── layout.tsx       # 루트 레이아웃
│   │   └── page.tsx         # 메인 페이지
│   └── components/
│       ├── Header.tsx       # 네비게이션 헤더
│       ├── Footer.tsx       # 푸터
│       ├── Hero.tsx         # 히어로 섹션
│       ├── About.tsx        # 소개 섹션
│       ├── Skills.tsx       # 기술 스택 섹션
│       ├── Projects.tsx     # 프로젝트 섹션
│       └── Contact.tsx      # 연락처 섹션
├── public/                  # 정적 파일
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

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ TypeScript 지원으로 타입 안정성 확보
- ✅ Tailwind CSS로 빠른 스타일링
- ✅ SEO 최적화된 메타데이터
- ✅ 부드러운 스크롤 및 애니메이션
- ✅ 모바일 친화적인 네비게이션
- ✅ 연락처 폼 기능
- ✅ 프로젝트 쇼케이스 섹션

## 📝 커스터마이징 가이드

### 1. 개인 정보 수정
- `src/components/Hero.tsx` - 메인 소개 문구 및 이름
- `src/components/About.tsx` - 자기소개 및 경험
- `src/components/Contact.tsx` - 연락처 정보

### 2. 프로젝트 추가
`src/components/Projects.tsx`에서 `projects` 배열에 새로운 프로젝트를 추가하세요:

```typescript
{
  id: 새로운_ID,
  title: "프로젝트 제목",
  description: "프로젝트 설명",
  image: "from-색상1 to-색상2", // Tailwind 그라디언트
  tags: ["React", "Next.js", "등등"],
  demoUrl: "데모_URL",
  githubUrl: "GitHub_URL",
  featured: true/false // 주요 프로젝트 여부
}
```

### 3. 기술 스택 수정
`src/components/Skills.tsx`에서 `skillCategories` 배열을 수정하여 자신의 기술을 추가하세요.

### 4. 스타일 변경
- `src/app/globals.css` - 글로벌 스타일 및 커스텀 CSS
- `tailwind.config.js` - Tailwind 설정 및 커스텀 색상

## 🚀 배포 방법

### Vercel (권장)
1. GitHub에 프로젝트 푸시
2. [Vercel](https://vercel.com)에서 GitHub 저장소 연결
3. 자동 배포 완료

### Netlify
```bash
npm run build
```
실행 후 생성된 `out/` 폴더를 Netlify에 업로드

### GitHub Pages
```bash
npm run build
npm run export  # 정적 사이트 생성용
```

## 🔧 개발 팁

- 개발 중에는 `npm run dev`로 실시간 변경사항 확인
- TypeScript 에러는 VS Code에서 실시간으로 확인 가능
- Tailwind CSS의 자동완성을 위해 Tailwind CSS IntelliSense 확장 설치 권장

## 📞 문의사항

프로젝트 관련 질문이나 개선사항이 있다면 언제든 연락주세요!

---

💡 **Tip**: 이 템플릿을 기반으로 자신만의 독특한 포트폴리오를 만들어보세요!