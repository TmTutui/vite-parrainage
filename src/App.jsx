import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [ page, setPage ] = useState('landing')

  const [ flipped, setFlipped ] = useState('')

  const [ people, setPeople ] = useState({
    'Tulio':   { hidden_img: '/assets/test1.jpeg', normal_img: '/assets/test2.jpeg', already_selected: false},
    'Machado': { hidden_img: '/assets/test1.jpeg', normal_img: '/assets/test2.jpeg', already_selected: false},
    'Enzo':    { hidden_img: '/assets/test2.jpeg', normal_img: '/assets/test1.jpeg', already_selected: false},
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
    <div style={{width: '100%', height: '100%'}} onClick={() => setPage('selection')}>

    </div>
  )

  else return (<section className='container'>
    {Object.keys(people).map(name => (
      <div className={`cards ${flipped == name && 'big flipped'}`} 
        onClick={() => clickCard(name)} key={name}
      > 
        <div className={`card ${people[name].already_selected && 'selected'}`} key={name}>
          <div className={`face front ${flipped == name && 'off'}`}> 
            {people[name].already_selected ? <img src={people[name].hidden_img}/> : <img src={people[name].normal_img}/>}
          </div> 
          <div className={`face ${flipped !== name ? 'off' : 'back'}`}> 
            <img src={people[name].normal_img}/>
          </div> 
        </div> 
      </div> 
    ))}
  </section>)
}

export default App
