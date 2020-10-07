import React from 'react';
import { LAUNCH_YEARS } from '../../constants';
import styles from '../../styles/Filters.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedYear, getFilteredLaunchMissions } from '../../store/slices/mission';

const LaunchYear = () => {

    const { selectedyear } = useSelector(state => state.missions);
    const dispatch = useDispatch()
    const selectedLaunchYear = (year) => {
        dispatch(setSelectedYear({selectedYear: year}));
        dispatch(getFilteredLaunchMissions());
    }
    return(
        <>
            <p className={styles.yearHeader}>Launch Year</p>
            <div className="row">
                {LAUNCH_YEARS.map((launchYear,index)=>{
                    return(
                        <div className="col-sm-6 col-6" key={index}>
                            <button 
                                className={`btn btn-success ${styles.yearBtn}`}
                                key={index}
                                onClick={() => selectedLaunchYear(launchYear)}
                                style={{backgroundColor: selectedyear === launchYear && '#035015'}}
                            >
                                {launchYear}
                            </button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default LaunchYear;