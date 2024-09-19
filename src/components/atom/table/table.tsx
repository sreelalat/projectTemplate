// import React from 'react'

// interface tablePropsType {
//     tableTitles: TableTitles[],
//     tableData: unknown,
//     handleTableAction(command: string, node: unknown): unknown,
//     customOptions: any,
// }

// const table = ({ tableTitles, tableData, handleTableAction, customOptions }: tablePropsType) => {
//     const handleClick = (command: any, node: any) => {
//         handleTableAction(command, node)

//     }

//     return (
//         <>
//         {/* Table */}
//         <div
//           data-testid="table" 
//           className={`mt-6 table-fix-head block ${customOptions.heightClass && (tableData?.length>0?customOptions.heightClass:"min-h-[35vh]")}`}
//           style={{
//             height: `${customOptions.height}`,
//           }}
//         ></div>
//         </>
//     )
// }

// export default table