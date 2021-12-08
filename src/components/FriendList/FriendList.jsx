import styles from "./FriendList.module.css";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem"

function FriendList({ friends }) {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => (
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    key={friend.id}
                />
            ))}
  
</ul>

    )

}

FriendList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number.isRequired,
        }).isRequired
    )
}


export default FriendList;