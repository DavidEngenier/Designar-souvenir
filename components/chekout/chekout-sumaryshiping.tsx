import React from 'react';

interface Props {
    showContact: boolean;
    showDelivery: boolean;
    showMethod: boolean;
    webRoot: string;
}

const InfoList: React.FC<Props> = ({ showContact, showDelivery, showMethod, webRoot }) => {
    return (
        <ul className="list-group mb-5 d-none d-lg-block rounded-0">
            {showContact && (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-start align-items-center">
                        <span className="text-muted small me-2 f-w-36 fw-bolder">Contact</span>
                        <span className="small">test@email.com</span>
                    </div>
                    <a href={`${webRoot}/Chekout`} className="text-muted small" role="button">Change</a>
                </li>
            )}
            {showDelivery && (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-start align-items-center">
                        <span className="text-muted small me-2 f-w-36 fw-bolder">Deliver To</span>
                        <span className="small">123 Street, London, SM3 5TY, United Kingdom</span>
                    </div>
                    <a href={`${webRoot}/Chekout`} className="text-muted small" role="button">Change</a>
                </li>
            )}
            {showMethod && (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-start align-items-center">
                        <span className="text-muted small me-2 f-w-36 fw-bolder">Method</span>
                        <span className="small">UPS Priority Delivery</span>
                    </div>
                    <a href={`${webRoot}/Chekout-shiping`} className="text-muted small" role="button">Change</a>
                </li>
            )}
        </ul>
    );
};

export default InfoList;
