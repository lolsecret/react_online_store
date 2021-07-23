import React, { useState } from 'react'
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom'
import axios from 'axios'

import { Checkbox } from '../components/Checkbox'
import { Radio } from '../components/Radio'
import { Select } from '../components/Select'
import { Text } from '../components/Text'

export const Questionary = ({ data, hardcode }) => {
  const { path } = useRouteMatch()
  const history = useHistory()

  const [question, setQuestion] = useState(null)
  const [answers, setAnswers] = useState([])

  const handleStart = () => {
    if (data && data.length > 0) {
      const que = data[0]
      history.push(`/questionary/${que.id}`)
      setQuestion(que)
    } else {
      history.push('/redirect')
    }
  }

  const goNext = (answer) => {
    const _answer = {...answer, ...hardcode}
    const que = data[answers.length + 1]
    setQuestion(que)
    setAnswers([...answers, _answer])
    que && history.push(`/questionary/${que.id}`)
    que === undefined && history.push('/questionary/done')
  }

  const handleFinish = () => {
    axios.post('/application/application_form', answers).then((r) => {
      if (r.status === 200) history.push('/redirect')
    })
  }

  return (
    <Switch>
      <Route exact path={path}>
        <input type='button' onClick={handleStart} value=' Начать' />
      </Route>
      <Route exact path={`${path}/done`}>
        <input type='button' onClick={handleFinish} value=' Завершить' />
      </Route>
      <Route path={`${path}/:id`}>{getComponentType(question, goNext)}</Route>
    </Switch>
  )
}

const getComponentType = (question, goNext) => {
  switch (question?.type) {
    case 'RADIO':
      return <Radio record={question} goNext={goNext} />
    case 'CHECKED':
      return <Checkbox record={question} goNext={goNext} />
    case 'SELECT':
      return <Select record={question} goNext={goNext} />
    case 'INPUT':
      return <Text record={question} goNext={goNext} />
    default:
      return null
  }
}
