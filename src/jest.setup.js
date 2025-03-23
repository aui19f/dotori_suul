// jest.setup.js
import { TextEncoder, TextDecoder } from "util";

// 글로벌 객체에 TextEncoder와 TextDecoder를 추가
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
