import { connect } from "react-redux";
import {increaseAction,decreaseAction} from "./Count.action";
import CountComponent from "./CountComponent"

const mapStateToProps = (store) => ({
    count: store.CountReducer
    
})

const mapDisPatchToProps = {
    increaseAction,
    decreaseAction
}

export default connect(mapStateToProps,mapDisPatchToProps)(CountComponent)