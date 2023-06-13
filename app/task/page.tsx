import ItemBoard from "@/components/ItemBoard";
import ItemList from "@/components/ItemList";
import ItemTimeSheet from "@/components/ItemTimeSheet";
import Summary from "@/components/Summary";
import TaskInfoCard from "@/components/TaskInfoCard";

export default function Task() {
    return (
        <>
            <TaskInfoCard />
            <div>

                <div className="bgCard">
                    <Summary
                        title={"Details"}
                    >
                        <div className="mt-4  text-base text-zinc-400 grid grid-cols-2">
                            <label>Type:</label>
                            <span> Corrective</span>

                            <label>Priority:</label>
                            <span> Medium </span>

                            <label>Components:</label>
                            <span> ALEXBVART </span>

                            <label>Status:</label>
                            <span> IN PROGRESSB </span>
                        </div>
                    </Summary>
                </div>

                    <ItemList />
            </div>

            <TaskInfoCard />

        </>

    )
}

