import ItemBoard from "@/components/ItemBoard"
import ItemListBoard from "@/components/ItemList/ItemListBoard"

const Board = () => {
    return (
        <>
            <ItemListBoard title={"Open"} color="bg-yellow-500">
                    <li>
                        <ItemBoard></ItemBoard>
                    </li>
                    <li>
                        <ItemBoard></ItemBoard>
                    </li>
            </ItemListBoard>
            
            <ItemListBoard title={"Development"} color="bg-blue-500">
                    <li>
                        <ItemBoard></ItemBoard>
                    </li>
                    <li>
                        <ItemBoard></ItemBoard>
                    </li>
            </ItemListBoard>

            <ItemListBoard title={"Delivery"} color="bg-green-500">
                    <li>
                        <ItemBoard></ItemBoard>
                    </li>
                    <li>
                        <ItemBoard></ItemBoard>
                    </li>
            </ItemListBoard>

            <ItemListBoard title={"Closed"} color="bg-red-500">
                    <li>
                        <ItemBoard></ItemBoard>
                    </li>
                    <li>
                        <ItemBoard></ItemBoard>
                    </li>
            </ItemListBoard>

        </>
    )
}

export default Board