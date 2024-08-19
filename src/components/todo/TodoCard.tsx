import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { removeTodos, toggleCompleted } from "@/redux/features/todoSlice";

type TTodoCartProps = {
    _id: string,
      title: string,
      description: string,  
      isCompleted?: boolean,
      priority: string,
}

const TodoCard = ({_id, title, description,isCompleted, priority}: TTodoCartProps) => {

    const dispatch = useAppDispatch(); 
    const toggleSate = ()=>{
       dispatch(toggleCompleted(_id))
    }

    return (
        <div className="bg-white rounded-md flex justify-between items-center p-3 border ">
                <input onChange={toggleSate} type="checkbox" name="complete" id="" />
                <p className="font-semibold">{title}</p>
                <div className="flex items-center gap-2">
                    <div className={`size-2 ${priority === "high" && "bg-red-500"}  ${priority === "medium" && "bg-yellow-500"}  ${priority === "low" && "bg-green-500"} rounded-full`}></div>
                <p className="font-semibold">{priority}</p>
                </div>
                <p>{description}</p>
                <div>{isCompleted? <p className="text-green-600">Done</p>: <p className="text-red-500">Pending</p>}</div>
                <div className="space-x-5">
                    <Button onClick={() => dispatch(removeTodos(_id))} className="bg-red-500"><FaRegTrashAlt /></Button>
                    <Button className="bg-[#5C53FE]"><FaRegEdit /></Button>
                </div>
            </div>
    );
};

export default TodoCard;