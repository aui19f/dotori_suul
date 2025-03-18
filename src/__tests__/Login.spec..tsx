import Login from "@/pages/Login";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import * as firebaseAuth from "firebase/auth";

jest.mock("@/fbase", () => ({
  auth: {},
}));

// Firebase의 signInWithEmailAndPassword를 모킹합니다.
jest.mock("firebase/auth", () => ({
  signInWithEmailAndPassword: jest.fn(),
}));

describe("로그인 테스트", () => {
  const mockAuth = {}; //

  test("render확인", () => {
    render(<Login />);
  });

  it("should call signInWithEmailAndPassword on form submit", async () => {
    // firebase/auth에서 signInWithEmailAndPassword를 mock으로 설정합니다.
    const mockSignIn = firebaseAuth.signInWithEmailAndPassword as jest.Mock;
    mockSignIn.mockResolvedValueOnce({ user: { email: "test@example.com" } });

    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText("이메일"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("비밀번호"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByTestId("login-button"));

    await waitFor(() =>
      expect(mockSignIn).toHaveBeenCalledWith(
        mockAuth,
        "test@example.com",
        "password123"
      )
    );
  });

  it("should show error message when signIn fails", async () => {
    const mockSignIn = firebaseAuth.signInWithEmailAndPassword as jest.Mock;
    mockSignIn.mockRejectedValueOnce(new Error("Login failed"));

    render(<Login auth={mockAuth} />);

    fireEvent.change(screen.getByPlaceholderText("이메일"), {
      target: { value: "wrong@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("비밀번호"), {
      target: { value: "wrongpassword" },
    });

    fireEvent.click(screen.getByTestId("login-button"));

    await waitFor(() =>
      expect(
        screen.getByText("아이디 또는 비밀번호를 확인해주세요.")
      ).toBeInTheDocument()
    );
  });
});
