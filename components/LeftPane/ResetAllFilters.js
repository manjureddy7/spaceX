import React from 'react';
import { getFilteredLaunchMissions, resetAllSelections } from '../../store/slices/mission';
import { useDispatch } from 'react-redux';

const ResetAllFilters = () => {

    const dispatch = useDispatch();
    const resetFilters = () => {
        dispatch(resetAllSelections())
        dispatch(getFilteredLaunchMissions());
    }
    return(
        <>
            <button className="btn btn-danger" onClick={resetFilters}>Clear all Filters</button>
        </>
    )
}

export default ResetAllFilters;