function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

function countReducer (count = 0, action) {
    switch(action.type) {
        case "CHANCE_COUNT":
            return count + action.payload
        default:
            return count    
    }
}