import styles from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

function TransactionHistory({items}) {
    return (
       <table className={styles.transactionHistory}>
  <thead>
                <tr className={styles.title }>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <tbody>
                {items.map(item=>(
                <tr className={styles.item} key={item.id }>
                        <td>{item.type }</td>
                        <td>{item.amount }</td>
                        <td>{item.currency}</td>
                </tr>))}
  </tbody>
</table> 
    )
}

TransactionHistory.prototype = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
}

export default TransactionHistory;