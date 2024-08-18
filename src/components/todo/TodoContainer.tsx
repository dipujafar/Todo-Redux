import { useAppSelector } from "@/redux/hook";
import TodoCard from "./TodoCard";
import Todofilter from "./Todofilter";
import TodoModal from "./TodoModal";
import { RootState } from "@/redux/store";

const TodoContainer = () => {
    const {todos} = useAppSelector((state: RootState)=> state.todos);

    console.log(todos)
    
    return (
        <div>
           <div className="flex justify-between mb-2">
            <TodoModal></TodoModal>
            <Todofilter></Todofilter>
           </div>
           <div className="bg-praimary-gradient w-full  rounded-xl p-2 ">
            <div className="bg-white p-5 w-full h-full rounded-lg space-y-5">
            {/* <div className="bg-white text-2xl p-5 flex justify-center items-center font-medium">
                <p>There is no task pending</p>
            </div> */}
            {
                todos.map(todo=><TodoCard {...todo}></TodoCard>)
            }
            </div>
           </div>
        </div>
    );
};

export default TodoContainer;