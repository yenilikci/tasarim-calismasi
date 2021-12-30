import {Spinner} from "react-bootstrap";
import './loading.css'

const Loading = ({size = 100}) => {
    return (
        <div className="spinner-div">
            <Spinner style={{width: size, height: size}} animation="border"/>
        </div>
    )
}

export default Loading;
