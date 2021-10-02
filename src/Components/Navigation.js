import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Topics</Link>
                </li>
                <li>
                    <Link to='/topics/'>Topic Photos</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
