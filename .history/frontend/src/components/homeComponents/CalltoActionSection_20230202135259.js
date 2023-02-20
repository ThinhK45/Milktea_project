import React from 'react';

const CalltoActionSection = () => {
    return (
        <div className="subscribe-section bg-with-black">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="subscribe-head">
                            <h2>Bạn có cần hướng dẫn không?</h2>
                            <p>Đăng ký miễn phí và nhận các mẹo mới nhất.</p>
                            <form className="form-section d-flex justify-content-center align-items-center col-6">
                                <input
                                    placeholder="Email của bạn..."
                                    name="email"
                                    type="email"
                                ></input>
                                <input
                                    value="Đồng ý. Tôi muốn!"
                                    name="subscribe"
                                    type="submit"
                                ></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CalltoActionSection;
