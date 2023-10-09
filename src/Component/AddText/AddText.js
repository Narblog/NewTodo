

import DataTime from "../DataTime/DataTime"
import { BsFillPencilFill, BsArchiveFill,BsCheckCircleFill } from "react-icons/bs";
import "./AddText.css"

import { useState } from "react";
export default function AddText({ todos, onDelete, onChangeTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <ul className="addtext">
            {
                todos.map((todo, id) => {
                    return (
                        <div className="todoText">
                            {
                                isEditing ? (
                                    <li>
                                        <input type="checkbox" />
                                        <input
                                            value={todo.Text}
                                            onChange={e => {
                                                onChangeTodo({
                                                    ...todo,
                                                    Text: e.target.value
                                                });
                                            }} />
                                                <button className="buttonEdit" onClick={() => setIsEditing(false)}><BsCheckCircleFill/></button>

                                    </li>

                                ) : <li
                                    key={id}>
                                    <input type="checkbox" />

                                    <span>
                                        {todo.Text}
                                        {onDelete}
                                        {onChangeTodo}</span>

                                </li>
                            }

                            <div className="todoicons">
                                <div>
                                    < BsFillPencilFill
                                        className="BsFillPencilFill"
                                        onClick={() => {
                                            setIsEditing(true)
                                        }}
                                    />
                                    <BsArchiveFill
                                        className="BsArchiveFill" onClick={() => {
                                            onDelete(todo.id)
                                        }} />
                                </div>
                                <DataTime />
                            </div>
                        </div>
                    )
                })
            }
        </ul>
    )
}
