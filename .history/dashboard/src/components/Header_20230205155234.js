import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Header = () => {
    useEffect(() => {
        $('[data-trigger]').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var offcanvas_id = $(this).attr('data-trigger');
            $(offcanvas_id).toggleClass('show');
        });
        $('.btn-aside-minimize').on('click', function () {
            if (window.innerWidth < 768) {
                $('body').removeClass('aside-minimize');
                $('.navbar-aside').removeClass('show');
            } else {
                $('body').toggleClass('aside-mini');
            }
        });
    }, []);
    return (
        <header className="main-header navbar">
            <div className="col-search">
                <form className="searchform">
                    <div className="input-group">
                        <input
                            list="search_terms"
                            type="text"
                            className="form-control"
                            placeholder="Nhập từ tìm kiếm"
                        />
                        <button className="btn btn-light bg" type="button">
                            <i className="far fa-search"></i>
                        </button>
                    </div>
                </form>
            </div>
        </header>
    );
};
