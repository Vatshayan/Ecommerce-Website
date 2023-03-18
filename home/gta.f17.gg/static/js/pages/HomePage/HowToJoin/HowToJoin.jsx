import {Container} from '@mui/material'
import Images from 'assets/images'
import {ActionButton} from 'components'
import React, {useState} from 'react'
import DownloadLauncher from './components/DownloadLauncher'
import './HowToJoin.scss'
import Register from './components/Register'

const HowToJoin = () => {
  const [selectedCard, setSelectedCard] = useState('register')
  return (
    <div id="step-to-join">
      <img src={Images.Women} alt='' className='women-img' />
      <Container>
        <div className='how-to-join'>
          <Register onClick={() => setSelectedCard('register')} isSelected={selectedCard === 'register' ? 'selected' : ''} />
          <DownloadLauncher onClick={() => setSelectedCard('download')} isSelected={selectedCard === 'download' ? 'selected' : ''} />
          <ActionButton />
        </div>
      </Container>
    </div>
  )
}

export default HowToJoin