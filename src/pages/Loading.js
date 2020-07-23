import React from 'react'

function Loading() {
    const style = {
        width: '100vw',
        innerHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        // backgroundColor: '#F5F5F5'
    }
    return (
        <div style={style}>
            <img src="https://i.imgur.com/NbiwZLB.gif" />
        </div>
    )
}

export default Loading