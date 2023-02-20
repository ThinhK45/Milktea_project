import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = (props) => {
    const { page, pages, keyword = '' } = props;
    return (
        pages > 1 && (
            <nav>
                <ul className="pagination justify-content-center">
                    {[...Array(pages).keys()].map((x) => (

                    ))}
                    <li className={`page-item active`}>
                        <Link className="page-link" to={'#'}>
                            1
                        </Link>
                    </li>

                </ul>
            </nav>
        )
    );
};
export default Pagination;
