import React, { useState } from 'react'

export const Select = ({ record, goNext }) => {
  const { question, id, answer_options } = record
  const [value, setValue] = useState(null)
  const start = new Date()

  return (
    <div>
      <h4>{question}</h4>
      <select style={{ margin: '10px auto' }} onChange={(e) => setValue(+e.target.value)}>
        {answer_options.map((a) => {
          return (
            <option key={a.id} value={a.id}>
              {a.answer_option}
            </option>
          )
        })}
      </select>
      <input
        type='button'
        value='Дальше'
        onClick={() =>
          value &&
          goNext({
            question_id: id,
            answer: [answer_options.find((a) => a.id === value)],
            time_to_answer: Date.now() - start,
            date_answer: new Date()
          })
        }
      />
    </div>
  )
}
