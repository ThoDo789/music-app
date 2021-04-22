import { GET_DATA } from "../const/constant"

const initialState=[

]
const dataReducer=(state = initialState, action)=> {
    switch (action.type) {
        case GET_DATA:
            return  {
                ...state
            }
        default:
            return state
    }
}
export default dataReducer