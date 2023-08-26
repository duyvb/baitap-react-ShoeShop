import React from "react";

export default function Cart({ carts, onCloseCart, onDeleteProduct }) {

    const calculateTotal = () => {
        let total = 0 ;
        for (let i = 0; i < carts.length; i++ ) {
            total += carts[i].price * carts[i].quantity;
        }
        return total;
    };
    return (
        <>
            <div style={{ display: "block" }} className="modal" tabIndex={-1}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Giỏ hàng</h5>
                            <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={onCloseCart}
                            />
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Mã sản phẩm</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Hình ảnh</th>
                                        <th>Số lượng</th>
                                        <th>Đơn giá</th>
                                        <th>Thành tiền</th>
                                        <th></th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {carts.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                    <img src={item.image} alt={item.name} width="70px" height="70px" />
                                                </td>
                                                <td>$ {item.quantity}</td>
                                                <td>$ {item.price}</td>
                                                <td>$ {item.price * item.quantity}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => onDeleteProduct(item.id)}>X</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <div className="total-modal">
                                    <span>Tổng Tiền: </span>
                                    <span>${calculateTotal()} </span>
                                </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={onCloseCart}
                            >
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-backdrop fade show"></div>
        </>
    );
}