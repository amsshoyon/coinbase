import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './Toggler.scss';

function Toggler({ navOpen, history, onClick}) {

    const [animate, setAnimation] = useState(false);
    const [crossIcon, setCloseBtn] = useState(false);

    const toggle = () => {
        onClick(!navOpen)
        if(!animate){
            setAnimation(!animate);
            document.body.style.overflowY = "hidden";
            document.body.classList.add("overlay");
            setTimeout(() => {
                setCloseBtn(!crossIcon);
            }, 300);
        }else{
            document.body.style.overflowY = "auto";
            setCloseBtn(!crossIcon);
            document.body.classList.remove("overlay");
            setTimeout(() => {
                setAnimation(!animate);
            }, 300);
        }
    }

    let animateClass , closeClass;

    if(animate){
        animateClass = 'animate';
    }

    if(crossIcon){
        closeClass = 'show';
    }

    history.listen((location, action) => {
        setAnimation(false);
        setCloseBtn(false);
        document.body.style.overflowY = "auto";
        document.body.classList.remove("overlay");
    });
    
    useEffect(() => {
        if(!navOpen){
            document.body.style.overflowY = "auto";
            setCloseBtn(false);
            document.body.classList.remove("overlay");
            setTimeout(() => {
                setAnimation(false);
            }, 300);
        }
    }, [navOpen])

    return (
        <>
            <div className={"menu-toggler " + animateClass + " " + closeClass} onClick={toggle}>
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
        </>
    )
}

export default withRouter(Toggler); 