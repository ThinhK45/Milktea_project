import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesTable = () => {
    return (
        <div className="col-md-12 col-lg-8">
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                />
                            </div>
                        </th>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Mô tả</th>
                        <th className="text-end">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                />
                            </div>
                        </td>
                        <td>1</td>
                        <td>
                            <b>Trà sữa</b>
                        </td>
                        <td>Trà sữa</td>
                        <td className="text-end">
                            <div className="dropdown">
                                <Link
                                    to="#"
                                    data-bs-toggle="dropdown"
                                    className="btn btn-light"
                                >
                                    <i className="fas fa-ellipsis-h"></i>
                                </Link>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="#">
                                        Chỉnh sửa thông tin
                                    </Link>
                                    <Link
                                        className="dropdown-item text-danger"
                                        to="#"
                                    >
                                        Xoá
                                    </Link>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default CategoriesTable;
