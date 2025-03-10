import React from "react";
import image_src from "../../../assets/images/callout/callout.png";
import styled from "styled-components";
import Button from "../../../reusecore/Button";
import { Categories } from "./cta_bottom_categories";

const CTA_BottomWrapper = styled.div`
    display: flex;
    flex: 0 0 100%;
    width: 98%;
    height: 16rem;
    margin: 2rem auto 1.5rem;
    box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;

    a {
        display: block;
    }

    img {
        width: 16rem;
        height: 16rem;
        object-fit: cover;
        pointer-events: none;
        border-radius: 0 0.5rem 0.5rem 0;
    }

    .cta-content {
        padding: 0.5rem;
        display: flex;
        flex: auto;
        background: rgba(201, 252, 246, 0.3);
        text-align: center;
        align-items: center;
        height: 100%;

        p {
            flex: 0 0 75%;
        }
        a {
            flex: 0 0 25%;
        }
    }

    @media screen and (max-width: 1200px) and (min-width: 700px) {
        button {
            min-width: 6.5rem;
        }
    }

    @media screen and (max-width: 699px) {
        button {
            min-width: auto;
        }
    }

    @media screen and (max-width: 550px) {
        display: block;
        width: 18rem;
        height: 18rem;
        margin: 1.5rem auto;
        border-radius: 0.25rem;

        img {
            width: 18rem;
            height: 18rem;
            position: absolute;
            filter: brightness(0.5);
            border-radius: 0.25rem;
        }

        .cta-content {
            position: absolute;
            height: 18rem;
            display: block;
            width: 18rem;
            background: none;
            padding: 4rem 1rem;
            z-index: 1;

            p {
                color: white;
            }
        }
    }
`;

const defaultContent = "Join the Layer5 community and explore the world of service meshes!";
const defaultURL = "https://slack.layer5.io";

export const CTA_Bottom = ({ alt, button_text, category, content, external_link, image, url }) => {
  return (
    <CTA_BottomWrapper>
      { category ? (
        <>
          <div className="cta-content">
            <p>{Categories[category]["Content"]}</p>
            <Button primary title={Categories[category]["Button_Text"]} url={Categories[category]["Link"]} external={Categories[category]["Link_external"]} />
          </div>
          <img src={Categories[category]["Image"]} alt={Categories[category]["Image_Alt"]} />
        </>
      ) : (
        <>        
          <div className="cta-content">
            <p>{content ? content : defaultContent}</p>
            <Button primary title={button_text ? button_text : "Join Us"} url={url ? url : defaultURL} external={external_link ? true : false} />
          </div>
          <img src={image ? image : image_src} alt={alt ? alt : "Alt Text"} />
        </>
      )}
    </CTA_BottomWrapper>
  );
};