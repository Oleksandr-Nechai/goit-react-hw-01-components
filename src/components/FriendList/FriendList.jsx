import styles from "./FriendList.module.css";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem"

function FriendList({ friends }) {
    const friend = friends.map(friend => (
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    key={friend.id}
                />
            ))
  
    return (
        <ul className={styles.friendList}>
            {friend }
</ul>

    )

}

FriendList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired
    )
}


export default FriendList;