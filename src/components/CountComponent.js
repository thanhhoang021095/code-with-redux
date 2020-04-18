import React from "react";

export default function CountComponent(props) {
    const handleIncrease = () => {
        props.increaseAction()
    }
    const handleDecrease = () => {
        props.decreaseAction()
    }
    return (
        <div>
            <button style={{ fontSize: "18px", padding: "10px", margin: "20px", backgroundColor: "red", color: "#fff" }}
                onClick={handleIncrease}
            >
                Increase
            </button>
            <button style={{ fontSize: "18px", padding: "10px", margin: "20px", backgroundColor: "blue", color: "#fff" }}
                onClick={handleDecrease}
            >
                Decrease
            </button>
            <span style={{ fontSize: "35px", fontWeight: 500 }}>{props.count}</span>
        </div>
    )
}

