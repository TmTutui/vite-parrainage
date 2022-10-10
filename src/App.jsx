import { useState, useEffect } from 'react'
import './App.css'
import { Wheel } from 'react-custom-roulette'
import useEventListener from './eventHook'


function App() {
  const [ page, setPage ] = useState('landing')

  const [ flipped, setFlipped ] = useState('')

  const [ people, setPeople ] = useState({
    'Lucas': { 
      hidden_img: '/prodile_pic/LucasHide.jpg', normal_img: '/prodile_pic/LucasShow.jpg', already_selected: false, 
      option: '', option_link: ''
    },
    'Pagas': { 
      hidden_img: '/prodile_pic/PagasHide.jpg', normal_img: '/prodile_pic/PagasShow.jpg', already_selected: false, 
      option: '', option_link: ''
    },
    'Eduardo': { 
      hidden_img: '/prodile_pic/EduardoHide.jpg', normal_img: '/prodile_pic/EduardoShow.jpg', already_selected: false, 
      option: '', option_link: ''
    },
    'Lais': { 
      hidden_img: '/prodile_pic/LaisHide.jpg', normal_img: '/prodile_pic/LaisShow.jpg', already_selected: false, 
      option: '', option_link: ''
    },
    'Elias'  : 
    { hidden_img: '/prodile_pic/EliasHide.png', normal_img: '/prodile_pic/EliasShow.png', already_selected: false, 
      option: '', option_link: ''
    },
    'Victor': { 
      hidden_img: '/prodile_pic/VictorHide.png', normal_img: '/prodile_pic/VictorShow.jpg', already_selected: false, 
      option: '', option_link: ''
    },
    'Medeiros': { 
      hidden_img: '/prodile_pic/MedeirosHide.jpg', normal_img: '/prodile_pic/MedeirosShow.jpg', already_selected: false, 
      option: '', option_link: ''
    },
    'Olivia': { 
      hidden_img: '/prodile_pic/OliviaHide.jpg', normal_img: '/prodile_pic/OliviaShow.jpg', already_selected: false, 
      option: 'OnlyFans', option_link: '/OnlyFans/Olivia.jpeg'
    },
    'Machado': {
      hidden_img: '/prodile_pic/MachadoHide.jpg', normal_img: '/prodile_pic/MachadoShow.jpg', already_selected: false, 
      option: '', option_link: ''
    },
    'Luana': {
      hidden_img: '/prodile_pic/LuanaHide.jpg', normal_img: '/prodile_pic/LuanaShow.jpg', already_selected: false, 
      option: 'Fica Frio Aí', option_link: '/Fica Frio Aí/luana.jpeg'
    },
    'Enzo': {
      hidden_img: '/prodile_pic/EnzoHide.jpg', normal_img: '/prodile_pic/EnzoShow.jpg', already_selected: false, 
      option: 'Fica Frio Aí', option_link: '/Fica Frio Aí/enzo.jpeg'
    },
    'Samuel': {
      hidden_img: '/prodile_pic/SamuelHide.jpg', normal_img: '/prodile_pic/SamuelShow.jpg', already_selected: false, 
      option: '', option_link: ''
    },
    'Penna': {
      hidden_img: '/prodile_pic/PennaHide.jpg', normal_img: '/prodile_pic/PennaShow.jpg', already_selected: false, 
      option: 'OnlyFans', option_link: '/OnlyFans/penna.jpeg'
    },
    'Tulio': {
      hidden_img: '/prodile_pic/TulioHide.jpg', normal_img: '/prodile_pic/TulioShow.jpg', already_selected: false, 
      option: 'Fica Frio Aí', option_link: '/Fica Frio Aí/tulio.jpeg'
    },
    'Luisa': {
      hidden_img: '/prodile_pic/LuisaHide.png', normal_img: '/prodile_pic/LuisaShow.jpg', already_selected: false, 
      option: '', option_link: ''
    },
    'Khalil': { 
      hidden_img: '/prodile_pic/KhalilHide.jpg', normal_img: '/prodile_pic/KhalilShow.jpg', already_selected: false, 
      option: '', option_link: ''
    },
    'Federado': { 
      hidden_img: '/prodile_pic/FederadoHide.jpg', normal_img: '/prodile_pic/FederadoShow.jpg', already_selected: false, 
      option: 'OnlyFans', option_link: '/OnlyFans/Federado.jpeg'
    },
    'Matte': { 
      hidden_img: '/prodile_pic/MatteHide.jpg', normal_img: '/prodile_pic/MatteShow.jpg', already_selected: false, 
      option: 'Fica Frio Aí', option_link: '/Fica Frio Aí/matte.jpeg'
    },
    'Leo': { 
      hidden_img: '/prodile_pic/LeoHide.jpg', normal_img: '/prodile_pic/LeoShow.jpg', already_selected: false, 
      option: '', option_link: ''
    },
    'Araujo': { 
      hidden_img: '/prodile_pic/AraujoHide.jpg', normal_img: '/prodile_pic/AraujoShow.jpg', already_selected: false, 
      option: 'OnlyFans', option_link: '/OnlyFans/Arthur A.jpeg'
    },
    'Mendes': { 
      hidden_img: '/prodile_pic/MendesHide.jpg', normal_img: '/prodile_pic/MendesShow.jpg', already_selected: false, 
      option: '', option_link: ''
    },
    'Gangana': { 
      hidden_img: '/prodile_pic/GanganaHide.jpg', normal_img: '/prodile_pic/GanganaShow.jpg', already_selected: false, 
      option: '', option_link: ''
    },
    'Ana': { 
      hidden_img: '/prodile_pic/AnaHide.png', normal_img: '/prodile_pic/AnaShow.png', already_selected: false, 
      option: 'OnlyFans', option_link: '/OnlyFans/Ana.jpeg'
    },
    'Juliana': { 
      hidden_img: '/prodile_pic/JulianaHide.jpg', normal_img: '/prodile_pic/JulianaShow.png', already_selected: false, 
      option: '', option_link: ''
    },
    'Arthur': { 
      hidden_img: '/prodile_pic/ArthurHide.jpg', normal_img: '/prodile_pic/ArthurShow.jpg', already_selected: false, 
      option: '', option_link: ''
    },
    'Rodrigo': { 
      hidden_img: '/prodile_pic/RodrigoHide.jpg', normal_img: '/prodile_pic/RodrigoShow.jpg', already_selected: false, 
      option: 'Fica Frio Aí', option_link: '/Fica Frio Aí/rodrigo.jpeg'
    },
  })

  const clickCard = (name) => {
    if(flipped) {
      setPeople(people => ({...people, [flipped]: {...people[flipped], already_selected: true}}))
      setFlipped('')

      // Case where click roulette pico
      setWinnerVisible(false)
      setWheelVisible(false)
      setShowOptions(false)
      return
    }

    // Case where click roulette pico
    setWinnerVisible(false)
    setWheelVisible(false)
    setShowOptions(false)
    setFlipped(name)
  }

  const images_per_row = Math.round(window.screen.width/(183)) // window.innerWidth

  
  const handleKeyPress = (e) => {
    setWinningNumber(e.value)
    setMustSpin(true)
  }

  const [ wheelVisible, setWheelVisible ] = useState(false)
  const [ winningNumber, setWinningNumber ] = useState(0)
  const [ winnerVisible, setWinnerVisible ] = useState(false)
  const [ mustSpin, setMustSpin ] = useState(false);

  const [ showOptions, setShowOptions ] = useState(false)

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
    
    if (Object.keys(winningTable).includes(String(key))) {
      setWheelVisible(true)
      setWinningNumber(winningTable[key])
      setMustSpin(true)
    }
    if(['.'].includes(String(key))) {
      setWinnerVisible(false)
      setWheelVisible(false)
      setShowOptions(false)
    }
  }

  useEventListener('keydown', handler);

  var options = [
    { option: 'Itens pessoais', },
    { option: 'Item do Carrefour', },
    { option: 'A voz da sabedoria', },
    { option: 'O Brasil ta vendo', },
    { option: `Fala pt alienígena`, },
    { option: 'Fica Frio Aí', qnt: 5},
    { option: 'OnlyFans', qnt: 5},
    { option: 'Bunda do Miki', },
  ]


  if(page == 'landing') return (
    <div className='landing' onClick={() => setPage('selection')}>
      <img src='/bg-landing.jpeg'/>
    </div>
  )

  else return (<section className='container' onKeyPress={(e) => handleKeyPress()}>
    
    {Object.keys(people).map((name, index) => (  // People faces
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
      <h1 className={'winnerCard' + showOptions ? '' : ' zero_container'} style={{display: showOptions ? 'none' : ''}}>Cupido eletrônico</h1>
      {winnerVisible ? 
        <>
          <div className={'winnerCard'} style={{display: showOptions ? 'none' : ''}}
            onClick={() => ['OnlyFans', 'Fica Frio Aí'].includes(options[winningNumber]['option'] && setShowOptions(true))}
          >
            {showOptions ? '' : options[winningNumber]['option']}
          </div>

          <div className={showOptions ? 'container' : 'zero_container'} style={{backgroundImage: `url('/bg-main.webp')`, display: 'flex'}}>
            {Object.keys(people).filter(name => people[name].option == options[winningNumber]['option']).map((name, index) => (  /* Wheel cards */
              <div className={`cards` + showOptions ? '' : 'zero_container' } onClick={() => clickCard(name)} key={name + options[winningNumber]['option']}
                style={{left: `${(index)*Math.round(window.screen.width/(options[winningNumber]['qnt']+1)) + 20}px`, 
                  width: 'fit-content',/*  position: "absolute", */ top: '50px'
                }}
              >
                <div className={`card ${people[name].already_selected && 'selected'} ` + showOptions ? '' : 'zero_container'}
                  style={{
                    width: Math.round(window.screen.width/(options[winningNumber]['qnt']+1)), 
                    marginLeft: '15px',
                  }}
                >
                  <img src={people[name].option_link}
                    style={{
                        width: Math.round(window.screen.width/(options[winningNumber]['qnt']+1)), 
                        marginLeft: '15px',
                        borderRadius: '18px'
                      }}
                    className={`${showOptions ? '' : 'zero_container'} ${people[name].already_selected ? 'selected' : ''}`}
                    />
                </div>
              </div>
            ))}
          </div>
        </>
      :
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={winningNumber}
          data={options}
          
          className='banana'
          backgroundColors={['#009739', '#FEDD00']}
          textColors={['#ffffff']}
          fontSize={17}

          spinDuration={0.5}
          onStopSpinning={(info) => {setTimeout(() => {setMustSpin(false); setWinnerVisible(true)}, 630)}}
        />
      }
    </div>}
  </section>)
}

export default App
