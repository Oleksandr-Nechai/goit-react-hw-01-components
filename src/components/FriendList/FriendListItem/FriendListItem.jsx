import styles from "./FriendListItem.module.css";
import PropTypes from "prop-types";

function FriendListItem({ avatar, name, isOnline,  }) {
    return (
        <li className={styles.item} >
            <span className={styles.status} style={isOnline ? {backgroundColor:"green"} : {backgroundColor:"red"}}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li> 
    )

}

FriendListItem.prototype = {
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
}


export default FriendListItem;