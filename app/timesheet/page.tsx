'use client'
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import ItemTimeSheet from "@/components/ItemTimeSheet";
import ItemListBoard from "@/components/ItemList/ItemListBoard";
import ItemListTime from "@/components/ItemList/ItemListTime";
import useTimeSheet from "./useTimeSheet";
import {ITEMS} from "@/mooks/items"

// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map((k) => ({
        id: `item-${k + offset}-${new Date().getTime()}`,
        content: `item ${k + offset}`
    }));


const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: '0',
    margin: `0`,
    // change background colour if dragging
    //background: isDragging ? "lightgreen" : "red",

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = (isDraggingOver) => ({
    // background: isDraggingOver ? "lightblue" : "blue",
    // padding: grid,
    minWidth: 140
});

const QuoteApp = () => {

    const { state, onDragEnd } = useTimeSheet();

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

                {state.map((el, ind) => (

                    <Droppable key={ind} droppableId={`${ind}`}>
                    {/* <Droppable key={ind} droppableId={`${el.day.toLocaleDateString()}`}> */}

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
                                                            <ItemTimeSheet title={`${item.content}`} isDragging={snapshot.isDragging} />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))
                                            : (
                                                <div className="flex justify-center align-middle text-center opacity-25 px-2 py-4 text-sm rounded-lg border-dashed border-2 border-neutral-600">
                                                    Drag and drop the tasks done on {el.day.toLocaleDateString('en-us', { day:"numeric", month:"long" })} here
                                                </div>
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
