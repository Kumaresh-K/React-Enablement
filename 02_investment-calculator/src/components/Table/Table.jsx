import styles from './Table.module.css';
import {calculateInvestmentResults, formatter} from '../../util/investment';

const Table = () => {
    let previousInterest = 0;
    const investment = {
        initialInvestment : 15000,
        annualInvestment : 1200,
        expectedReturn : 6,
        duration : 10,
    };

    const calculations = calculateInvestmentResults(investment);

    const tableContent = calculations.map((obj, i)=>{
        
        let result = <tbody key={i}>
            <tr>
                <td>{obj.year}</td>
                <td>{formatter.format(obj.valueEndOfYear)}</td>
                <td>{formatter.format(obj.interest)}</td>
                <td>{formatter.format(obj.interest+previousInterest)}</td>
                <td>{formatter.format(investment.initialInvestment + (obj.year*obj.annualInvestment))}</td>
            </tr>
        </tbody>
        previousInterest += obj.interest; 
        return result;
    });

    return(
        <table id={styles.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            {tableContent}
        </table>
    );
};

export default Table;