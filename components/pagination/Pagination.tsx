import React from 'react';

interface ProgressProps {
amount: number;
type: string;
progress: number;
onLoadMore: () => void;
}

const ProgressComponent: React.FC<ProgressProps> = ({ amount, type, progress, onLoadMore }) => {
return (
    <div className="d-flex flex-column f-w-44 mx-auto my-5 text-center">
    <small className="text-muted">Showing {amount} {type}</small>
    <div className="progress f-h-1 mt-3">
        <div
        className="progress-bar bg-dark"
        role="progressbar"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        />
    </div>
    <button
        className="btn btn-outline-dark btn-sm mt-5 align-self-center py-3 px-4 border-2"
        onClick={onLoadMore}
    >
        Load More
    </button>
    </div>
);
};

export default ProgressComponent;
