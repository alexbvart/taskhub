import React from "react";

const ItemListTime = React.forwardRef((props, ref) => {
    // const ItemListTime = ({day, color="gray", children, numberOfTasks=0}) => {
    return (
        <div className=" w-full bgCardNotBlur px-2  allH z-1" ref={ref}>
            <div className="flex items-center justify-between mb-4 gap-2">
                <h3 className="font-normal text-base">
                    {props.day}
                </h3>
                <span className="opacity-40 font-light text-xs" > {props.day_month} </span>
                <span className="font-normal text-sm">{props.numberOfTasks}h</span>
            </div>
            <div className="">
                <ul role="list" className="list-none divide-y divide-gray-200 dark:divide-gray-700 gap-3">
                    {props.children}
                </ul>
            </div>
        </div>
    )
});

export default ItemListTime