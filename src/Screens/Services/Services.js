import React, { useEffect, useState } from 'react';
import '../../App.css';

import './Services.css';

export default function Services() {
    const [user, setUser] = useState({
        name: "Default User",
        auth: '',
    });

    useEffect(() => {
        setUser({name: 'Aaron Krausert', biography: 'Thomas Jefferson was the primary draftsman of the U.S. Declaration of Independence, the nations first secretary of state and the second vice president (under John Adams). As the third president of the United States, Jefferson stabilized the U.S. economy and defeated pirates from North Africa during the Barbary War. He was responsible for doubling the size of the United States by successfully brokering the Louisiana Purchase. He also founded the University of Virginia.', memories: [1, 2 ,312, 12312, 415], auth: '1283'})
    }, [])

    return (
        <div className="services-container">
            <div className="dashboard-container">
                <h1>Welcome, {user.name}</h1>
                <div className="dashboard">
                    <div className='row'>
                        <div className='column'>
                            <div className="grid1">
                                <h2>Statistics</h2>
                                <p>Message Count: {user.memories.length}</p>
                            </div>
                        </div>
                        <div className='column'>
                            <div className="grid2">
                                <h2>Biography</h2>
                                <p>{user.biography}</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='column'>
                            <div className="grid3">
                                <h2>Upload Files</h2>
                            </div>
                        </div>
                        <div className='column'>
                            <div className="grid4">
                                <h2>Legal Information</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}