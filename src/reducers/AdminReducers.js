import * as types from '../common/constants/ActionsTypes';
const initial = {
    categories  : []
,   brands      : []
,   status_products : []
,   types       : []
,   cateById    : {} 
,   status_exc  : ""
,   list_products : {}
,   curent_page : 1
,   limit_item  : 4
,   numberCate  : 0
};
export const admin = (state = initial, actions) => {
    switch(actions.type) {
        
        case types.LIMIT_ITEM : {
            return {
                ...state,
                limit_item : actions.payload
            }
        }

        case types.CURENT_PAGE : {
            return {
                ...state,
                curent_page : actions.payload
            }
        }

        case types.UPDATE_CATE_BY_ID : {
            return {
                ...state,
                cateById : {}
            }
        }
        case types.GET_LIST_STATUS : {
            return {
                ...state,
                status_products : actions.payload
            }
        }

        case types.GET_LIST_BRANDS : {
            return {
                ...state,
                brands : actions.payload
            }
        }

        case types.GET_LIST_TYPES : {
            return {
                ...state,
                types : actions.payload
            }
        }

        case types.FETCH_CATEGORIES : {
            return {
                ...state,
                categories : actions.payload,
                numberCate : actions.total
            }
        }
        
        case types.GET_LIST_PRODUCTS : {
            return {
                ...state,
                list_products : actions.payload
            }
        }

        case types.STATUS_EXC : {
            return {
                ...state,
                status_exc : actions.payload
            }
        }

        case types.FETCH_CATEGORIES_ID : {
            return {
                ...state,
                cateById : actions.payload
            }
        }
        default : return {...state};
    }
}   