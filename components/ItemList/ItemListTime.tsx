import React from "react";

// const ItemListTime = React.forwardRef((props, ref) => {
const ItemListTime = ({day, day_month, color="gray", children, numberOfTasks=0}) => {
    return (
        <div className=" w-full boxShadow rounded-lg border border-transparent 
            hover:bg-transparent bg-neutral-900 py-4 px-2  allH z-1" >
            <div className="flex items-center justify-between mb-4 gap-2">
                <h3 className="font-normal text-base">
                    {day}
                </h3>
                <span className="opacity-40 font-light text-xs" > {day_month} </span>
                <span className="font-normal text-sm">{numberOfTasks}h</span>
            </div>
            <div className="">
                <ul role="list" className="list-none flex flex-col gap-3">
                    {children}
                </ul>
            </div>
        </div>
    )
};

export default ItemListTime