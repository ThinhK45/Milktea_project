import React from 'react';
import { ToastContainer } from 'react-toastify';

const Toast = () => {
    return (
        <div>
            <ToastContainer
                position="top-right"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClickrtl={false}
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
};
export default Toast;
