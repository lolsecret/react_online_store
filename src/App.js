import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Main } from './pages/Main'
import { Questionary } from './pages/Questionary'
import { Excel } from './pages/Excel'

const App = () => {
  const [data, setData] = useState({})
  const [hardcode, setHardcode] = useState({
    person_id: 4,
    mobile_phone: '+77077887796',
  })

   useEffect(() => {
    if(data.uuid){
        setHardcode(state => ({
        ...state,uuid: data.uuid
        }))
    }
   },[data])

  console.log(data)

  return (
    <Router>
      <Switch>
        <Route path='/questionary'>
          <Questionary data={data.questions} hardcode={hardcode}/>
        </Route>
        <Route path='/excel'>
          <Excel />
        </Route>
        <Route path='/redirect'>Спасибо за покупку</Route>
        <Route path='/'>
          <Main setData={setData} hardcode={hardcode} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

