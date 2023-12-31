const ItemList = ({title, children}) => {
    return (
        <div className="w-full p-4 bgCard  ">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-base">
                    {title}
                </h3>

                <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Create
                </a>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {children}
                </ul>
            </div>
        </div>
    )
}

export default ItemList