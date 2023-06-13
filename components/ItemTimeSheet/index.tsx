
const ItemTimeSheet = () => {
    return (
        <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group drop-shadow-2xl shadow-inner backdrop-blur-lg rounded-lg boxShadow
                    border border-transparent px-5 py-4 
                    transition-colors bg-neutral-950 
                    hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2 className={`mb-2 text-base font-semibold`}>
                ABCPOOL-3366 Presentation
            </h2>
            {/* <h3 className={`mb-5 text-lg font-semibold`}>
                <span className={`mb-3 text-xl font-light`}>ABCPOOL-3360</span>
                / Presentation
            </h3> */}
            <p className={`mb-4 opacity-50`}>
                Find in-depth information about Next.js features and API.
            </p>
            <div className="flex justify-end">

                <span className="bg-neutral-800  text-sm text-zinc-300 font-normal  px-3 py-2 rounded-2xl ">
                    9h
                </span>
            </div>
            {/* {' '}
            <span className="bg-neutral-800  text-sm text-zinc-300 font-normal  px-3 py-2 rounded-2xl  ">
                Medium
            </span> */}
        </a>
    )
}

export default ItemTimeSheet