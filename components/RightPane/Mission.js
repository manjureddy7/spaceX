import React from 'react';
import styles from '../../styles/Mission.module.css';

const Mission = ({missionDetails}) => {
    const {image,missionName,missionIds,launchYear,successfulLaunch,successfulLanding} = missionDetails;

    return(
        <div className={styles.missionContainer}>
            <div className={styles.imageContainer}></div>
            <p className={styles.missionName}>{missionName}</p>
            <p>
                <span className={styles.textBold}>Mission ids:</span>
                <span className={styles.textBlue}>{missionIds.length > 0 ? missionIds : ''}</span>
            </p>
            <p>
                <span className={styles.textBold}>Launch Year: </span>
                <span className={styles.textBlue}>{launchYear}</span>
            </p>
            <p>
                <span className={styles.textBold}>Successful Launch: </span>
                <span className={styles.textBlue}>{successfulLaunch ? 'True': 'False'}</span>
            </p>
            <p>
                <span className={styles.textBold}>Successful Landing: </span>
                <span className={styles.textBlue}>{successfulLanding}</span>
            </p>
        </div>
    )
}

export default Mission;