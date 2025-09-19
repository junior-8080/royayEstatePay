
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import {Button} from "antd";
import React from "react";


type Props = {
    status:'success' | 'failed' |'pending',
    handleView: () => void;
}



const PaymentVerification = ({status,handleView}:Props) => {
    return <div className="flex flex-col justify-center items-center space-y-2">
        {status === 'success' && <p className="text-xl text-green-600">Payment Successful</p>}
        {status === 'failed' && <p>Payment Failed</p>}
        {status === 'success' && <IoCheckmarkDoneCircle  className="text-green-600 text-2xl"/>}
        {status === 'failed' && <MdCancel className="text-red-600 text-2xl" />}
        <Button type="primary" size="large" className="bg-blue-600 font-semibold cursor-pointer w-[40%]" onClick={handleView}>New Payment</Button>
    </div>
}

export default  PaymentVerification