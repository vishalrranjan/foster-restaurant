import React from 'react';
import './image.css'
import { 
    EmailIcon, TwitterIcon, FacebookIcon, LinkedinIcon, TelegramIcon, 
    EmailShareButton, FacebookShareButton,TwitterShareButton, LinkedinShareButton, TelegramShareButton
} from "react-share";
import logo from '../../image/Fastor Logo.png';


export default function Image() {
    let img_url = localStorage.getItem("img_url");
    
    return (
        <div style={{width:"100vw", height:"100vh"}} className="d-flex flex-column justify-content-center align-items-center">
            <img className="w-50 h-50 cuisine-img" src={img_url} alt="cuisine" />
            <img className="logo" src={logo} alt="logo" draggable />
            <figcaption className="mt-3 p-3">
                <TelegramShareButton url={img_url} quote={"varities of foods available here"} hashtag="#foodie" className="p-2">
                    <TelegramIcon round={true} className="icon" />
                </TelegramShareButton>
                <EmailShareButton url={img_url} quote={"varities of foods available here"} hashtag="#foodie" className="p-2">
                    <EmailIcon round={true} className="icon" />
                </EmailShareButton>
                <LinkedinShareButton url={img_url} quote={"varities of foods available here"} hashtag="#foodie" className="p-2">
                    <LinkedinIcon round={true} className="icon" />
                </LinkedinShareButton>
                <TwitterShareButton url={img_url} quote={"varities of foods available here"} hashtag="#foodie" className="p-2">
                    <TwitterIcon round={true} className="icon" />
                </TwitterShareButton>
                <FacebookShareButton url={img_url} quote={"varities of foods available here"} hashtag="#foodie" className="p-2">
                    <FacebookIcon round={true} className="icon" />
                </FacebookShareButton>

            </figcaption>
        </div>
    )
}
