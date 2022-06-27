import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './buy.css';
import polygon from './polygon.png';
import dollar from './dollar.png';
import setting from './setting.png';
import int from './int.png';
import convert from './convert.png';
import { TextField } from '@mui/material';

function Buy() {
    const handlechange = () => {
        console.log("hello");
    }
    const USDC=100;
    return (
        <div className='back4'>
            <div className='row main'>
                <div className='col-1 polygon'>

                    <img src={polygon} className=''></img>
                </div>
                <div className='col-10'></div>

                <div className='col-1 dollar'>

                    <img src={dollar} className=''></img>
                </div>
            </div>
            <div className='row texting'>
                <div className='buy_crypto_text col-7'>
                    Buy crypto Tokens
                </div>
                <div className='col-3'></div>
                <div className='col-1'>
                    <img src={setting}></img>
                </div>
                <div className='col-1'>
                    <img src={int}></img>
                </div>
            </div>

            <div className='mid_box4'>
                <div className='row'>
                    <div className='col-6 matic'> MATIC</div>
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
                <div className='row'>
                    <div className='col-5'></div>
                    <div className='col-2'>

                <img src={convert} className=''></img>
                    </div>
                <div className='col-5'></div>

                </div>


                <div className='row'>
            <div className='col-4 '>
              <select className='dropdownmodify_team_display1'>
                <option value={USDC}>USDC</option>
                {/* <option value="vegetable">DAI</option>
                <option value="meat">BTC</option> */}
              </select>
            </div>
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
            
            </div>
            <div className='spacing'></div>
            <div className='row'>
                
                <div className='col-5 share_button'onClick={() => handlechange()}>
                <div className='share_text'> Buy Tokens</div>
                </div>
                <div className='col-2'></div>
                <div className='col-5 share_button'onClick={() => handlechange()}>
                <div className='share_text'> Sell Tokens</div>
                </div>
            </div>
            <div className='spacing2'></div>
        </div >
    )
}

export default Buy;