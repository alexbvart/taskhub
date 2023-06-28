const ItemListBoard = ({title, color="gray", children, numberOfTasks=0}) => {
    return (
        <div className="w-full boxShadow rounded-lg border border-transparent 
        hover:bg-transparent bg-neutral-900 py-4 px-2  allH z-1" >
            <div className="flex items-center justify-between mb-4 gap-2">
                <span className={`flex w-3 h-3 ${color} rounded-full`}></span>
                <h3 className="font-normal text-base">
                    {title}
                </h3>
                <span>{numberOfTasks}</span>
            </div>
            <div className="">
                <ul role="list" className="list-none flex flex-col gap-3
                ">
                    {/* divide-y divide-gray-200 dark:divide-gray-700  */}
                    {children}
                </ul>
            </div>
        </div>
    )
}

export default ItemListBoard