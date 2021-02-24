import React from "react"
import "./layout.css"
import styled from "styled-components"

function Layout({ children }) {
  return (
      <MyLayout>
        <Header>
          <Wrapper>
            <Image src={"/images/logos/react-logo.svg"} alt="logo" />
            <Heading>React Minis</Heading>
          </Wrapper>
          <Text>Welcome React Mini an Portfilo of Mini React Projects</Text>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <a href="https://www.chrisswinton.co.uk/" target="_blank" rel="noreferrer">
            Created by Christopher Swinton
          </a>
        </Footer>
      </MyLayout>
  )
}

export default Layout

const MyLayout = styled.div`
  margin: 16px;
`

const Header = styled.header`
  display: block;
  text-align: center;
  margin: 12px;
`
const Image = styled.img`
  width: 60px;
  margin-right: 14px;

  @media (prefers-reduced-motion: no-preference) {
    animation: React-spin infinite 10s linear;
  }

  @keyframes React-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
const Heading = styled.h1`
  color: #61dbfb;
`
const Wrapper = styled.div`
  display: inline-flex;
`

const Main = styled.main``

const Footer = styled.footer`
  text-align: center;
`
const Text = styled.p``
