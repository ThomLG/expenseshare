//-------Fetch d'un catégorie--------------------------------------
export function fetchCategories(){
    return (dispatch)=> {
        dispatch(fetchCategoriesPending());
        fetch(process.env.REACT_APP_API_URL + '/categories')
            .then(response=>response.json())
            .then(data=>dispatch(fetchCategoriesSuccess(data["hydra:member"])))
            .catch(err=>dispatch(fetchCategoriesFailure(err)))
    }
}

export const FETCH_CATEGORIES_PENDING='FETCH_CATEGORIES_PENDING';
function fetchCategoriesPending(){
    return {
        type : FETCH_CATEGORIES_PENDING
    };
}

export const FETCH_CATEGORIES_SUCCESS='FETCH_CATEGORIES_SUCCESS';
function fetchCategoriesSuccess(categories){
    return {
        type : FETCH_CATEGORIES_SUCCESS, payload : categories
    };
}

export const FETCH_CATEGORIES_FAILURE='FETCH_CATEGORIES_FAILURE';
function fetchCategoriesFailure(error){
    return {
        type : FETCH_CATEGORIES_FAILURE, payload : error
    };
}