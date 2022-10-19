import React from 'react';
import { useNavigate } from 'react-router-dom';

function Private() {

    const Navigate = useNavigate();

    const userInfo = localStorage.getItem('USERLOGIN');

    if (!userInfo) {
        alert('Phải đăng nhập mới vào trang Private được!');
        return Navigate("/login");
    } else {
        return (
            <div className="w-50">
                <div className="form-group">
                    <label>Comment: </label>
                    <input type="text" className="form-control" />
                </div>
            </div>
        )
    }
}

export default Private