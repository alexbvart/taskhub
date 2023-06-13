import {boardGrid} from './board.modules.css'
const layoutBoard = ({children}) => {
  return (
    <div className={`${boardGrid} boardGrid p-8`}>
        {children}
    </div>
  )
}

export default layoutBoard