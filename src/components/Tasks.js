import React, { useState } from 'react'
import "../styles/Tasks.css";

function Tasks({ name, deleteHandler }) {
    const [completed, setCompleted] = useState(false);

    return (
        <div className="task">

            <div className='task__words'>
                <p className={completed && "completed"}>
                    {name}
                </p>
            </div>

            <div className="task__btns">
                <button
                    className={`task__btn task__btn--completed`}
                    onClick={(e) => setCompleted(true)}
                >
                    completed
                </button>

                <button
                    onClick={(e) => deleteHandler({ e: e, currentTask: name })}
                    className="task__btn task__btn--delete"
                >
                    delete
                </button>

            </div>
        </div>
    );
}
export default Tasks