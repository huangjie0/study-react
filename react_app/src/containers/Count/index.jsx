import CountUi from "../../components/Count";
import { connect } from 'react-redux';
import { createAddAction , createSubtractionAction , createAsyncAddAction } from '../../redux/count_action'

const mapStateToProps = state => ({count:state})

const mapDispatchToProps = dispatch => (
    {
        add:(number)=>{
            dispatch(createAddAction(number))
        },
        subtraction:(number)=>{
            dispatch(createSubtractionAction(number))
        },
        asyncAdd:(number,time)=>{
            dispatch(createAsyncAddAction(number,time)) 
        }
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(CountUi)


