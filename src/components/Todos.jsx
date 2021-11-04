import React from "react";
import {useState} from 'react';

function Todos(){
    const [items, setItems] = useState([])
    const [newItemText, setNewItemText] =  useState('')
    const [currentTab, setCurrentTab] =  useState('All')
    const addItem = async () => {
        
        setItems([...items, {txt: newItemText, completed: false}])
        setNewItemText('')

    };
    

    const updateNewItemText = async (event) => {
        setNewItemText(event.currentTarget.value)

    };

    const toggleCompleted = async (event,idx)=>{
        console.log(event.target.checked)
        let newItemsList = []
        items.map((item, i)=> {
            if(i == idx){
                item.completed = event.target.checked
            }
                newItemsList.push(item)
        })
        setItems(newItemsList)
    };
    const deleteItem = async (event, idx) => {
        console.log('deleteItem',event, idx)
        let newItemsList = []
        items.map((item, i) => {
            if(i == idx){

            }else{
                newItemsList.push(item)
            }
        })
        setItems(newItemsList)

    }

    return(
        <>
            <div className="todos-container">
                <input type="text" className ="todos-input"placeholder="Task..." value={newItemText} onChange={updateNewItemText}/>
                <button className="add-btn" onClick={addItem}>Add</button>
            </div>

            {/*<p>{JSON.stringify(items)}</p>
            <p>{currentTab}</p>*/}

            <div className="todo-list-container">
                <div className="todo-list">
                    <ul className="todo-ul">
                        {/*when item exist and when there is more than one item then loop over each items grab one item at a time and for each item return this*/}
                        {items && items.length > 0 && items.map((item, idx) => {
                            // is the current item in the loop completed AND is the current tab == completed, if yes show the item
                            if(item.completed && currentTab == 'Completed'){
                                return <li className="task-li" key={idx}>
                            <input type="checkbox" className="checkbox" onChange={(event)=> toggleCompleted(event, idx)}/>
                            <span>{item.txt}</span>
                            <i class="fa-regular fa-trash-can" onClick={(event)=> deleteItem(event, idx)} style={{float:"right", color:"red", marginRight:"10px"}}></i>
                        </li>
                            } else if(!item.completed && currentTab == 'Active') {
                                return <li className="task-li" key={idx}>
                            <input type="checkbox" className="checkbox" onChange={(event)=> toggleCompleted(event, idx)}/>
                            <span>{item.txt}</span>
                            <i class="fa-regular fa-trash-can" onClick={(event)=> deleteItem(event, idx)} style={{float:"right", color:"red", marginRight:"10px"}}></i>
                        </li>

                            } else if(currentTab == 'All'){
                                return <li className="task-li" key={idx}>
                            <input type="checkbox" className="checkbox" onChange={(event)=> toggleCompleted(event, idx)}/>
                            <span>{item.txt}</span>
                            <i class="fa-regular fa-trash-can" onClick={(event)=> deleteItem(event, idx)} style={{float:"right", color:"red", marginRight:"10px"}}></i>
                        </li>
                            }
                        
                        })} 
                    
                    </ul>
                    
                </div>
            </div>

            <div className="show-container">
                <div>
                    <button onClick={() => setCurrentTab('All')} className={currentTab=='All' ?  "all-btn-active" : "all-btn"}>All</button>
                    <button onClick={() => setCurrentTab('Active')} className={currentTab=='Active' ?  "active-btn-active" : "active-btn"}>Active</button>
                    <button onClick={() => setCurrentTab('Completed')} className={currentTab=='Completed' ?  "complete-btn-active" : "complete-btn"}>Complete</button>
                </div>


            </div>
        </>
    )
};
export default Todos;