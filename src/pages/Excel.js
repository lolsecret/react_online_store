import React, { useState } from 'react'
import axios from 'axios'

export const Excel = () => {
  const [created_at_begin, setStart] = useState(null)
  const [created_at_end, setEnd] = useState(null)

  const handleDownload = () => {
    if (created_at_end && created_at_begin) {
      axios
        .post('/report/generate_report', { created_at_begin, created_at_end })
        .then(
          (r) => r.status === 200 && window.open(`/report/download_report/${r.data.report_uuid}`)
        )
    }
  }

  return (
    <div>
      <input type='date' onChange={(e) => setStart(e.target.value)} />
      <input type='date' onChange={(e) => setEnd(e.target.value)} />
      <input type='button' onClick={handleDownload} value='Скачать' />
    </div>
  )
}
