
const initialState = {
    Component: <p>HOC component</p>
}

const BaiTapHOCReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'DANG_NHAP':
            state.Component = action.Component
            return { ...state }

        case 'DANG_KY':
            state.Component = action.Component
            return { ...state }

        default:
            return state
    }
}
export default BaiTapHOCReducer;
