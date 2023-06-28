"use client"
import ItemBoard from "@/components/ItemBoard"
import ItemListBoard from "@/components/ItemList/ItemListBoard"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import useBoard from "./useBoard";


const Board = () => {

    const { state, onDragEnd } = useBoard();

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                {state?.map((sflow, index) => (

                    <Droppable key={index} droppableId={`${index}`}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                // style={getListStyle(snapshot.isDraggingOver)}
                                {...provided.droppableProps}
                            >
                                <ItemListBoard title={sflow.status} numberOfTasks={sflow.issues.length}>
                                    {
                                        sflow.issues.length ?
                                        sflow.issues.map((issue, index)=>(
                                            <Draggable
                                                    key={issue.id}
                                                    draggableId={issue.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            // style={getItemStyle(
                                                            //     snapshot.isDragging,
                                                            //     provided.draggableProps.style
                                                            // )}
                                                        >
                                                            <ItemBoard issueKey={issue.issueKey} 
                                                                    issueSummary={issue.issueSummary}
                                                                    isDragging={snapshot.isDragging}
                                                            />
                                                        </div>
                                                    )}
                                                </Draggable>
                                        ))

                                        : (<div className="opacity-25 px-2 text-sm">Drop items here</div>)
                                    }
                                </ItemListBoard>
                            </div>)}
                    </Droppable>
                ))}
            </DragDropContext>

        </>
    )
}

export default Board


{/* <ItemListBoard title={"Open"} color="bg-yellow-500">
<ItemListBoard title={"Development"} color="bg-blue-500">
<ItemListBoard title={"Delivery"} color="bg-green-500">
<ItemListBoard title={"Closed"} color="bg-red-500">
</ItemListBoard> */}