import "./discount.scss";
import { Box } from "@mui/material";
import Images from "assets/images";


const Discount = () => {

    return (
        <Box  variant="outlined">
            <Box variant="outlined" className="payment-form__discount-title">
              F17 Nạp coin
            </Box>
            <Box variant="outlined" className="payment-form__discount-momo">
                <img  src={Images.PaymentMethod.Momo} alt="F17" />
                <p className='payment-form__momo-content'>
                    Khuyến mãi 10% VND khi nạp trên 550 Fcoin (Áp dụng cho cả Paypal)
                </p>
            </Box>
        </Box>
    );
}

export default Discount;
