import { ChangeEvent, useState, MouseEvent } from "react";
import TodoDiv from "./Todo";

export interface Todo {
    id: string | number,
    desc: string,
    isFinished: boolean
}


function FormDiv() {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [desc, setDesc] = useState("");



    function handleDesc(event: ChangeEvent<HTMLInputElement>): void {
        setDesc(event.target.value);
    }

    function addTodo(event: MouseEvent<HTMLElement>): void {
        const newTodo: Todo = {
            id: Date.now().toString(),
            desc: desc,
            isFinished: false
        }
        setTodos([...todos, newTodo]);
        setDesc("");
    }

    return (
        <>
            <div className="container-fluid my-5" id="form">
                <h3 className="my-3">Mhat Mel</h3>
                <div className="input-group mb-3">
                    <input type="text" required id="todoText" value={desc} onChange={handleDesc} className="form-control" />
                    {/* <span className="input-group-text" id="inputGroup-sizing-default">Default</span> */}
                    <button type="button" onClick={addTodo} className="btn btn-success" id="addBtn">Add</button>
                </div>

                {todos.map(todo=>
                    {
                        return <TodoDiv data={todo} />
                    })}

                <div id="dataDiv">
                    Total todos : {todos.length} | Completed todos : {todos.filter((todo)=>todo.isFinished===true).length}
                    <h6 id="motiQuote">A motival quote by a motivational speaker</h6>
                </div>
            </div>
        </>
    )
}

export default FormDiv;