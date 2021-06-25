import '../App.css';
import { TextField } from '@material-ui/core';
import { Col } from 'reactstrap';
import { useState } from 'react';
import Items from './items';

const Todoapp = () => {
    const [item, addItem] = useState('');
    const [newItem, setNewItem] = useState([]);

    const addNewItem = e => {
        addItem(e.target.value);
    }

    const addListItem = e => {
        e.preventDefault();

        setNewItem((displayValue) => {
            addItem('')
            return [...displayValue, item];
        })

    }

    return (
        <div className="col-sm-12 mt-4">
            <Col md={{ span: 6, offset: 4 }}>
                <div className="card text-center" style={{ width: 400, height: 600, padding: 10 }}>
                    <h2>
                        Todo App
                    </h2>
                    <br />

                    <form onSubmit={addListItem}>
                        <div className="row mb-5">
                            <Col sm="8" style={{ maxHeight: 20 }}>
                                <TextField value={item} required id="standard-required" label="Enter new Task " onChange={addNewItem} />
                            </Col>
                            <Col sm="4" style={{ maxHeight: 20 }}>
                                <input type="submit" value="Add" className="btn btn-primary" />

                            </Col>
                        </div>
                    </form>

                    <div className="overflow-y text-start p-4" >
                        {newItem && newItem.map((val, index) => {
                            return <Items text={val} key={index} />
                        })}

                    </div>

                </div>
            </Col>
        </div >
    );
}

export default Todoapp;