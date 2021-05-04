import { useState } from 'react';

export const Click = () => {
  const [clickedTimes, setClickedTimes] = useState(0);
  
  const handleClick = () => {
    setClickedTimes(clickedTimes + 1);
  }

    return (
        <div className="text-center">
            <h1>You have clicked the button {clickedTimes} times.</h1>
            <button
                className="btn btn-lg btn-danger"
                type="button"
                onClick={handleClick}
            >
                CLICK ME!
            </button>
        </div>
    );
};
