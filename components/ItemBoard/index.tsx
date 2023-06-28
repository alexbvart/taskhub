import Pill from "../Pill"

const ItemBoard = ({ issueKey, issueSummary, isDragging= false }) => {

    const isSummary = issueSummary.split("/");
    return (
        <div
            className={`  
        ease-out duration-300
        drop-shadow-2xl shadow-inner backdrop-blur-lg rounded-lg 
        border  p-2 w-full select-none 
        ${isDragging ? " border-gray-400 dark:border-neutral-500 myBlur bg-transparent boxShadowActive"
                    : "  border-gray-300 dark:border-neutral-800 bg-neutral-950 boxShadow"}`}
        >
            <h2 className={`mb-2 text-sm font-light`}>
                {issueKey}
            </h2>
            <h3 className={`mb-5 text-lg font-semibold`}>
                <span className={`mb-3 text-base font-light`}> {isSummary[0]}  /</span> {isSummary[1]}
            </h3>
            {/* <p className={`m-0 max-w-[30ch]  opacity-50`}>
                    Find in-depth information about Next.js features and API.
                </p> */}
            {/* <span className="bg-neutral-800  text-sm text-zinc-300 font-normal  px-3 py-2 rounded-2xl ">
                Support
            </span> */}
            <Pill>Support</Pill> {' '}
            <span className="bg-neutral-800  text-sm text-zinc-300 font-normal  px-3 py-2 rounded-2xl  ">
                Medium
            </span>
        </div>
    )
}

export default ItemBoard