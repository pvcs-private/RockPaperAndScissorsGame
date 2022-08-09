import {Component} from 'react'
import ScoreCard from '../ScoreCard'
import GameView from '../GameView'
import GameResultsView from '../GameResultView'
import Rules from '../Rules'
import {GameContainer, GameItems} from './StyledComponents'

class Game extends Component {
  state = {
    userChoice: [],
    playGame: true,
    score: 0,
    opponentChoice: [],
    resultText: '',
  }

  userChoose = userItem => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * 3)
    const opponentChoice = choicesList[randomNumber]
    if (
      (userItem.id === 'PAPER' && opponentChoice.id === 'ROCK') ||
      (userItem.id === 'ROCK' && opponentChoice.id === 'SCISSORS') ||
      (userItem.id === 'SCISSORS' && opponentChoice.id === 'PAPER')
    ) {
      this.setState(prevState => ({
        userChoice: userItem,
        playGame: false,
        score: prevState.score + 1,
        opponentChoice,
        resultText: 'YOU WON',
      }))
    } else if (
      (userItem.id === 'PAPER' && opponentChoice.id === 'SCISSORS') ||
      (userItem.id === 'SCISSORS' && opponentChoice.id === 'ROCK') ||
      (userItem.id === 'ROCK' && opponentChoice.id === 'PAPER')
    ) {
      this.setState(prevState => ({
        userChoice: userItem,
        playGame: false,
        score: prevState.score - 1,
        opponentChoice,
        resultText: 'YOU LOSE',
      }))
    } else if (userItem.id === opponentChoice.id) {
      this.setState(prevState => ({
        userChoice: userItem,
        playGame: false,
        score: prevState.score,
        opponentChoice,
        resultText: 'IT IS DRAW',
      }))
    }
  }

  scoreIncrease = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  scoreDecrease = () => {
    this.setState(prevState => ({score: prevState.score - 1}))
  }

  draw = () => {
    this.setState(prevState => ({score: prevState.score}))
  }

  playAgain = () => {
    this.setState({userChoice: [], opponentChoice: [], playGame: true})
  }

  render() {
    const {choicesList} = this.props
    const {userChoice, playGame, score, opponentChoice, resultText} = this.state
    return (
      <GameContainer>
        <ScoreCard score={score} />
        {playGame ? (
          <GameItems>
            {choicesList.map(eachItem => (
              <GameView
                userChoose={this.userChoose}
                eachItem={eachItem}
                key={eachItem.id}
              />
            ))}
          </GameItems>
        ) : (
          <GameResultsView
            choicesList={choicesList}
            userChoice={userChoice}
            opponentChoice={opponentChoice}
            playAgain={this.playAgain}
            resultText={resultText}
          />
        )}
        <Rules />
      </GameContainer>
    )
  }
}

export default Game
