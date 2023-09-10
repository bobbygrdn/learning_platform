import React from 'react'

export default function ProgressBar({ width, height, outerColor, innerColor, progress, borderColor }) {
    return (
        <div className='progress-bar' style={{ width: `${width}em`, height: `${height}em`, backgroundColor: `${outerColor}`, marginTop: '1em', alignSelf: 'center', borderRadius: '.5em', border: `1px solid ${borderColor}` }}>
            <div className='progress' style={{ height: '100%', backgroundColor: `${innerColor}`, width: `${progress}%`, borderRadius: '.5em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h5>{progress !== 0 ? progress + "%" : ""}</h5>
            </div>
        </div>
    )
}
