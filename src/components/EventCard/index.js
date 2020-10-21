import React from "react";
import { Link } from "gatsby";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiLinkExternal } from "react-icons/bi";
import Image from "../image";

import { CardWrapper } from "./Card.style";

const Card = ({ frontmatter, fields }) => {
    return (
        <CardWrapper fixed={!!frontmatter.abstract}>
            <div className="post-block">
                <div className="post-thumb-block">
                    <a className="anchor" href={frontmatter.eurl}>
                        <Image
                            {...frontmatter.thumbnail}
                            imgStyle={{ objectFit: "contain" }}
                        />
                    </a>
                </div>
                <div className="post-content-block">
                    <h2 className="post-title">
                        <a className="anchor" href={frontmatter.eurl}>
                            {frontmatter.title}
                        </a>
                    </h2>
                    <div className="post-meta-block">
                        {frontmatter.author && <span>By: {frontmatter.author}</span>}
                        {frontmatter.date && (
                            <>
                                <span className="divider">/</span>
                                <span>{frontmatter.date}</span>
                            </>
                        )}
                        {frontmatter.abstract && (
                            <p className="post-entry">{frontmatter.abstract}</p>
                        )}
                    </div>
                    <div className="readmore-btn-wrapper">
                        <a className="readmore-btn" href={frontmatter.eurl}>
                            see more <IoIosArrowRoundForward />
                        </a>
                        {frontmatter.eurl && (
                            <a className="readmore-btn" href={frontmatter.eurl}>
                                <BiLinkExternal />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </CardWrapper>
    );
};

export default Card;
