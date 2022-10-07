import { useState, useEffect } from 'react'
import './App.css'
// export { ReactComponent as HeartIcon } from '../public/heart.svg';

function App() {
  const [ page, setPage ] = useState('landing')

  const [ flipped, setFlipped ] = useState('')

  const [ people, setPeople ] = useState({
    'Tulio':   { hidden_img: '/assets/EliasHide.png', normal_img: '/assets/EliasShow.png', already_selected: false},
    'Machado': { hidden_img: '/assets/test1.jpeg', normal_img: '/assets/test2.jpeg', already_selected: false},
    'Enzo':    { hidden_img: '/assets/test2.jpeg', normal_img: '/assets/test1.jpeg', already_selected: false},
    'Enzo2':    { hidden_img: '/assets/test2.jpeg', normal_img: '/assets/test1.jpeg', already_selected: false},
    'Enzo3':    { hidden_img: '/assets/test2.jpeg', normal_img: '/assets/test1.jpeg', already_selected: false},
    'Enzo4':    { hidden_img: '/assets/test2.jpeg', normal_img: '/assets/test1.jpeg', already_selected: false},
    'Enzo5':    { hidden_img: '/assets/test2.jpeg', normal_img: '/assets/test1.jpeg', already_selected: false},
    'Enzo6':    { hidden_img: '/assets/test2.jpeg', normal_img: '/assets/test1.jpeg', already_selected: false},
    'Enzo7':    { hidden_img: '/assets/test2.jpeg', normal_img: '/assets/test1.jpeg', already_selected: false},
    'Enzo8':    { hidden_img: '/assets/test2.jpeg', normal_img: '/assets/test1.jpeg', already_selected: false},
    'Enzo9':    { hidden_img: '/assets/test2.jpeg', normal_img: '/assets/test1.jpeg', already_selected: false},
    'Enzo0':    { hidden_img: '/assets/test2.jpeg', normal_img: '/assets/test1.jpeg', already_selected: false},
    'Enzo465':    { hidden_img: '/assets/test2.jpeg', normal_img: '/assets/test1.jpeg', already_selected: false},
    'Enzo645':    { hidden_img: '/assets/test2.jpeg', normal_img: '/assets/test1.jpeg', already_selected: false},
    'Enzo4365':    { hidden_img: '/assets/test2.jpeg', normal_img: '/assets/test1.jpeg', already_selected: false},
    'Enzo2346':    { hidden_img: '/assets/test2.jpeg', normal_img: '/assets/test1.jpeg', already_selected: false},
  })

  const clickCard = (name) => {
    if(flipped) {
      setPeople(people => ({...people, [flipped]: {...people[flipped], already_selected: true}}))
      setFlipped('')
      return
    }

    setFlipped(name)
  }


  if(page == 'landing') return (
    <div className='landing' onClick={() => setPage('selection')}>
      <img src='/bg-landing.jpeg'/>
    </div>
  )

  else return (<section className='container'>
    {Object.keys(people).map((name, index) => (
      <div className={`cards ${flipped == name && 'big flipped'}`} 
        onClick={() => clickCard(name)} key={name} style={{left: `${index*180}px`}}
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
  </section>)
}

export default App
