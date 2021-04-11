import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNexLevel } = useContext(ChallengesContext);

    const percentToNexLevel = Math.round((currentExperience*100) / experienceToNexLevel);

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNexLevel}%` }}/>
                <span className={styles.currentExperience} style={{ left: `${percentToNexLevel}%`}}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNexLevel} xp</span>
        </header>
    );
}