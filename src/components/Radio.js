import React, { useState } from 'react'

export const Radio = ({ record, goNext }) => {
  const { question, id, answer_options } = record
  const [value, setValue] = useState(null)
  const start = new Date()

  return (
    <div>
      <h4>{question}</h4>
      <div style={{ margin: '10px auto' }}>
        {answer_options.map((a) => {
          return (
            <div key={a.id}>
              <input
                type='radio'
                name={a.answer_option}
                onChange={() => setValue(a.id)}
                checked={value === a.id}
              />
              <label htmlFor={a.answer_option}>{a.answer_option}</label>
            </div>
          )
        })}
      </div>

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
