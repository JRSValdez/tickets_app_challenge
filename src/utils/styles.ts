import { css } from "styled-components";

export const BaseCSSField = css`
  border-radius: 20px;
  padding: 0 10px;
  border: 1px solid ${({ theme }) => theme.primary};
  font-size: 18px;

  &:focus {
    outline: none;
    border: 3px solid ${({ theme }) => theme.secondary};
  }
`;
