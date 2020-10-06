import React from 'react';
import { getAllMissions, resetAllSelections } from '../../store/slices/mission';
import { useDispatch } from 'react-redux';

const ResetAllFilters = () => {

    const dispatch = useDispatch();
    const resetFilters = () => {
        dispatch(getAllMissions());
        dispatch(resetAllSelections())
    }
    return(
        <>
            <button className="btn btn-danger" onClick={resetFilters}>Clear all Filters</button>
        </>
    )
}

export default ResetAllFilters;