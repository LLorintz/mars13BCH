import { FormEvent, useState, useEffect } from 'react'
import './app.css'
import PlayerName from './components/PlayerName/PlayerName'
import Resource from './components/Resource/Resource'
import { resourceProps } from './components/Resource/Resource'
function App() {


  const [resources, setResource] = useState<resourceProps[]>([
    {name:'Megacredit', amount:0, production:0},
    {name:'Steel', amount:0, production:0},
    {name:'Heat', amount:0, production:0},
    {name:'Plants', amount:0, production:0},
    {name:'Titan', amount:0, production:0},
    {name:'Gold', amount:0, production:0},
  ])

const handleIncrement=(increment:number, index:number, field:'amount'|'production')=>{
  setResource(prevResources=>{
    const updateResource = [...prevResources] //reources tömb aktuális állapotát kapja az updateResource
    updateResource[index]={
      ...updateResource[index],
      [field]:updateResource[index][field]+increment    
    }
    return updateResource
  })
}

const handlSubmit2=(e:FormEvent)=>{
    e.preventDefault()
    setResource(prevResources=>(
      prevResources.map(resource=>(
        {...resource, amount:resource.amount+resource.production}
      ))
    ))
   
  }
  return (
    <form onSubmit={handlSubmit2} className="container">
        <PlayerName></PlayerName>
        {resources.map((resource,index)=>(
                  <Resource 
                  name={resource.name} 
                  amount={resource.amount} 
                  onchange={(increment:number)=>handleIncrement(increment, index, 'amount')}
                  production={resource.production}
                  onchangeProductivity={(increment:number)=>handleIncrement(increment, index, 'production')}
                  ></Resource>          
        ))}
    
       <button type='submit' className='NextRound'>Next Round</button>
    </form>
  )
}

export default App
