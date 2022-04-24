const initState = []

const alerts = (state = initState, action) => {
    switch (action.type) {
        case 'SET_ALERT':
            return [...state, action.payload]
        case 'REMOVE_ALERT':
            console.log("REMOVEEEEEEEEEE")
            return state.filter((alert) => alert.id !== action.payload)
        default:
            return state
    }
}
export default alerts;