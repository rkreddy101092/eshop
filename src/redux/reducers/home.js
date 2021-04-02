const intialState = {
    banners: [
        'https://images.unsplash.com/photo-1612888328032-d12cccaa61b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1035&q=80',
        'https://images.unsplash.com/photo-1530074555793-43f99fbc97de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1848&q=80',
    ],
    categories: [
        { name: 'Biryani', image: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
        { name: 'Starters', image: 'https://images.unsplash.com/photo-1553625024-acdb028b1f9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80' },
        { name: 'Main Course', image: 'https://images.unsplash.com/photo-1553625024-acdb028b1f9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80' },
        { name: 'Fried Rice', image: 'https://images.unsplash.com/photo-1553625024-acdb028b1f9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80' },
        { name: 'Soups', image: 'https://images.unsplash.com/photo-1553625024-acdb028b1f9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80' },
        { name: 'Breads', image: 'https://images.unsplash.com/photo-1553625024-acdb028b1f9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80' },
        { name: 'Desserts', image: 'https://images.unsplash.com/photo-1561845730-208ad5910553?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
    ]
}

const SET_BANNERS = 'session/SET_BANNERS';

const homeReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_BANNERS: {
            return {
                ...state,
            }
        }
        default: return state;
    }
}

export default homeReducer;