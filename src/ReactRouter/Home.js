import React from 'react';
import { useDispatch } from 'react-redux';
import DangKy from '../HOC/ModalHOC/DangKy';
import DangNhap from '../HOC/ModalHOC/DangNhap'

export default function Home(props) {

    const dispatch = useDispatch();

    return (
        <div className="mt-5">
            <button onClick={() => {
                dispatch({
                    type: 'DANG_NHAP',
                    Component: <DangNhap />
                })
            }} type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                Đăng nhập
            </button>


            <button onClick={() => {
                dispatch({
                    type: 'DANG_KY',
                    Component: <DangKy />
                })
            }} type="button" className="btn btn-secondary btn-lg" data-toggle="modal" data-target="#modelId">
                Đăng ký
            </button>
        </div>

    )
}
