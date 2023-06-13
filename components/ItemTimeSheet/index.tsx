
const ItemTimeSheet = ({ time = 0 }) => {
    return (
        <div
            className=" bgCard950 p-2  "
            rel="noopener noreferrer"
        >
            <h2 className={`mb-2 text-sm font-light`}>
                ABCPOOL-3366 Presentation
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