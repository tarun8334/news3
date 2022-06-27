import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home_page.css';
import vector from './v2.png';
import coin from './solana.png';
import qrcode from './qr.png';
import dollar from './dollar.png';
import polygon from './polygon.png';
import home from './home.png';
import orders from './orders.png';
import portfolio from './portfolio.png';
import reverse from './reverse.png';
import wallet from './wallet.png';
import new_img from './new_img.png';
import refresh from './refresh.png';

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import NewsArticle from './NewsArticle';

export const NewsContext = createContext();
function Home_page() {
    const [data, setData] = useState();

    const apiKey = "1c31e0e165df4c1fa4137f14a41db9ca";

    useEffect(() => {
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
            )
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, []);


    const handlechange = () => {
        console.log("hello");
    }

    return (
        <div className='back3'>
            {console.log(data)}

            <div className='row top_bar'>
                <div className='col-1 polygon'>
                    <img src={polygon} onClick={() => handlechange()}></img>
                </div>
                <div className='col-10'></div>
                <div className='col-1 dollar'>
                    <img src={dollar}></img>
                </div>
            </div>
            <div className='upper_box'>
                <div className='row upper_box_text1'>Invite and Earn $10 worth Bitcoin!</div>
                <div className='row upper_box_text2'>Earn $10 worth of BTC whenever your friend makes their first trade on dripp. </div>
                <div className='row upper_box_button'>
                    <div className='col-4 upper_box_button2'>
                        Invite Friends
                    </div>
                    <div className='col-8'></div>
                </div>
            </div>
            <div className='row top_option'>
                 <div className='col-6  top_option_coin'>Top coins</div>
                 <div className='col-6 top_option_news'>Top news</div>
             </div>

            <div className='row'>
                <div className='col-6 story_heading'>Top Stories</div>
                <div className='col-5'></div>
                <div className='col-1'>
                    <img src={refresh}></img>

                </div>

            </div>
            {/* <div className='back6'> */}
            <div className='news_flex'>
                {/* <div className="row back6"> */}
                    {data
                        ? data.articles.map((news) => (
                            <NewsArticle data={news} key={news.url} />
                        ))
                        : "Loading"}
                {/* </div> */}
                {/* <div className='row back6'>
                 <div className='col-9 head_news'>Solana have jumped by 40% over the last two days despite increased threat of hackers.</div>
                 <div className='col-3 new_imgp'>
                 <img src={new_img}></img>

                 </div>

             </div>
             <div className='row back6'>
                 <div className='col-9 head_news'>Solana have jumped by 40% over the last two days despite increased threat of hackers.</div>
                 <div className='col-3 new_imgp'>
                 <img src={new_img}></img>


             </div>
             </div>

             <div className='row back6'>
                 <div className='col-9 head_news'>Solana have jumped by 40% over the last two days despite increased threat of hackers.</div>
                 <div className='col-3 new_imgp'>
                 <img src={new_img}></img>

                 </div>

             </div>

             <div className='row back6'>
                 <div className='col-9 head_news'>Solana have jumped by 40% over the last two days despite increased threat of hackers.</div>
                 <div className='col-3 new_imgp'>
                 <img src={new_img}></img>

                 </div>

             </div>

             <div className='row back6'>
                 <div className='col-9 head_news'>Solana have jumped by 40% over the last two days despite increased threat of hackers.</div>
                 <div className='col-3 new_imgp'>
                 <img src={new_img}></img>

                 </div>

             </div>


             <div className='row back6'>
                 <div className='col-9 head_news'>Solana have jumped by 40% over the last two days despite increased threat of hackers.</div>
                 <div className='col-3 new_imgp'>
                 <img src={new_img}></img>

                 </div>

             </div>


             <div className='row back6'>
                 <div className='col-9 head_news'>Solana have jumped by 40% over the last two days despite increased threat of hackers.</div>
                 <div className='col-3 new_imgp'>
                 <img src={new_img}></img>

                 </div>

             </div> */}

            </div>
            <div className='row bottom_bar'>
                <div className='col-2 home_image'>
                    <img src={home}></img>

                </div>
                <div className='col-1'></div>
                <div className='col-1'>
                    <img src={orders}></img>
                    
                </div>
                <div className='col-1'></div>
                <div className='col-2 reverse_image'>
                    <img src={reverse} className='swap'></img>
                </div>
                <div className='col-1'></div>
                <div className='col-2'>
                    <img src={portfolio}></img>
                </div>
                <div className='col-2 wallet_image'>
                    <img src={wallet}></img>
                </div>

            </div>


        </div>
    )
}

export default Home_page;