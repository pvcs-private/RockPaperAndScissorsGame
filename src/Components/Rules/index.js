import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {RulesImg, CloseBtn, RulesBtn, RulesContainer} from './StyledComponents'

import 'reactjs-popup/dist/index.css'

const Rules = () => (
  <Popup modal trigger={<RulesBtn type="button">Rules</RulesBtn>}>
    {close => (
      <RulesContainer>
        <CloseBtn onClick={() => close()} type="button">
          <RiCloseLine />
        </CloseBtn>

        <RulesImg
          alt="rules"
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
        />
      </RulesContainer>
    )}
  </Popup>
)

export default Rules
