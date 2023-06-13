import ItemBoard from "@/components/ItemBoard"
import ItemListBoard from "@/components/ItemList/ItemListBoard"
import ItemListTime from "@/components/ItemList/ItemListTime"
import ItemTimeSheet from "@/components/ItemTimeSheet"

const Board = () => {
    return (
        <>
            <ItemListBoard title={"Issues"} >
                <ItemTimeSheet />
                <ItemTimeSheet />
                <ItemTimeSheet />
                <ItemTimeSheet />
                <ItemTimeSheet />
                <ItemTimeSheet />
            </ItemListBoard>

            <ItemListTime day={"Monday"}>
                <ItemTimeSheet time={5} />
                <ItemTimeSheet />
            </ItemListTime>

            <ItemListTime day={"Tuesday"} >
                <ItemTimeSheet />
                <ItemTimeSheet />
            </ItemListTime>

            <ItemListTime day={"Wednesday"} >
                <ItemTimeSheet />
                <ItemTimeSheet />
            </ItemListTime>

            <ItemListTime day={"Thursday"} >
                <ItemTimeSheet />
                <ItemTimeSheet />
            </ItemListTime>

            <ItemListTime day={"Friday"} >
                <ItemTimeSheet />
                <ItemTimeSheet />
            </ItemListTime>

            <ItemListTime day={"Saturday"} >
                <ItemTimeSheet />
                <ItemTimeSheet />
            </ItemListTime>

            <ItemListTime day={"Sunday"} >
                <ItemTimeSheet />
                <ItemTimeSheet />
            </ItemListTime>
        </>
    )
}

export default Board