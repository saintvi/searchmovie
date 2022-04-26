import React from "react";

const Loading = (props) => {
    return (
        <div
            className="loading"
            style={{
                height: props.height,
                width: props.width,
            }}
        ></div>
    );
};

export default Loading;
