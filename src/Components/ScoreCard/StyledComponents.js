import styled from 'styled-components'

export const ScoreCardContainer = styled.div`
  border: 2px solid #ffffff;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  padding: 25px;
`

export const NavItems = styled.h1`
  font-family: 'Bree Serif';
  color: #ffffff;
  font-size: 25px;
  margin: 0;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  height: 120px;
  width: 120px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    width: 180px;
  }
`
export const ScoreText = styled.p`
  color: #223a5f;
  font-size: 25px;
  font-family: 'Bree Serif';
  margin: 0;
`
export const Score = styled.p`
  color: #223a5f;
  font-size: 38px;
  font-family: 'Roboto';
  margin: 0;
  font-weight: bold;
`
