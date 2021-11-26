import React from 'react';

const Inerfilm = ({menuData}) => {
    return (
        <div>
            <section calss="sections">
                {menuData.map((curElem)=>{
                    const{id,film_name,category,duration,image,language,Information}=curElem;
                    return (
                    <section>
                        <main>
                            <div className="image">
                                <img src={image} className="images" width="300px" height="200px" />
                            </div>
                            <div className="containt">
                                <b><span className="reallife">{film_name}</span></b><br></br>
                                <span className="cata">({category})</span><br></br>
                                <span className="du">Duration:-{duration}</span><br></br>
                                <span className="lan">Language:-{language}</span><br></br><br></br>
                                <span className="infor">{Information}</span><br></br><br></br>
                                <button className="button">Watch Movie</button>

                            </div>
                        </main>
                    </section>
                    
                    )
                }
            )
            }
        </section>
        </div>
    );
};

export default Inerfilm;
