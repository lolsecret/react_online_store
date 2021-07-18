import React, { useState } from 'react'
import axios from 'axios'
import * as FileSaver from "file-saver"; import * as XLSX from "xlsx";

export const Excel = () => {
  const [created_at_begin, setStart] = useState(null)
  const [created_at_end, setEnd] = useState(null)

  const handleDownload = () => {
    if (created_at_end && created_at_begin) {
      axios
        .post('/report/generate_report', { created_at_begin, created_at_end })
        .then(
          (r) => {
            if (r.status === 200) {
              axios({
                  url: `/report/download_report/${r.data.report_uuid}`,
                  method: 'GET',
                  responseType: 'blob', // important
                }).then((response) => {
                   const url = window.URL.createObjectURL(new Blob([response.data]));
                   const link = document.createElement('a');
                   link.href = url;
                   link.setAttribute('download', 'file.xlsx'); //or any other extension
                   document.body.appendChild(link);
                   link.click();
              })}})
   }

  }

//const exportToCSV = (apiData, fileName) => {
//const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"; const fileExtension = ".xlXLSX"
//
//const ws = XLSX.utils.json_to_sheet(apiData); const wb = { Sheets: { data: ws }, SheetNames: ["data"] }; const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" }); const data = new Blob([excelBuffer], { type: fileType }); FileSaver.saveAs(data, fileName + fileExtension); };

  return (
    <div>
      <input type='date' onChange={(e) => setStart(e.target.value)} />
      <input type='date' onChange={(e) => setEnd(e.target.value)} />
      <input type='button' onClick={handleDownload} value='Скачать' />
    </div>
  )
}
