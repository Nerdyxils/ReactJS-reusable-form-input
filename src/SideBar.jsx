import React from 'react'
import './sidebar.css'

function SideBar() {
    return (
        <div className="sidebar">
            <div className="row">
                <div className="logo">
                    <h3><span className="t_red">Dev</span>challenges.io</h3>
                </div>
                <div className="menu_item">
                    <ul>
                        <li className="item">Colors</li>
                        <li className="item">Typography</li>
                        <li className="item">Spaces</li>
                        <li className="item">Buttons</li>
                        <li className="item active">Inputs</li>
                        <li className="item">Grids</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar
