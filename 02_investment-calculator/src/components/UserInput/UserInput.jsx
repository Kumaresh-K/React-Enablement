import styles from './UserInput.module.css';

const UserInput = () => {
    return(
        <div id={styles.userInput}>
            <div className={styles.inputGroup}>
                <span>
                    <label>Initial Inverstment</label>
                    <input type='number'></input>
                </span>
                <span>
                    <label>Annual Inverstment</label>
                    <input type='number'></input>
                </span>
            </div>
            <div className={styles.inputGroup}>
                <span>
                    <label>Expected Return</label>
                    <input type='number'></input>
                </span>
                <span>
                    <label>Duration</label>
                    <input type='number'></input>
                </span>
            </div>
        </div>
    );
};

export default UserInput;