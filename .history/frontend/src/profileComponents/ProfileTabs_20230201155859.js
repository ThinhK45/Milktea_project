import React from 'react';

const ProfileTabs = () => {
    return (
        <form className="row form-container">
            <div className="col-md-6">
                <div className="form">
                    <label for="account-fn">UserName</label>
                    <input className="form-control" type="text" required />
                </div>
            </div>
        </form>
    );
};
