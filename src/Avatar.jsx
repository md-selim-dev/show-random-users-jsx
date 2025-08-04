import React from 'react'

const Avatar = () => {
    const photoURL = 'https://avatars.githubusercontent.com/u/155098867?v=4';
    const descriptions = 'Md Selim Developer';
    const width = '200px';
    const height = '200px';
    const today = new Date();
    const styles = 'rounded-2xl shadow-2xl'

    function getDay(date) {
        return new Intl.DateTimeFormat('en-US', { weekday: 'long' },).format(date);
    }

    return (
        <div>
            <h3 style={{color: 'white', backgroundColor: 'red'}}>Today is {getDay()}</h3>
            <img className={styles} src={photoURL} width={width} height={height} alt={descriptions} />
        </div>
    )
}

export default Avatar