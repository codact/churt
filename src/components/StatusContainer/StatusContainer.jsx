import React from 'react'
import './StatusContainer.scss'


const StatusContainer = (props) => {
    return (
        <div>
            <div className="feed-message">
                <p><strong>Anonymous</strong><span>{props.data.date}</span> </p>
                <p>{props.data.body}
                    <span>
                        <i id="update" className="fas fa-pen-fancy"></i>&nbsp; &nbsp;
                    <i id="delete" className="fas fa-trash-alt"></i>
                    </span>
                </p>
            </div><br></br>

        </div>
    )
}

export default StatusContainer;