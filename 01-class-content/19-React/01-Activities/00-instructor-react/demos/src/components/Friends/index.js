import { useState } from 'react';
import Wrapper from '../Wrapper';
import { Card } from './Card';
import friendsData from '../../friends.json';

export const Friends = () => {
  const [friends, setFriends] = useState([...friendsData]);

  const handleClick = (id) => {
    const remainingFriends = friends.filter((friend) => friend.id !== id)
    setFriends([...remainingFriends]);
  };

  return (
    <Wrapper>
      {/* <Click /> */}
      {friends.map((friend) => (
        <Card
          key={friend.id}
          {...friend}
          handleClick={handleClick}
        />
      ))}
    </Wrapper>
  );
}
