import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
    return (
        <Container>
           <h1 className="text-2xl font-semibold text-center"> My Todo</h1>
            <TodoContainer></TodoContainer>
        </Container>
    );
};

export default Todo;