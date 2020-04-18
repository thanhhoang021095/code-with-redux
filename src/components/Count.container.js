import { connect } from "react-redux";
import {increaseAction,decreaseAction} from "components/Count.action";
import CountComponent from "components/CountComponent"

const mapStateToProps = (store) => ({
    count: store.CountReducer
})

const mapDisPatchToProps = {
    increaseAction,
    decreaseAction
}

export default connect(mapStateToProps,mapDisPatchToProps)(CountComponent)