const initialState = 0;

export default function CountReducer(count=initialState,action)  {
    switch(action.type) {
        case "INCREASEMENT": 
            return count + 1;
        case "DECREASEMENT":
            return count - 1;
        default:
            return count      
    }
}