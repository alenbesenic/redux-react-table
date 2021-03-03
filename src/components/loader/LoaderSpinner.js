import React from 'react'
import Loader from 'react-loader-spinner'
import './LoaderSpinner.scss'

const LoaderSpinner = () => {
    return (
        <div className="loader_container">
            <Loader 
                type="Circles"
                color="rgb(46, 43, 43)"
                height={150}
                width={150}
            />
        </div>
    )
}

export default LoaderSpinner
