import React, { useState } from 'react';
import { useSelector } from 'react-redux';
const SizeScreen = ({ history }) => {
    window.scrollTo(0, 0);

    const productDetails = useSelector((state) => state.productDetails);
    const { orderItems } = productDetails;
    const [size, setSize] = useState(orderItems.size);

    return (
        <>
            <div className="flex-box d-flex justify-content-between align-items-center">
                <h6>Kích cỡ</h6>
                <select value={size} onChange={(e) => setSize(e.target.value)}>
                    <option value="Nhỏ" key="Nhỏ">
                        Nhỏ
                    </option>
                    <option value="Vừa" key="Vừa">
                        Vừa
                    </option>
                    <option value="Lớn" key="Lớn">
                        Lớn
                    </option>
                </select>
            </div>
        </>
    );
};
export default SizeScreen;
