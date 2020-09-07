const contactReducer = (contactCollection = [], action) => {
    switch(action.type) {

        case "ADD_CONTACT":
            return contactCollection = [...contactCollection , action.payload]
            
        case "REMOVE_CONTACT":

            return contactCollection = contactCollection.filter((item, index) => index !== action.payload)
                 
          
        default:
            return contactCollection
    
    }
}
export default contactReducer