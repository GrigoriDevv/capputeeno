import styled from "styled-components";
import SearchIcon from "./icons/search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
width: 352px;
border-radius: 8px;
padding: 10px 16px;

background-color: var(--bg-secondary)

font-family: inherit;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
color: var(--text-dark);
border: none;
`;

const InputContainer = styled.div`
  position: relative;
  widht: 352px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export function PrimaryInputWSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput placeholder={props.placeholder} />
      <SearchIcon />
    </InputContainer>
  );
}
