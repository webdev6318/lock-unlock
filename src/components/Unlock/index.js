import {useState} from 'react'
import {
  BgContainer,
  AppContainer,
  LockImg,
  Para,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)

  const onClickButton = () => {
    setIsLocked(prevState => !prevState)
  }

  return (
    <BgContainer>
      <AppContainer>
        <LockImg
          src={`https://assets.ccbp.in/frontend/hooks/${
            isLocked ? 'lock' : 'unlock'
          }-img.png`}
          alt={`${isLocked ? 'lock' : 'unlock'}`}
        />
        <Para>
          {isLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'}
        </Para>
        <Button onClick={onClickButton}>{isLocked ? 'Unlock' : 'Lock'}</Button>
      </AppContainer>
    </BgContainer>
  )
}

export default Unlock
