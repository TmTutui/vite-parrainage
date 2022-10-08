import { useState, useEffect } from 'react'
import './App.css'
import { Wheel } from 'react-custom-roulette'
import useEventListener from './eventHook'


function App() {
  const [ page, setPage ] = useState('landing')

  const [ flipped, setFlipped ] = useState('')

  const [ people, setPeople ] = useState({
    'Lucas': { hidden_img: '/assets/LucasHide.jpg', normal_img: '/assets/LucasShow.jpg', already_selected: false},
    'Pagas': { hidden_img: '/assets/PagasHide.jpg', normal_img: '/assets/PagasShow.jpg', already_selected: false},
    'Eduardo': { hidden_img: '/assets/EduardoHide.jpg', normal_img: '/assets/EduardoShow.jpg', already_selected: false},
    'Lais': { hidden_img: '/assets/LaisHide.jpg', normal_img: '/assets/LaisShow.jpg', already_selected: false},
    'Elias'  : { hidden_img: '/assets/EliasHide.png', normal_img: '/assets/EliasShow.png', already_selected: false},
    'Victor': { hidden_img: '/assets/VictorHide.png', normal_img: '/assets/VictorShow.jpg', already_selected: false},
    'Medeiros': { hidden_img: '/assets/MedeirosHide.jpg', normal_img: '/assets/MedeirosShow.jpg', already_selected: false},
    'Olivia': { hidden_img: '/assets/OliviaHide.jpg', normal_img: '/assets/OliviaShow.jpg', already_selected: false},
    'Machado': { hidden_img: '/assets/MachadoHide.jpg', normal_img: '/assets/MachadoShow.jpg', already_selected: false},
    'Luana': { hidden_img: '/assets/LuanaHide.jpg', normal_img: '/assets/LuanaShow.jpg', already_selected: false},
    'Enzo'   : { hidden_img: '/assets/EnzoHide.jpg', normal_img: '/assets/EnzoShow.jpg', already_selected: false},
    'Samuel': { hidden_img: '/assets/SamuelHide.jpg', normal_img: '/assets/SamuelShow.jpg', already_selected: false},
    'Penna': { hidden_img: '/assets/PennaHide.jpg', normal_img: '/assets/PennaShow.jpg', already_selected: false},
    'Tulio': { hidden_img: '/assets/TulioHide.jpg', normal_img: '/assets/TulioShow.jpg', already_selected: false},
    'Luisa': { hidden_img: '/assets/LuisaHide.png', normal_img: '/assets/LuisaShow.jpg', already_selected: false},
    // 'Eduardo': { hidden_img: '/assets/EduardoHide.jpg', normal_img: '/assets/EliasShow.jpg', already_selected: false},
  })

  const clickCard = (name) => {
    if(flipped) {
      setPeople(people => ({...people, [flipped]: {...people[flipped], already_selected: true}}))
      setFlipped('')
      return
    }

    setFlipped(name)
  }

  const images_per_row = Math.round(window.screen.width/(180)) // window.innerWidth

  
  const handleKeyPress = (e) => {
    setWinningNumber(e.value)
    setMustSpin(true)
  }

  const [ wheelVisible, setWheelVisible ] = useState(false)
  const [ winningNumber, setWinningNumber ] = useState(0)
  const [ winnerVisible, setWinnerVisible ] = useState(false)
  const [ mustSpin, setMustSpin ] = useState(false);

  const winningTable = {
    'p': 0,  // 'Itens pessoais',
    'c': 1,  // 'Item do Carrefour',
    's': 2,  // 'A voz da sabedoria',
    'b': 3,  // 'O Brasil ta vendo',
    'a': 4,  // `Fala pt alienígena`,
    'f': 5,  // 'Fica Frio Aí',
    'o': 6,  // 'OnlyFans',
  }
  function handler({ key }) {
    console.log(key)
    if (Object.keys(winningTable).includes(String(key))) {
      setWheelVisible(true)
      setWinningNumber(winningTable[key])
      setMustSpin(true)
    }
    if(['.'].includes(String(key))) {
      setWinnerVisible(false)
      setWheelVisible(false)
    }
  }

  useEventListener('keydown', handler);

  var options = [
    { option: 'Itens pessoais', style: { backgroundColor: 'green', textColor: 'black' }},
    { option: 'Item do Carrefour', },
    { option: 'A voz da sabedoria', },
    { option: 'O Brasil ta vendo', },
    { option: `Fala pt alienígena`, },
    { option: 'Fica Frio Aí', },
    { option: 'OnlyFans', },
  ]


  if(page == 'landing') return (
    <div className='landing' onClick={() => setPage('selection')}>
      <img src='/bg-landing.jpeg'/>
    </div>
  )

  else return (<section className='container' onKeyPress={(e) => handleKeyPress()}>
    

    {Object.keys(people).map((name, index) => (
      <div className={`cards ${flipped == name && 'big flipped'}`} 
        onClick={() => clickCard(name)} key={name} 
        style={{left: `${(index%images_per_row)*180}px`, top: `${Math.floor(index/images_per_row)*300}px`}}
      > 
        <div className={`card ${people[name].already_selected && 'selected'}`} key={name}>
          <div className={`face front ${flipped == name && 'off'}`}> 
            {people[name].already_selected ? <img src={people[name].normal_img}/> : <img src={people[name].hidden_img}/>}
          </div> 
          <div className={`face ${flipped !== name ? 'off' : 'back'}`}> 
            <img src={people[name].normal_img}/>
          </div>
          <div className={`heartContainer ${flipped == name && 'off'}`}>
            <img src={'heart.svg'} className='heart'/>
            <span>{index+1}</span>
          </div>
        </div> 
      </div> 
    ))}

    {wheelVisible && <div className='wheelContainer'>
      <h1>Cupido eletrônico</h1>
      {winnerVisible ?
        <div className='winnerCard'>
          {options[winningNumber]['option']}
        </div>

      :
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={winningNumber}
          data={options}
          
          className='banana'
          backgroundColors={['#3e3e3e', '#df3428']}
          textColors={['#ffffff']}
          fontSize={17}

          spinDuration={0.5}
          onStopSpinning={(info) => {setTimeout(() => {setMustSpin(false); setWinnerVisible(true)}, 720)}}
        />
      }
    </div>}
  </section>)
}

export default App
