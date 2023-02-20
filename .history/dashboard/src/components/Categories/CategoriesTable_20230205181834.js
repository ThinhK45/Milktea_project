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
                    </tr>
                </thead>
            </table>
        </div>
    );
};
