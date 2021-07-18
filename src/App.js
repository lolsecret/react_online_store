import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Main } from './pages/Main'
import { Questionary } from './pages/Questionary'
import { Excel } from './pages/Excel'

const App = () => {
  const [data, setData] = useState({})

  console.log(data)

  return (
    <Router>
      <Switch>
        <Route path='/questionary'>
          <Questionary data={data.questions} />
        </Route>
        <Route path='/excel'>
          <Excel />
        </Route>
        <Route path='/redirect'>Спасибо за покупку</Route>
        <Route path='/'>
          <Main setData={setData} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
