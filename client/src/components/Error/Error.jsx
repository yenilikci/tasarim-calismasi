import React from "react";
import {Alert} from "react-bootstrap";
import "./error.css";

const Error = ({ variant = "info", children }) => {
    return (
        <Alert variant={variant} className="error-style">
            <strong>{children}</strong>
        </Alert>
    );
};

export default Error;
