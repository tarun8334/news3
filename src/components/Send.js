import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Send.css';
import vector from './v2.png';
import coin from './solana.png';
import qrcode from './qr.png';
import TextField from "@mui/material/TextField";
import qr2 from './small_qr.png';
import { blueGrey } from '@mui/material/colors';

function Send() {
    const secondary=blueGrey.A200;
    const handlechange = () => {
        console.log("hello");
    }

    return (
        <div className='back2'>


            <div className='row'>
                <div className='col-1'>
                    <img src={vector} className='back_button1' onClick={() => handlechange()} />

                </div>
                <div className='col-11 recieve2'>
                    Send tokens
                </div>
            </div>
            <div className='row'>
                <div className='col-1'>
                    <img src={coin} className='coin_image1' />

                </div>
                <div className='col-6'>
                    <div className='row text_solana'>Solana</div>
                    <div className='row name_solana'>SOL</div>
                </div>
                <div className='col-4'>
                    <div className='text_avail'>Available Balance</div>
                    <div className='amount_avail'>69.420 SOL</div>
                </div>
            </div>
            <div className='entry_display'>
                <div className='row enter_address1'>
                    Enter Address
                </div>
                <div className='row'>
                    <div className='col-10'>
                        <TextField
                            id="outlined-basic" variant="outlined"
                            color="secondary"
                            focused
                            fullWidth
                            label=""
                        />
                    </div>
                    <div className='col-2 smll_qr'>
                        <img src={qr2}></img>
                    </div>
                </div>

                <div className='row amount1'>
                    Amount
                </div>
                <div className='row'>

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        color="secondary"
                            focused
                        label=""
                    />


                </div>
                <div className='row note1'>
                    Note
                </div>
                <div className='row'>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        color="secondary"
                            focused
                        label=""
                    />
                </div>
                <div className='row note1'>
                    Note
                </div>
                <div className='row'></div>
                <div className='row trans_fee'>
                    Transaction Fee:0.002%

                </div>
                <div className='row trans_fee'>
                    Min:0.10 SOL-Min:69.420 SOL
                </div>
            </div>
            <div className='spacing1'></div>
            <div className='row share_button1' onClick={() => handlechange()}>
                <div className='share_text1'>Send Solana</div>
            </div>
            <div className='spacing_21'></div>
        </div>
        

    )
}

export default Send;