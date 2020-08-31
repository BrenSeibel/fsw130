function removeFavoriteThing(thing) {
    return {
        type: "REMOVE_FAVORITE_THING",
        payload: thing
    }
}

function removeFavoriteThingsReducer(removeFavoriteThings = [], action) {
    switch(action.type) {
        case "ADD_FAVORITE_THING":
            return [...removeFavoriteThings, action.payload]
        case "REMOVE_FAVORITE_THING": {
            const updateArr = removeFavoriteThings.filter(thing => thing.toLowerCase() !==
            action.payload.toLowerCase())
            return updatedArr
        }
        default:
            return FavoriteThings    
    }
}