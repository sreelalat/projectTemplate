import Table from "@/components/atom/table/table"

// const tenantsTableTitles: TableTitles[] = [
const tenantsTableTitles = [
  {
    id: "name",
    key: "name",
    title: "Name",
    sort: {
      direction: "asc",
      active: true,
      action: {
        command: "sort",
        event: "click",
      },
    },
    bodyClass: "capitalize"
  },
  {
    id: "number",
    key: "number",
    title: "Phone Number",
    sort: {
      direction: "asc",
      active: true,
      action: {
        command: "sort",
        event: "click",
      },
    },
    bodyClass: "capitalize"
  },
  {
    id: "wireless",
    key: "wireless",
    title: "Wireless",
    sort: {
      direction: "asc",
      active: true,
      action: {
        command: "sort",
        event: "click",
      },
    },
    bodyClass: "capitalize"
  },
  {
    id: "addedDate",
    key: "addedDate",
    title: "Date Added",
    sort: {
      direction: "asc",
      active: true,
      action: {
        command: "sort",
        event: "click",
      },
    },
    bodyClass: "capitalize"
  },
  {
    id: "status",
    key: "status",
    title: "Status",
    sort: {
      direction: "asc",
      active: true,
      action: {
        command: "sort",
        event: "click",
      },
    },
    bodyClass: "capitalize"
  },

];

const tableData = [
  {
    name: "Netstratum",
    number: "100",
    wireless: 'yes',
    addedDate: '10/10/2021',
    status: 'Subscribed',
  },
  {
    name: "Netstratum",
    number: "100",
    wireless: 'yes',
    addedDate: '10/10/2021',
    status: 'Subscribed',
  },
  {
    name: "Netstratum ",
    number: "100",
    wireless: 'yes',
    addedDate: '10/10/2021',
    status: 'Subscribed',
  },
  {
    name: "Netstratum ",
    number: "100",
    wireless: 'yes',
    addedDate: '10/10/2021',
    status: 'Subscribed',
  },
  {
    name: "Netstratum ",
    number: "100",
    wireless: 'yes',
    addedDate: '10/10/2021',
    status: 'Subscribed',
  },
];

const customOptions = {
  searchBar: {
    show: true,
    placeholder: "Search Tenant",
    alphabeticOnly: true
  },
  filterIcon: {
    show: false
  },
  pagination: {
    show: false,
    totalItems: 10,
    noOfPages: 1,
    upperLimit: 10,
    lowerLimit: 1,
    action: {
      command: 'onChange',
      event: 'change'
    }
  },
  recordsData: {
    dropDownData: {
      fieldName: "Records",
      displayName: "Show",
      type: 'dropdown',
      value: 25,
      required: false,
      disabled: false,
      childrens: [10, 25, 50, 100],
      error: false,
      width: 60
    },
    action: {
      command: 'records',
      event: 'change'
    }
  },

  height: "calc(98vh - 218px)",
}



const ContactsTable = () => {

  const handleDelete = () => {

  }

  const handleTableAction = (action: string, data: any): void => {
    const actionsMap: any = {
      delete: handleDelete,
      // edit: handleEdit,
      // copy: handleCopy,
      // editRealm: handleEditRealm,
      // onChange: handlePaginatonChanges,
      // search: handleSearch,
      // change:handleChange,
      // records:handleRecordsPerPage,
      // sort:onHandleSort
    };
    const actionHandler = actionsMap[action];
    if (actionHandler) {
      actionHandler(data);
    } else {
      console.error("handleTableAction", action, "is not defined in actionsMap")
    }
  };
  return (
    <div className=" h-full">
      <Table
        tableTitles={tenantsTableTitles}
        tableData={tableData}
        handleTableAction={() => handleTableAction}
      // customOptions={customOptions}
      // dataExist={1}
      />
    </div>
  )
}

export default ContactsTable
