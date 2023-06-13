import {taskGrid} from './task.modules.css'
const layoutTask = ({children}) => {
  return (
    <div className={`${taskGrid} taskGrid p-8`}>
        {children}
    </div>
  )
}

export default layoutTask