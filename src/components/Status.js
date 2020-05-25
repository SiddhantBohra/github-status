import React, {useEffect, useState} from 'react';
import {Row} from 'reactstrap'

const Status = ({name,status}) => {
    const [color,setColor] = useState("")
    useEffect(() =>{
        if(status === 'operational'){
            setColor(color + 'rgba(105, 228, 166, 0.2)')
        }
        else{
            setColor(color + 'rgba(255,0,0,0.3)')
        }
    },[color,status])
    return (
        <div>
            <Row className='status'>
                <p className="status_name">
                    {name}
                </p>
                <p className= "status_flag" style={{fontSize : '1.3rem',background : color, padding : "20px 20px",borderRadius : "25px",textTransform : "capitalize",marginBlockStart : "1em",marginBlockEnd:"1em",marginInlineStart : '0px',marginInlineEnd:'0px'}}>
                    {status}
                </p>
            </Row>
        </div>
    );
};

export default Status;
