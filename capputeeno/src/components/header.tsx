"use client"
import styled from "styled-components"
import { Saira_Stencil_One } from "next/font/google";
const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});


interface HeaderProps {}


const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
`
const Logo = styled.a`
  color: var(--logo-color);
  font-size: 40px;
  font-weight: 400;
  line-height: 150%;



`
export default function Header({}: HeaderProps) {
    return(
        <TagHeader>
            <Logo className={sairaStencil.className}>Capputeeno</Logo>
            <div></div>
        </TagHeader>
    )
}