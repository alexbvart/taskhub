import {timesheetGrid} from './timesheet.modules.css'
const layoutTimeSheet = ({children}) => {
  return (
    <div className={`${timesheetGrid} timesheetGrid p-8`}>
        {children}
    </div>
  )
}

export default layoutTimeSheet