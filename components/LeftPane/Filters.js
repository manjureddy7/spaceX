import React from 'react';
import LaunchYear from './LaunchYear';
import SuccessfulLaunch from './SuccessfulLaunch';
import SuccessfulLanding from './SuccessfulLanding';
import styles from '../../styles/Filters.module.css';
import ResetAllFilters from './ResetAllFilters';

// This component holds all the individual pieces

const Filters = () => {
    return(
        <div className={styles.filterContainer}>
            <h5>Filters</h5>
            <LaunchYear />
            <SuccessfulLaunch />
            <SuccessfulLanding />
            <hr />
            <ResetAllFilters />
        </div>
    )
}

export default Filters;