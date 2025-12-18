<p align="center">
  <img src="public/logo.png" alt="도토리술 로고" width="120" height="120" />
</p>

<h3 align="center">도토리술 (Dotori Suul)</h3>
<p align="center">
  <strong>"전통주 양조장 정보 공유 및 나만의 전통주 레시피 기록 서비스"</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img src="https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white">
</p>

---

## 프로젝트 개요
**도토리술**은 흩어져 있는 전국의 양조장 정보를 한눈에 확인하고, 

자신만의 전통주 빚기 레시피를 기록하여 공유할 수 있는 커뮤니티형 서비스입니다. 

리액트 학습 후 실무적인 데이터 핸들링과 테스트 환경 구축을 목표로 진행되었습니다.

## 주요 기능
- **양조장 및 전통주 탐색**: 전국의 다양한 양조장 위치 정보 및 전통주 상세 정보 조회.
- **나만의 레시피 기록**: 전통주를 직접 빚는 과정을 단계별로 기록하고 관리하는 기능.
- **실시간 데이터 동기화**: `Firebase`를 활용한 NoSQL 데이터 관리 및 사용자 인증 구현.

## 기술적 도전 및 학습 포인트
- **테스트 환경 구축 (Jest & React Testing Library)**: 단순 기능 구현에 그치지 않고, 컴포넌트 단위 테스트를 위한 Jest 환경을 직접 설정하며 코드의 안정성을 고민했습니다.
- **에러 트래킹 (Sentry)**: 배포 환경에서 발생할 수 있는 런타임 에러를 감지하기 위해 `Sentry`를 연동하여 모니터링 환경을 구축했습니다.
- **상태 관리 최적화**: `Zustand`를 이용한 가벼운 전역 상태 관리와 `TanStack Query`를 이용한 서버 상태 동기화를 경험했습니다.
- **최신 스택 적용**: `React 19`와 `Vite`를 기반으로 빠른 개발 환경을 구성하고 최신 리액트의 특성을 학습했습니다.

## 현재 상태
- 본 프로젝트는 리액트 숙련도 향상을 위한 **MVP(Minimum Viable Product) 개발 단계**까지 진행되었습니다. 
- 학습한 테스팅 및 에러 트래킹 로직은 이후 프로젝트의 밑거름이 되었습니다.

## ⚙️ 실행 방법
```bash
npm install
npm run dev
