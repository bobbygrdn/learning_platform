import React from 'react';
import ReactPlayer from 'react-player';

export default function Demo({ video }) {
    return (
        <>
            <ReactPlayer url={video} controls={true} />
        </>
    )
}
