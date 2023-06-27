import { useEffect, useState } from 'react'
import { copy, move, reorder } from "@/utils/drag";
import { worklogs } from "@/mooks/worklogs"

const statusFlow = ['Open', 'In progress', 'Delivery', 'Closed']
const useBoard = () => {

    const [state, setState] = useState(
        statusFlow.map((status) => ({
            "status": status,
            "issues": [],
        }))
    )
    useEffect(() => {
        let newStateFlow = [...state];
        newStateFlow[0].issues = worklogs;
        setState(newStateFlow)
    }, [])
    

    function onDragEnd(result) {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) return
        // const sInd = +source.droppableId;
        // const dInd = +destination.droppableId;
        const sInd = source.droppableId;
        const dInd = destination.droppableId;

        console.log({ sInd }, { dInd });
        switch (sInd) {

            case dInd:
                if (dInd === 'ITEMS') return

                const items = reorder(state[sInd].issues, source.index, destination.index);
                let newState2 = [...state];
                newState2[sInd].issues = items;
                setState(newState2);
                break;

            case 'ITEMS':

                const itemCopy = copy(ITEMS, state[dInd].issues, source, destination)
                let newState3 = [...state];
                newState3[dInd].issues = itemCopy;
                setState(newState3);
                break;
                
            default:
                const result = move(state[sInd].issues, state[dInd].issues, source, destination);
                let newState = [...state];

                newState[sInd].issues = result[sInd];
                newState[dInd].issues = result[dInd];
                setState(newState);
                // setState(newState.filter((group) => group.length));
                break;
        }
    }

    return { state, onDragEnd }
}

export default useBoard