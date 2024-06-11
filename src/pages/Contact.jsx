import styled from "styled-components";

import Inset from "@/Common/PagesLayout/Inset.jsx";
import React from "react";
import ReactPlayer from "react-player/youtube";

const Contact = () => {
    return (
        <ContactStyled>
            <Inset>
                <h1>Video</h1>
                <div class="container">
                    <iframe
                        width="100%"
                        height="700px"
                        src="https://www.youtube.com/embed/oi2d2TpS63o?si=VnliTArriCCrBcOG"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
            </Inset>
        </ContactStyled>
    );
};

export default Contact;

const ContactStyled = styled.div``;
