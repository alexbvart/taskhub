import React from "react"

// const ItemTimeSheet = React.forwardRef((props, ref) => {
const ItemTimeSheet = ({ title="", time = 0, isDragging= false }) => {

    return (
        <div
            // className=" bgCard950 p-2 w-100 select-none	z-50 block"
            // ref={ref}
            className={`  
            ease-out duration-300
            drop-shadow-2xl shadow-inner backdrop-blur-lg rounded-lg 
            border  p-2 w-full select-none 
            ${isDragging ? " border-gray-400 dark:border-neutral-500 myBlur bg-transparent boxShadowActive"
                        : "  border-gray-300 dark:border-neutral-800 bg-neutral-950 boxShadow"}`}
        >
            <h2 className={`mb-2 text-sm font-light`}>
                ABCPOOL-3366 {title}
            </h2>
            {/* <h3 className={`mb-5 text-lg font-semibold`}>
                <span className={`mb-3 text-xl font-light`}>ABCPOOL-3360</span>
                / Presentation
            </h3> */}
            <p className={`mb-1 text-xs opacity-50`}>
                Find in-depth information about Next.js features and API.
            </p>
            {time > 0 &&
                <div className="flex justify-end">
                    <span className="bg-neutral-800  text-xs text-zinc-300 font-normal  px-3 py-2 rounded-2xl ">
                        {time}h
                    </span>
                </div>
            }

            {/* {' '}
            <span className="bg-neutral-800  text-sm text-zinc-300 font-normal  px-3 py-2 rounded-2xl  ">
                Medium
            </span> */}
        </div>
    )
}

export default ItemTimeSheet