## 📌 프로젝트 소개
본 프로젝트는 **고려대학교 시민정치 리빙랩**에서 주관하는 **이주배경학생 교육권 및 대학 입시 정보 제공 다국어 웹사이트**입니다. 이주배경학생들이 학교 생활, 입시, 비자 등과 관련된 정보를 쉽게 얻고 소통할 수 있도록 7개 국어를 지원하는 접근성 높은 플랫폼으로 개발되었습니다.

## 🛠 기술 스택 (Tech Stack)
- **프레임워크:** React 19, Vite
- **라우팅:** React Router DOM v7
- **다국어 지원:** i18next, react-i18next
- **아이콘:** react-icons
- **스타일링:** CSS (index.css, App.css)

## 📁 주요 디렉토리 구조
```text
project-root/
├── package.json        # 패키지 의존성 및 스크립트
├── vite.config.js      # Vite 설정 파일
├── public/             # 정적 리소스 (파비콘 등)
└── src/                # 소스 코드
    ├── assets/         # 이미지 등 에셋 파일
    ├── components/     # 재사용 가능한 UI 컴포넌트 (Header, Footer, LanguageSelector 등)
    ├── locales/        # 다국어 번역 데이터 (ko, en, zh 등 JSON 파일)
    ├── pages/          # 개별 페이지 컴포넌트 (Home, Admissions, SchoolLife 등)
    ├── App.jsx         # 메인 라우팅 및 레이아웃 설정
    ├── main.jsx        # React 앱 진입점
    └── i18n.js         # 다국어(i18next) 설정 파일
```

## 🚀 설치 및 로컬 실행 방법

### 1. 사전 요구 사항
- **Node.js**: v18.0 이상 권장
- **npm**: v9.0 이상 (Node.js 설치 시 자동 포함)

### 2. 패키지 설치
터미널에서 프로젝트 최상위 폴더로 이동한 후 아래 명령어를 실행합니다.
```bash
npm install
```

### 3. 로컬 개발 서버 실행
설치가 완료되면 개발 서버를 실행하여 로컬에서 웹사이트를 확인할 수 있습니다.
```bash
npm run dev
```
- 기본적으로 `http://localhost:5173` 에서 접속할 수 있습니다.

## 📦 빌드 및 배포 방법

운영 서버에 배포하기 위해 최적화된 정적 파일을 생성해야 할 때는 다음 명령어를 사용합니다.
```bash
npm run build
```
- 빌드가 완료되면 프로젝트 최상위 디렉토리에 `dist/` 폴더가 생성되며, 이 폴더 안의 파일들을 웹 서버(Vercel, Netlify, AWS S3, GitHub Pages 등)에 배포하시면 됩니다.

## 🌐 다국어(번역) 관리 가이드

이 프로젝트는 7개 국어를 지원합니다. 다국어 텍스트는 모두 `src/locales/` 디렉토리 내의 JSON 파일로 관리됩니다.

### 1. 기존 번역 수정하기
- 예를 들어, 한국어 번역을 수정하려면 `src/locales/ko/translation.json` 파일을 엽니다.
- 키(Key)는 그대로 두고 값(Value) 부분을 수정합니다.
  ```json
  {
    "greeting": "환영합니다", // "환영합니다" 부분을 수정
    "school_life": "학교 생활"
  }
  ```

### 2. 새로운 언어 추가하기
새로운 언어를 추가해야 할 경우 다음 단계를 따릅니다.
1. `src/locales/` 폴더 아래에 새 언어 코드 이름으로 폴더를 만듭니다. (예: `fr` - 프랑스어)
2. 생성한 폴더 안에 `translation.json` 파일을 만들고 다른 언어 파일과 동일한 구조의 키(Key)를 갖도록 번역 데이터를 작성합니다.
3. `src/i18n.js` 파일을 열고, 새로 추가한 언어를 `resources` 객체에 등록합니다.
4. `src/components/LanguageSelector.jsx` (언어 선택기 컴포넌트)에 새로운 언어 옵션을 추가합니다.

## 💡 주요 관리 포인트 및 팁

- **UI 컴포넌트 수정:** 헤더, 푸터, 네비게이션 바 등 공통 요소는 `src/components/`에서 수정합니다.
- **새로운 페이지 추가:** 
  1. `src/pages/`에 새로운 컴포넌트를 생성합니다.
  2. `src/App.jsx`의 `<Routes>` 안에 새로운 `<Route>`를 등록하여 라우팅을 연결합니다.
- **어려운 한국어 용어 사전(Glossary):** 툴팁이나 단어 설명 기능이 필요한 경우, 별도의 JSON 혹은 컴포넌트 내 데이터로 관리하여 텍스트에 `GlossaryTooltip` 컴포넌트를 감싸는 형태로 사용합니다.

---

> 이 설명서는 GitHub 리포지토리의 기본 가이드로 활용하실 수 있습니다. 추가적인 도움이 필요하시거나 설정이 변경될 경우 이 문서를 지속적으로 업데이트해 주세요.
