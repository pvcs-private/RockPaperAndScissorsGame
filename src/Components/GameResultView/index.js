import {
  GameResultContainer,
  ResultContainer,
  ResultImg,
  ResultText,
  PlayAgainBtn,
  Participate,
  ResultImgContainer,
} from './StyledComponents'

const GameResultsView = props => {
  const {userChoice, opponentChoice, playAgain, resultText} = props
  const {imageUrl} = userChoice
  const onPlayAgain = () => {
    playAgain()
  }

  return (
    <GameResultContainer>
      <ResultContainer>
        <ResultImgContainer>
          <Participate>YOU</Participate>
          <ResultImg alt="your choice" src={imageUrl} />
        </ResultImgContainer>
        <ResultImgContainer>
          <Participate>OPPONENT</Participate>
          <ResultImg alt="opponent choice" src={opponentChoice.imageUrl} />
        </ResultImgContainer>
      </ResultContainer>
      <ResultText>{resultText}</ResultText>
      <PlayAgainBtn onClick={onPlayAgain} type="button">
        PLAY AGAIN
      </PlayAgainBtn>
    </GameResultContainer>
  )
}

export default GameResultsView
