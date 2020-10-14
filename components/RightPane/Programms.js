import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredLaunchMissions } from '../../store/slices/mission';
import Mission from './Mission';
import styles from '../../styles/Programms.module.css'

const Programms = () => {

    const dispatch = useDispatch()
    const { error, loading, missions } = useSelector(state => state.missions);

    useEffect(() => {
        dispatch(getFilteredLaunchMissions())
    }, []);

    return(
        <div className={styles.programmsContainer}>
            {missions.length > 0 ? <h5>Total launch Programms {missions.length}</h5> : null}
            <div className="row">
                {missions.length > 0 ? missions.map((mission) => {
                    const image = mission.links.mission_patch;
                    const flightNumber = mission.flight_number;
                    const missionName = `${mission.mission_name} #${flightNumber}`;
                    const missionIds = mission.mission_id;
                    const launchYear = mission.launch_year;
                    const successfulLaunch = mission.launch_success;
                    const successfulLanding = 'NO_API_';
                    const missionDetails = {image,missionName,missionIds,launchYear,successfulLaunch,successfulLanding}

                    return (
                        <div className="col-sm-6 col-md-3 col-12" key={flightNumber}>
                            <Mission missionDetails={missionDetails} key={flightNumber}/>
                        </div>
                    )
                }) : <p className={styles.noProgramms}>No Missions</p>}
            </div>
        </div>
    )
}

export default Programms;