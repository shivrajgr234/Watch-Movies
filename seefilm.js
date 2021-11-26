import React from 'react';
import "./film.css";
import Prome from './menuApi';
import Inerfilm from './iner';

const Menust=[new Set(Prome.map((curElem)=>{
    return (curElem.category);
}))];
console.log(Menust);

const Seefilm = () => {
    const [menuData, setmenuData] = React.useState(Prome);
    const filterItem=(catagorys)=>{
        const uplist=Prome.filter((curElem) => {
            return curElem.category===catagorys;

        });
        setmenuData(uplist);
    };
    return (
        <div>
            <h1>Watch the world's best movies for free</h1><br></br><br></br>
            <nav className="navbar">
                <button className="navbars" onClick={()=>filterItem("Fantasy")}>Fantasy</button>
                <button className="navbars" onClick={()=>filterItem("Horror")}>Horror</button>
                <button className="navbars" onClick={()=>filterItem("Real-life")}>Real-life</button>
                <button className="navbars" onClick={()=>filterItem("Comedy")}>Comedy</button>
                <button className="navbars" onClick={()=>filterItem("Sci-Fi")}>Sci-Fi</button>
                <button className="navbars" onClick={()=>setmenuData(Prome)}>All</button>
            </nav>
            <br></br><br></br>
            
            <Inerfilm menuData={menuData} />
        </div>

    );
}

export default Seefilm;
