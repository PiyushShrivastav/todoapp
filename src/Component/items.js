import '../App.css';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import { Col } from 'reactstrap';
import { useState } from 'react';

const Items = (props) => {
    const [isDeleted, setIsDeleted] = useState(false);
    const deleteListItem = () => {
        setIsDeleted(true);
    }

    return (
        !isDeleted ? <div className=" text-left p-1 row mt-2 item">
            <Col className="row" sm="12">
                <Col sm="10">
                    <li key={props.key}>
                        <span>
                            {props.text}
                        </span>
                    </li>
                </Col>
                <Col sm="2" className="text-end">
                    <IconButton aria-label="delete" size="small" onClick={deleteListItem}>
                        <ClearIcon style={{ color: "white" }} />
                    </IconButton></Col>
            </Col>
        </div> : ''
    )

}

export default Items;