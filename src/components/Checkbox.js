import React, { useState } from 'react'

export const Checkbox = ({ record, goNext }) => {
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
                type='checkbox'
                name={a.answer_option}
                onChange={() =>
                  setValue(
                    value
                      ? [...value, { id: a.id, answer_option: a.answer_option }]
                      : [{ id: a.id, answer_option: a.answer_option }]
                  )
                }
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
          value && goNext({ question_id: id, answer: value, time_to_answer: Date.now() - start, date_answer: new Date()})
        }
      />
    </div>
  )
}
