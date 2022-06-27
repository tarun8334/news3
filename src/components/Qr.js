import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Qr.css';
import vector from './v2.png';
import coin from './solana.png';
import qrcode from './qr.png';

function Qr() {
    const handlechange=()=>{
        console.log("hello");
    }

    return (
        <div className='back'>
                            

            <div className='row'>
                <div className='col-1'>
                <img src={vector} className='back_button' onClick={() => handlechange()} />

                </div>
                <div className='col-11 recieve'>
                Recieve tokens
                </div>
            </div>
            <div className='qrcode_display'>
                <div className='row coin_image_row'>
                    <div className='col-5'></div>
                    <div className='col-2 qr_image'>

                    <img src={coin} className='coin_image'/></div>
                    <div className='col-5'></div>

                </div>
                <div className='row scan_text'>
                    <div className='col-1'></div>
                    <div className='col-10'>Scan the QR code to recieve Solana.</div>
                <div className='col-1'></div>
                </div>
                
                <div className='row qr_photo'>
                    <div className='col-3'></div>
                    <div className='col-6 qr_image'>

                    <img src={qrcode} className='qr_image'/>
                    </div>
                    <div className='col-3'></div>
                </div>
                <div className='row or'>
                    <div className='col-5'></div>
                    <div className='col-2 or_box'>
                        <div className='qr_image '>Or</div>
                    </div>
                    <div className='col-5'></div>
                </div>
                <div className='row address'>
                    <div className='col-3'></div>
                    <div className='col-6 add_text'>
                        Your solana address
                    </div>
                    <div className='col-3'></div>
                </div>
                <div className='row add_real'>
                    <div className='col-1'></div>
                    <div className='col-10 box_add_real'>
                        <div className='add_real_text'>1k3sdnk24knktn84kn5mge7asd11bfsp9sd</div>
                    </div>
                    <div className='col-1'></div>
                </div>
                <div className='row copy_add'>
                    <div className='col-4'></div>
                    <div className='col-4 copy_box' onClick={() => handlechange()}>
                    <div className='copy_text'>Copy Address</div>
                    </div>
                    <div className='col-4'></div>
                </div>
                <div className='spacing'></div>
                <div className='row share_button'onClick={() => handlechange()}>
                <div className='share_text'>Share Address</div>
                </div>
                <div className='spacing_2'></div>
            </div>
        </div>
    )
}

export default Qr;