const ItemListBoard = ({title, color="gray", children, numberOfTasks=0}) => {
    return (
        <div className="w-full p-4 bgCard  ">
            <div className="flex items-center justify-between mb-4 gap-2">
                <span className={`flex w-3 h-3 ${color} rounded-full`}></span>
                <h3 className="font-normal text-base">
                    {title}
                </h3>
                <span>{numberOfTasks}</span>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 gap-1">
                    {children}
                </ul>
            </div>
        </div>
    )
}

export default ItemListBoard