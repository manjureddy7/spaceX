import React from 'react';
import { SUCCESSFUL_LAUNCH } from '../../constants';
import styles from '../../styles/Filters.module.css';
import { setSelectedSuccessLaunch, getFilteredLaunchMissions } from '../../store/slices/mission';
import { useDispatch, useSelector } from 'react-redux';

const SuccessfulLaunch = () => {
    const dispatch = useDispatch()
    const { selectedSuccessLaunch } = useSelector(state => state.missions);
    const selectedLaunchVal = (val) => {
        dispatch(setSelectedSuccessLaunch({selectedSuccessLaunch: val}))
        dispatch(getFilteredLaunchMissions())
    }
    return(
        <div className={styles.filterSubContainer}>
            <p className={styles.yearHeader}>Successful Launch</p>
            <div className="row">
                {SUCCESSFUL_LAUNCH.map((successfulLaunch,index)=>{
                    return(
                        <div className="col-sm-6 col-6" key={index}>
                            <button
                                className={`btn btn-success ${styles.yearBtn}`}
                               key={index}
                               onClick={() => selectedLaunchVal(successfulLaunch)}
                               style={{backgroundColor: selectedSuccessLaunch === successfulLaunch && '#035015'}}
                            >
                                {successfulLaunch}
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SuccessfulLaunch;