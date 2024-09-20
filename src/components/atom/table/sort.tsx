
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { TableTitles } from '../services/interfaces';
// TableTitles[]

const Sort = ({ node, tableTitles, handleTableAction }: { node: any, tableTitles: any, handleTableAction: any }) => {

    const onManageSort = (node: any) => {
        var data = [...tableTitles];
        var sortOrder = "desc";
        data
            .filter((n) => n?.sort)
            .map((n: any) => {
                if (n.key === node.key) {
                    sortOrder =
                        n.sort.direction === "asc"
                            ? n.sort.active
                                ? "desc"
                                : "asc"
                            : "asc";
                    n.sort.direction = sortOrder;
                    n.sort.active = true;
                } else {
                    n.sort.active = false;
                    n.sort.direction = "asc";
                }
            });
        // setTableTitles(data);
        handleTableAction(node.sort?.action?.command, { node, orderBy: sortOrder })
        // onHandleSort(node, sortOrder.toUpperCase());
    };

    return (
        <>
            {node?.sort && (
                <div
                    className=" relative inline-block pl-2  w-6  cursor-pointer"
                    onClick={() => onManageSort(node)}
                >
                    <div
                        className={`absolute  left-[-10px] -top-[17px] `}
                    >
                        {node?.sort.direction === "asc" ? (
                            // <KeyboardArrowDownIcon
                            //     className={`${node?.sort.active
                            //         ? "!text-primary"
                            //         : "!text-[#222]"
                            //         }`}
                            // />
                            ' arrow down'
                        ) : (
                            // <KeyboardArrowUpIcon
                            //     className={`${node?.sort.active
                            //         ? "!text-primary"
                            //         : "!text-[#222]"
                            //         }`}
                            // />
                            'arrow up'
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Sort