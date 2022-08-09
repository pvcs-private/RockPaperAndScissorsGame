import {GameImg, GameButton, GameItem} from './StyledComponents'

const GameView = props => {
  const {eachItem, userChoose} = props
  const {imageUrl, id} = eachItem
  const onUserClick = () => {
    userChoose(eachItem)
  }
  return (
    <GameItem>
      <GameButton
        data-testid={`${id.toLowerCase()}Button`}
        onClick={onUserClick}
        type="button"
      >
        <GameImg src={imageUrl} alt={id} />
      </GameButton>
    </GameItem>
  )
}

export default GameView
