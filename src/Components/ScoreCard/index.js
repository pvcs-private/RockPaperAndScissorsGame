import {
  ScoreCardContainer,
  NavItems,
  ScoreContainer,
  ScoreText,
  Score,
} from './StyledComponents'

const ScoreCard = props => {
  const {score} = props

  return (
    <ScoreCardContainer>
      <NavItems>
        ROCK
        <br />
        PAPER
        <br />
        SCISSORS
        <br />
      </NavItems>
      <ScoreContainer>
        <ScoreText>Score</ScoreText>
        <Score>{score}</Score>
      </ScoreContainer>
    </ScoreCardContainer>
  )
}

export default ScoreCard
