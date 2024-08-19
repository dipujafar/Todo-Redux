import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "../ui/dialog"
import {Button} from "../ui/button"
import {Label} from "../ui/label"
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "@/redux/hook";
import { addTodos } from "@/redux/features/todoSlice";
import { useAddTodoMutation } from "@/redux/api/api";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

const TodoModal = () => {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [priority, serPrority] = useState("");
    console.log(priority)
    // const dispatch = useAppDispatch();

    const [addTodo, {data,isLoading, isError}] = useAddTodoMutation();




    const ramdomString = Math.random().toString(36).substring(2,7);

    

    const onSubmit = (e:FormEvent)=>{
        e.preventDefault();

        const taskDetails = {
            title: task,
            description,
            priority: priority,
        }

        // dispatch(addTodos(taskDetails));
        addTodo(taskDetails);
       
    }
    return (
        <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-praimary-gradient text-lg font-semibold">Add Todo</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription>
             Add your tasks that your wwant to finish.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
               Task
              </Label>
              <Input
              onBlur={(e)=> setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
               Derscription
              </Label>
              <Input
              onBlur={(e)=> setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
          <Label htmlFor="task" className="text-right">
              Priotrites : 
              </Label>
          <Select onValueChange={(value)=> serPrority(value)}>
      <SelectTrigger className="">
        <SelectValue placeholder="Select Priorites" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>priorites</SelectLabel>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="low">Low</SelectItem>
        
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
         
          <div className="flex justify-end">
            <DialogClose>
            <Button  type="submit">Save changes</Button>
            </DialogClose>
          </div>
          </form>
          
        </DialogContent>
      </Dialog>
    );
};

export default TodoModal;