import ProgressBar from "../ProgressBar"
import Summary from "../Summary"

const TaskInfoCard = () => {
    return (

        <div className="
        drop-shadow-2xl shadow-inner	 backdrop-blur-lg rounded-lg border border-transparent px-5 py-4 
                    transition-colors bg-neutral-950 
                    boxShadow hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" >

            <h2 className={`mb-2 text-lg font-light`}>
                ABCPOOL-3366
            </h2>
            <h3 className={`mb-5 text-2xl font-semibold`}>
                <span className={`mb-3 text-2xl `}>ABCPOOL-3360 / </span>
                Presentation
            </h3>
            <p className={`m-0 text-zinc-300`}>
                Find in-depth information about Next.js features and API.
            </p>

            <Summary
                title={"Dates"}
            >
                <div className="mt-4  text-base text-zinc-400 grid grid-cols-2">
                    <label>Created:</label> 
                    <span> 20/05/2023 09:00 AM </span>

                    <label>Updated:</label>
                    <span> 29/05/2023 09:00 AM </span>

                    <label>Real close date:</label>
                    <span> 30/05/2023 09:00 AM </span>

                </div>
            </Summary>

            <Summary title={"Time traking"}>
                <div className="mt-4  text-base text-zinc-400 grid grid-cols-2">
                    <label>Estimated:</label> 
                    <span className="flex gap-2">9h <ProgressBar progress={100}/></span>
                </div>

                <div className="mt-4  text-base text-zinc-400 grid grid-cols-2">
                    <label>Remaining:</label> 
                    <span className="flex gap-2">6h <ProgressBar progress={66}/></span>
                </div>
                <div className="mt-4  text-base text-zinc-400 grid grid-cols-2">
                    <label>Logged:</label> 
                    <span className="flex gap-2">3h <ProgressBar progress={34}/></span>
                </div>
            </Summary>
        </div>

    )
}

export default TaskInfoCard