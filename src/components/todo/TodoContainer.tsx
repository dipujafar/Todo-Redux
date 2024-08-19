import { useAppSelector } from "@/redux/hook";
import TodoCard from "./TodoCard";
import Todofilter from "./Todofilter";
import TodoModal from "./TodoModal";
import { RootState } from "@/redux/store";
import { useGetPostQuery } from "@/redux/api/api";
import { useState } from "react";
import { CloudCog } from "lucide-react";

const TodoContainer = () => {
    const [priority, setPriority] = useState<string>("");
    console.log
    // Form Local state

    //form server
    const {data: todos = [], isLoading, isError}= useGetPostQuery(priority)

    
    return (
        <div>
           <div className="flex justify-between mb-2">
            <TodoModal></TodoModal>
            <Todofilter priority={priority} setPriority={setPriority}></Todofilter>
           </div>
           <div className="bg-praimary-gradient w-full  rounded-xl p-2 ">
            <div className="bg-white p-5 w-full h-full rounded-lg space-y-5">
            {/* <div className="bg-white text-2xl p-5 flex justify-center items-center font-medium">
                <p>There is no task pending</p>
            </div> */}
            {
                //@ts-ignore
                todos?.map(todo =><TodoCard {...todo}></TodoCard>)
            }
            </div>
           </div>
        </div>
    );
};

export default TodoContainer;