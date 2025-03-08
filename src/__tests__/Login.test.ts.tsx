// src/__tests__/Login.test.tsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login"; // 절대 경로 사용
import { loginStore } from "@/stores/loginStore"; // 절대 경로 사용
import { signInWithEmailAndPassword } from "firebase/auth";

// Firebase API 호출 모킹
jest.mock("firebase/auth");

// Zustand 상태 모킹
jest.mock("@/stores/loginStore", () => ({
  useUserStore: jest.fn(),
}));

// 대시보드 페이지 (로그인 후 리다이렉트될 페이지)
const Dashboard = () => <div>Dashboard</div>;

describe("Login Component", () => {
  const mockSetUser = jest.fn();

  beforeEach(() => {
    // Zustand의 setUser 모킹
    (loginStore as jest.Mock).mockReturnValue({
      setUser: mockSetUser,
    });

    // Firebase의 signInWithEmailAndPassword 모킹 (로그인 성공 시)
    (signInWithEmailAndPassword as jest.Mock).mockResolvedValue({
      user: { email: "test@example.com" }, // 가짜 유저 정보
    });
  });

  it("should redirect to dashboard on successful login", async () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password" },
    });

    fireEvent.click(screen.getByText("Login"));

    // 로그인 성공 후 대시보드로 리다이렉트
    await waitFor(() => {
      expect(screen.getByText("Dashboard")).toBeInTheDocument();
    });

    // Zustand setUser 호출 확인
    expect(mockSetUser).toHaveBeenCalledWith({
      email: "test@example.com",
      role: "user", // 여기서는 가정상 'user' role을 사용
    });
  });

  it("should show an error message on failed login", async () => {
    // 로그인 실패 시 mock 설정
    (signInWithEmailAndPassword as jest.Mock).mockRejectedValue(
      new Error("Invalid credentials")
    );

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "wrongpassword" },
    });

    fireEvent.click(screen.getByText("Login"));

    // 로그인 실패 후 에러 메시지 확인
    await waitFor(() => {
      expect(screen.getByText("Invalid credentials")).toBeInTheDocument();
    });
  });
});
