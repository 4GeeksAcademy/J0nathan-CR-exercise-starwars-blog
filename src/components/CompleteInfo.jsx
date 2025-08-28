import React from 'react'

const CompleteInfo = (props) => {
    const result = props.result;

    return (result.hasOwnProperty('properties') &&
        <div className="container">
            <div className="row g-4">
                <div className="col-12 col-md-6">
                    <div className="ratio ratio-16x9 rounded-4 overflow-hidden border">
                        <img
                            src="https://picsum.photos/200/300"
                            className="w-100 h-100 object-fit-cover"
                            alt={result?.properties?.name || "Star Wars"}
                        />
                    </div>
                </div>
                <div className="col-12 col-md-6 my-auto text-center text-md-start">
                    <h1 className="mb-2">{result.properties.name}</h1>
                    <p className="text-secondary">{result.description}</p>
                </div>
            </div>
            <div className="row mt-4 pt-3 border-top border-danger-subtle">
                {Object.entries(result.properties).slice(0, 5).map(([title, description]) => (
                    <div key={title} className="col text-center text-danger">
                        <h5 className="text-uppercase small mb-1">{title}</h5>
                        <p className="fw-semibold mb-0">{String(description)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CompleteInfo
