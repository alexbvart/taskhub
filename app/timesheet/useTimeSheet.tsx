import { useState } from 'react'
import { getWeekArray } from "@/utils/calendar";
import { copy, move, reorder } from "@/utils/drag";
import {ITEMS} from "@/mooks/items"
const useTimeSheet = () => {

    const weekArray = getWeekArray()
    const [state, setState] = useState(
        weekArray.map((day) => ({
            "day": day,
            "issues": [],
        }))
    )

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

export default useTimeSheet