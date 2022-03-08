import styled from "styled-components";

export const Container = styled.div`
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgb(62, 58, 87);
`
export const Paragrafo =styled.p`
  font-size: 25px;
`

export const ContainerApp = styled.section`
  text-align: center;
  width: 500px;
  height: 500px;
  margin: 0 auto;
`

export const Image = styled.img`
    max-width: 100%;
    object-fit: contain;
  @media(max-width: 440px) {
    max-width: 100%;
    max-height: 100%;
  }
`