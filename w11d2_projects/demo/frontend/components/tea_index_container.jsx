import { connect } from "react-redux";
import { receiveTea } from "../actions/tea_actions";
import TeaIndex from "./tea_index";

const mapStateToProps = (state) => {
    const selectTeasByFlavor = (teas, flavor) => {
        const teasArray = Object.values(teas)
        return teasArray.filter(tea => tea.flavor === flavor)
    }
    return {
        teas: Object.values(state.teas), //convert teas object to an array of teas
        greenTeas: selectTeasByFlavor(state.teas, "green")
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveTea: (tea) => dispatch(receiveTea(tea))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex);