import React from 'react';
import { SUCCESSFUL_LANDING } from '../../constants';
import styles from '../../styles/Filters.module.css';

const SuccessfulLanding = () => {

    const selectedLandingVal = (val) => {
        // Implement when API has valid key
    }
    return(
        <div className={styles.filterSubContainer}>
            <p className={styles.yearHeader}>Successful Landing</p>
            <div className="row">
            {SUCCESSFUL_LANDING.map((successfulLanding,index)=>{
                return(
                    <div className="col-sm-6 col-6" key={index}>
                        <button disabled={true} className={`btn btn-success ${styles.yearBtn}`} key={index} onClick={() => selectedLandingVal(successfulLanding)}>{successfulLanding}</button>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default SuccessfulLanding;