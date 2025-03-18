import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // TypeScript 파일에 대해 ts-jest 사용
    "^.+\\.(js|jsx)$": "babel-jest", // JavaScript/JSX 파일에 대해 babel-jest 사용
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],

  moduleNameMapper: {
    // TypeScript에서 설정한 경로 별칭을 Jest에서 매핑
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@stores/(.*)$": "<rootDir>/src/stores/$1",
  },
  moduleDirectories: ["node_modules", "src"], // 'node_modules' 폴더를 Jest가 제대로 인식하게 설정
};

export default config;
