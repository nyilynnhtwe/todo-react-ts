import { BiCheckboxChecked, BiTrashAlt } from 'react-icons/bi';
import { Todo } from './FormDiv';


function TodoDiv( { data } : Todo  ) 
    {   
    const id = data.id;
    const desc = data.desc;
    const isFinished =data.isFinished;

        

    return (
        <>
            <div className="d-flex justify-content-between todos">
                <p>{desc}</p>
                <div id="checks">
                    <BiTrashAlt className="icons" size={20} />
                    <BiCheckboxChecked className="icons" size={25} />
                </div>
            </div>
        </>
    )
}

export default TodoDiv;