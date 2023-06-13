import Pill from "../Pill"
import ProgressBar from "../ProgressBar"

const Item = () => {
    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4 hover:bg-neutral-800 px-2 py-4 rounded-md">
                <div className=" sm:flex-1  min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate dark:text-white">
                        ABCPOOLIT-9909 /
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Functional Analysis
                    </p>
                </div>
                <div className=" w-1/2">    
                    <div className="flex justify-between items-center">

                        <p className="text-sm">IN PROGRESS</p>
                        <span>9h</span>
                        {/* <Pill>9h</Pill> */}
                    </div>
                    <ProgressBar progress={50} />
                </div>
            </div>
        </li>
    )
}

export default Item