import React from 'react';
import styles from '../../styles/Mission.module.css';

const Mission = ({missionDetails}) => {
    const {image,missionName,missionIds,launchYear,successfulLaunch,successfulLanding} = missionDetails;

    return(
        <div className={styles.MissionContainer}>
            <div className={styles.ImageContainer}></div>
            <p className={styles.MissionName}>{missionName}</p>
            <p>
                <span className={styles.TextBold}>Mission ids:</span>
                <span className={styles.TextBlue}>{missionIds.length > 0 ? missionIds : ''}</span>
            </p>
            <p>
                <span className={styles.TextBold}>Launch Year: </span>
                <span className={styles.TextBlue}>{launchYear}</span>
            </p>
            <p>
                <span className={styles.TextBold}>Successful Launch: </span>
                <span className={styles.TextBlue}>{successfulLaunch ? 'True': 'False'}</span>
            </p>
            <p>
                <span className={styles.TextBold}>Successful Landing: </span>
                <span className={styles.TextBlue}>{successfulLanding}</span>
            </p>
        </div>
    )
}

export default Mission;