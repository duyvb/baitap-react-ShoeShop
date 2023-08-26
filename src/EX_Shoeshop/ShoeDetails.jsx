import React from "react";

export default function ShoeDetails({ product, onClose }) {
    
    if (!product) {
        return null;
    }

    const handleModalClose = () => {
        onClose();
    };
    return (
        <>
            <div style={{ display: "block" }} className="modal">
                <div className="modal-dialog modal-lg ">
                    <div className="modal-content">
                        <h2 className="modal-title text-center">Thông Tin Sản Phẩm</h2>
                        <div className="modal-header">
                            <h4 className="text-center">{product.name}</h4>
                            <img src={product.image} alt={product.name} width="280px" />
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Sản Phẩm :</td>
                                        <td>{product.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Thương Hiệu :</td>
                                        <td>{product.alias}</td>
                                    </tr>
                                    <tr>
                                        <td>Giá :</td>
                                        <td>$ {product.price}</td>
                                    </tr>
                                    <tr>
                                        <td>Mô Tả</td>
                                        <td>{product.description}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleModalClose}> Đóng
                            </button>


                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </>
    );
}
