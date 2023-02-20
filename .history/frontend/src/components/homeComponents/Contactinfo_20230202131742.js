import React from 'react';
const ContactInfo = () => {
    return (
        <div className="contactInfo container">
            <div className="row">
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                            <i className="fa fa-phone-alt"></i>
                        </div>
                        <h5>Liên lạc với chúng tôi 24/7</h5>
                        <p>0961611161</p>/
                    </div>
                </div>
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                            <i className="fa fa-map-market-alt"></i>
                        </div>
                        <h5>Cần Thơ</h5>
                        <p>số 123/5 đường 3/2, Hưng Lợi, Ninh kiều</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                            <i className="fa fa-fax"></i>
                        </div>
                        <h5>Fax</h5>
                        <p>0989 899 899</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContactInfo;
