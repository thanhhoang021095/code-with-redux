import React from "react";
import CountComponent from "./component/Count.container"

// const CountComponent = React.lazy(() => import('./components/CountComponent.container'))


export default function Main() {
    return (
        <div>
            <CountComponent />
        </div>
    )
}