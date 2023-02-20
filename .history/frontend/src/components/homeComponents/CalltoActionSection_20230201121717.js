import React from 'react';

const CalltoActionSection = () => {
    return (
        <div className="subscribe-section bg-with-black">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="subscribe-head">
                            <h2>DO you need more tips?</h2>
                            <p>Sign up free and get the latest tips.</p>
                            <form className="form-section">
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
