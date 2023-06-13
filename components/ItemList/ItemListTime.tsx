const ItemListTime = ({day, color="gray", children, numberOfTasks=0}) => {
    return (
        <div className="w-full  bgCard px-2  ">
            <div className="flex items-center justify-between mb-4 gap-2">
                <h3 className="font-normal text-base">
                    {day}
                </h3>
                <span className="opacity-40 font-light text-xs" > 05/06 </span>
                <span className="font-normal text-sm">{numberOfTasks}h</span>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 gap-1">
                    {children}
                </ul>
            </div>
        </div>
    )
}

export default ItemListTime