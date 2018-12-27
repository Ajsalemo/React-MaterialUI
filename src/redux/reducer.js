// -------------------------------------------- Imports -------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------- //

import { SUBMIT_REQUEST } from './types';

// ------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------- //

const weatherData = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_REQUEST:
            return {
                information: action.payload
            }
    
        default:
            return state;
    }
}

// ------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------- //

export default weatherData;

// ------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------- //