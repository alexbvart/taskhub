const ProgressBar = ({progress=0}) => {
    return (

        <div className="w-full bg-gray-200 dark:bg-neutral-700">
            <div className="bg-neutral-200 h-full text-xs font-medium text-neutral-900 leading-none
                flex items-center justify-center" 
                style={{width: `${progress}%`}}> 
                <span className=""  >{progress}%</span>
            </div>
        </div>

    )
}

export default ProgressBar