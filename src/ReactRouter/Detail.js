import React from 'react';
import { useParams, useLocation } from 'react-router-dom'

function Detail() {

    const { id } = useParams();
    const PATH = useLocation();

    return (
        <div>
            Giá trị tham số: {id}
            Path hiện tại: {PATH.pathname}
        </div>
    )
}
// Đặt tên gì thì lấy tên đó, bên kia đặt id thì bên này lấy id

export default Detail