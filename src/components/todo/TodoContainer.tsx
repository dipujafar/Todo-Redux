import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
    return (
        <div>
           <div className="flex justify-between mb-2">
            <Button className="bg-praimary-gradient">Add todo</Button>
            <button>Filter</button>
           </div>
           <div className="bg-praimary-gradient w-full  rounded-xl p-2 ">
            <div className="bg-white p-5 w-full h-full rounded-lg space-y-5">
            {/* <div className="bg-white text-2xl p-5 flex justify-center items-center font-medium">
                <p>There is no task pending</p>
            </div> */}
            <TodoCard></TodoCard>
            <TodoCard></TodoCard>
            <TodoCard></TodoCard>
            </div>
           </div>
        </div>
    );
};

export default TodoContainer;