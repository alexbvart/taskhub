'use client'
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import ItemTimeSheet from "@/components/ItemTimeSheet";
import { v4 as uuidv4 } from 'uuid';
import ItemListBoard from "@/components/ItemList/ItemListBoard";
import ItemListTime from "@/components/ItemList/ItemListTime";
import { getWeekArray } from "@/utils/calendar";
import { stringify } from "querystring";

const ITEMS = [
    {
        id: uuidv4(),
        content: 'Headline'
    },
    {
        id: uuidv4(),
        content: 'Copy'
    },
    {
        id: uuidv4(),
        content: 'Image'
    },
    {
        id: uuidv4(),
        content: 'Slideshow'
    },
    {
        id: uuidv4(),
        content: 'Quote'
    }
];



// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map((k) => ({
        id: `item-${k + offset}-${new Date().getTime()}`,
        content: `item ${k + offset}`
    }));

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const copy = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];

    destClone.splice(droppableDestination.index, 0, { ...item, id: uuidv4() });
    return destClone;
};

const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    "z-index": "10",
    // padding: grid * 2,
    padding: '0',
    margin: `0`,
    position: 'relative',

    // change background colour if dragging
     background: isDragging ? "lightgreen" : "red",

    // styles we need to apply on draggables
    ...draggableStyle
});
const getListStyle = (isDraggingOver) => ({
    // background: isDraggingOver ? "lightblue" : "blue",
    // padding: grid,
    minWidth: 140
});

const QuoteApp = () => {
    const weekArray = getWeekArray()
    const [weekSelected, setWeekSelected] = useState(
        weekArray.map((day) =>  ({
            "day" :  day,
            "issues" : [],
        }))
    )
    
    const [state, setState] = useState(weekSelected);

    function onDragEnd(result) {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination)   return
        // const sInd = +source.droppableId;
        // const dInd = +destination.droppableId;
        const sInd = source.droppableId;
        const dInd = destination.droppableId;

        console.log({ sInd }, { dInd });
        switch (sInd) {
            case dInd:
                if (dInd === 'ITEMS')   return

                const items = reorder(state[sInd], source.index, destination.index);
                let newState2 = [...state];
                newState2[sInd] = items;
                setState(newState2);
                break;

            case 'ITEMS':

                const itemCopy = copy(ITEMS, state[dInd], source, destination)
                let newState3 = [...state];
                newState3[dInd] = itemCopy;
                setState(newState3);

                break;
            default:
                const result = move(state[sInd], state[dInd], source, destination);
                let newState = [...state];

                newState[sInd] = result[sInd];
                newState[dInd] = result[dInd];
                setState(newState);
                // setState(newState.filter((group) => group.length));
                break;
        }
    }

    return (
        <>
            {/* <button
                type="button"
                onClick={() => {
                    setState([...state, []]);
                    console.log(state);
                }}
            >
                Add new group
            </button>
            <button
                type="button"
                onClick={() => {
                    setState([...state, getItems(1)]);
                    console.log(state);
                }}
            >
                Add new item
            </button> */}

            <DragDropContext onDragEnd={onDragEnd}>

                <Droppable droppableId="ITEMS">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            <ItemListBoard
                                title={"Issues"}
                            >

                                {ITEMS.map((issue, index) => (
                                    <Draggable key={String(issue.id)} draggableId={issue.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <ItemTimeSheet title={`${issue.content}`} />
                                                {/* {`${issue.content}`} */}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}

                                {provided.placeholder}
                            </ItemListBoard>
                        </div>
                    )}
                </Droppable>

                {weekSelected.map((el, ind) => (

                    <Droppable key={ind} droppableId={`${el.day.toLocaleDateString()}`}>

                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                                {...provided.droppableProps}
                            >
                                <ItemListTime 
                                    day={el.day.toLocaleDateString('en-us', { weekday:"long"})}
                                    day_month={el.day.toLocaleDateString('en-us', { day:"numeric", month:"numeric" })}
                                >
                                    {
                                        el.issues.length
                                            ? el.issues.map((item, index) => (

                                                <Draggable
                                                    key={item.id}
                                                    draggableId={item.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={getItemStyle(
                                                                snapshot.isDragging,
                                                                provided.draggableProps.style
                                                            )}
                                                        >
                                                            <ItemTimeSheet title={`${item.content}`} />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))
                                            : (
                                                <div className="opacity-25 px-2 text-sm">Drop items here</div>
                                            )
                                    }
                                    {provided.placeholder}
                                </ItemListTime>
                            </div>
                        )}
                    </Droppable>
                ))}
            </DragDropContext>
        </>
    );
}

export default QuoteApp
