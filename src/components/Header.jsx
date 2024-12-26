import React, { useState } from 'react'
import "../css/Header.css";
import { SlBasketLoaded } from "react-icons/sl";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { useNavigate } from "react-router-dom"
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';


function Header() {
    const [theme, setTheme] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { products } = useSelector((store) => store.basket);

    const changeTheme = () => {
        const root = document.getElementById("root");
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        } else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";
        }
        setTheme(!theme);
    }



    return (
        <div style={{ display: 'flex', marginTop: "20px", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row' onClick={() => navigate("/")}>
                <img className="logo" src="./src/images/shark.png" />
                <p className='logo-text'>PEARL</p>
            </div>

            <div className='flex-row'>
                <input className="search-input" type='text' placeholder='Bir şeyler ara...' />
                <div >
                    {theme ? <FaMoon className='icon' onClick={changeTheme} /> : <MdLightMode className='icon' onClick={changeTheme} />}

                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="primary">
                        <SlBasketLoaded className='icon' />
                    </Badge>




                </div>


            </div>
        </div>
    )
}

export default Header


