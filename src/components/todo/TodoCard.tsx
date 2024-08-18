import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { removeTodos, toggleCompleted } from "@/redux/features/todoSlice";

type TTodoCartProps = {
    id: string,
      title: string,
      description: string,  
      isCompleted?: boolean
}

const TodoCard = ({id,title, description,isCompleted}: TTodoCartProps) => {

    const dispatch = useAppDispatch(); 
    const toggleSate = ()=>{
       dispatch(toggleCompleted(id))
    }

    return (
        <div className="bg-white rounded-md flex justify-between items-center p-3 border ">
                <input onChange={toggleSate} type="checkbox" name="complete" id="" />
                <p className="font-semibold">{title}</p>
                <p>{description}</p>
                <div>{isCompleted? <p className="text-green-600">Done</p>: <p className="text-red-500">Pending</p>}</div>
                <div className="space-x-5">
                    <Button onClick={() => dispatch(removeTodos(id))} className="bg-red-500"><FaRegTrashAlt /></Button>
                    <Button className="bg-[#5C53FE]"><FaRegEdit /></Button>
                </div>
            </div>
    );
};

export default TodoCard;