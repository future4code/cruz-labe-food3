import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding-top: 80px;
`;

export const Logo = styled.img`
  width: 30vw;
`;

export const TopText = styled.p`
  margin-top: 28px;
  margin-bottom: 5px;
`;

export const LoginButton = styled.button`
  width: 100%;
  border-radius: 5px;
  border: none;
  padding: 12px 16px;
  font-size: 16px;
  background-color: #5cb646;
  margin-top: 16px;
  height: 42px;
`;

export const SignUpButton = styled.button`
  width: 100%;
  border-radius: 5px;
  border: none;
  padding: 12px 16px;
  font-size: 16px;
  background-color: #ffffff;
  margin-top: 16px;
`;
