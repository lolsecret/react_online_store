import React, { useState } from 'react'

export const Text = ({ record, goNext }) => {
  const { question, id, answer_options } = record
  const [value, setValue] = useState(null)
  const start = new Date()

  return (
    <div>
      <h4>{question}</h4>
      <input type='text' onChange={(e) => setValue(e.target.value)} />

      <input
        type='button'
        value='Дальше'
        onClick={() =>
          value &&
          goNext({
            question_id: id,
            answer: [{ id: answer_options[0].id, answer_option: value }],
            time_to_answer: Date.now() - start,
          })
        }
      />
    </div>
  )
}
