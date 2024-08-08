import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useSelector } from 'react-redux';

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  const [rowData, setRowData] = useState([]);

  const [colDefs] = useState([
    { field: "title", headerName: "Title" },
    { field: "description", headerName: "Description" },
    { field: "endDate", headerName: "End Date" },
    { field: "isCompleted", headerName: "Completed", cellRenderer: params => params.value ? 'Yes' : 'No' },
    { headerName: "Action" ,}
  ]);

  useEffect(() => {
    setRowData(todos);
  }, [todos]);

  return (
    <div 
    className="ag-theme-quartz" 
    style={{ height: 500 , width: 1000 }} 
   >

     <AgGridReact
         rowData={rowData}
         columnDefs={colDefs}
     />
   </div>
  )
}
