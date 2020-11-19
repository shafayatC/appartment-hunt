import React from 'react';

const ServiceWidget = () => {
    return (
        <>
            <div className="heading fwidth">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>House Rent</h4>
                            <h2>We're an agency tailored to all <br></br>clients' needs that always delivers</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service_detail_wrap fwidth">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 service_detail">
                           <div className="serviceIcon fwidth"><img src={require('./img/apartment.png').default}/></div>
                            <div className="srvDetail">
                                <h5>Wide Range of Properties</h5>
                                <p>With a robust selection of popular properties on hand, as well as leading properties from experts.</p>
                            </div>
                        </div>
                        <div className="col-md-4 service_detail">
                           <div className="serviceIcon fwidth"><img src={require('./img/affordable.png').default}/></div>
                            <div className="srvDetail">
                                <h5>Financing Made Easy</h5>
                                <p>With a robust selection of popular properties on hand, as well as leading properties from experts.</p>
                            </div>
                        </div>
                        <div className="col-md-4 service_detail">
                           <div className="serviceIcon fwidth"><img src={require('./img/lessee.png').default}/></div>
                            <div className="srvDetail">
                                <h5>Trusted by Thousands</h5>
                                <p>With a robust selection of popular properties on hand, as well as leading properties from experts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceWidget;