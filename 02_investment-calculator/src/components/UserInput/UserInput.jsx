import styles from './UserInput.module.css';

const UserInput = ({userData, onChange}) => {

    return(
        <div id={styles.userInput}>
            <div className={styles.inputGroup}>
                <span>
                    <label>Initial Inverstment</label>
                    <input type='number' 
                    value={userData.initialInvestment} 
                    onChange={(event)=>onChange('initialInvestment', event.target.value)}>   
                    </input>
                </span>
                <span>
                    <label>Annual Inverstment</label>
                    <input type='number' 
                    value={userData.annualInvestment} 
                    onChange={(event)=>onChange('annualInvestment', event.target.value)}> 
                    </input>
                </span>
            </div>
            <div className={styles.inputGroup}>
                <span>
                    <label>Expected Return</label>
                    <input type='number'
                    value={userData.expectedReturn} 
                    onChange={(event)=>onChange('expectedReturn', event.target.value)}> 
                    </input>
                </span>
                <span>
                    <label>Duration</label>
                    <input type='number'
                    value={userData.duration} 
                    onChange={(event)=>onChange('duration', event.target.value)}> 
                    </input>
                </span>
            </div>
        </div>
    );
};

export default UserInput;