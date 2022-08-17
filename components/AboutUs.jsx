import React from 'react';

const about=()=>{
    return(
        <><header>
            <div className='about-header'>
                <div class="about-title">
                    <h3>Vintage Value</h3>
                </div>
                <div class="about-content">
                    <h5>who we are</h5>
                    <p>We are team of creatively diverse. driven. innovative individuals working in various locations from the world.</p>
                </div>
            </div>
        </header>
        <main>
        <div className='about-main'>
            <div class="about-profile">
                <figure>
                    <img src="https://vetri-suriya.web.app/devchallenges/team-page/photo1.png" alt=""></img>
                    <figcaption>Aditya</figcaption>
                </figure>
            </div>

                <div class="about-profile">
                    <figure>
                    <img src="https://vetri-suriya.web.app/devchallenges/team-page/photo3.png" alt=""></img>
                        <figcaption>Rutvij</figcaption>
                    </figure>
                </div>

                <div class="about-profile">
                    <figure>
                    <img src="https://vetri-suriya.web.app/devchallenges/team-page/photo5.png" alt=""></img>
                        <figcaption>Dhruv</figcaption>
                    </figure>
                </div>

                <div class="about-profile">
                    <figure>
                    <img src="https://vetri-suriya.web.app/devchallenges/team-page/photo4.png" alt=""></img>
                        <figcaption>Yagna</figcaption>
                    </figure>
                </div>
            </div>
            </main></>
    )
}

export default about;