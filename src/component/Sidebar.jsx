import React from "react";
import "./../styles/components/Sidebar.css";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialPinterest,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

function Sidebar() {
  return (
    <div className="app__sidebar">
      <div className="sidebar__container">
        <div className="flex__col-1">
          <h2 className="title">About Me</h2>

          <img src="../assets/img9.jpg" alt="" className="flex__col-1-img" />

          <p className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            aut minus dolores atque voluptate. Ratione.
          </p>

          <p className="desc">Peezy Blaze</p>
        </div>
        <div className="flex__col-1">
          <h2 className="title">Let Social</h2>

          <div className="social__icons">
            <TiSocialFacebook fontSize={24} color="#000" />
            <TiSocialInstagram fontSize={24} color="#000" />
            <TiSocialTwitter fontSize={24} color="#000" />
            <TiSocialPinterest fontSize={24} color="#000" />
            <TiSocialYoutube fontSize={24} color="#000" />
            <TiSocialLinkedin fontSize={24} color="#000" />
          </div>
        </div>
        <div className="flex__col-1 col-2">
          <h2 className="title">Categories</h2>

          <ul>
            <li>
              Travel <span>(12)</span>
            </li>
            <li>
              Photography <span>(20)</span>
            </li>
            <li>
              Music <span>(11)</span>
            </li>
            <li>
              Videos <span>(25)</span>
            </li>
            <li>
              Lifestyle <span>(30)</span>
            </li>
          </ul>
        </div>
        <div className="flex__col-1 col-3">
          <h2 className="title">Newsletter</h2>

          <form>
            <input type="text" placeholder="Email..." />
            <button className="btn__dark">Subscribe Now</button>
          </form>
        </div>
        <div className="flex__col-1 col-4">
          <h2 className="title">Popular Post</h2>

          <div className="popular__content">
            <img src="../assets/img1.jpg" alt="" className="popular__img" />

            <div className="popular__flex">
              <p className="small">HELLO WORLD! I'M PEAZY.</p>
              <p className="small date">May 22, 2022</p>
            </div>
          </div>
          <div className="popular__content">
            <img src="../assets/img2.jpg" alt="" className="popular__img" />

            <div className="popular__flex">
              <p className="small">HELLO WORLD! I'M PEAZY.</p>
              <p className="small date">June 2, 2022</p>
            </div>
          </div>
          <div className="popular__content">
            <img src="../assets/img4.jpg" alt="" className="popular__img" />

            <div className="popular__flex">
              <p className="small">HELLO WORLD! I'M PEAZY.</p>
              <p className="small date">Feb 18, 2022</p>
            </div>
          </div>
          <div className="popular__content">
            <img src="../assets/img9.jpg" alt="" className="popular__img" />

            <div className="popular__flex">
              <p className="small">HELLO WORLD! I'M PEAZY.</p>
              <p className="small date">May 22, 2022</p>
            </div>
          </div>
          <div className="popular__content">
            <img src="../assets/img8.jpg" alt="" className="popular__img" />

            <div className="popular__flex">
              <p className="small">HELLO WORLD! I'M PEAZY.</p>
              <p className="small date">May 22, 2022</p>
            </div>
          </div>
        </div>
        <div className="flex__col-1 col-5">
          <h2 className="title">Advertisement</h2>

          <img src="../assets/img10.jpg" alt="" className="advert__img" />
        </div>
        <div className="flex__col-1 col-6">
          <h2 className="title">Instagram</h2>

          <div className="img__gallery">
            <img src="../assets/img1.jpg" alt="" />
            <img src="../assets/img2.jpg" alt="" />
            <img src="../assets/img3.jpg" alt="" />
            <img src="../assets/img4.jpg" alt="" />
            <img src="../assets/img5.jpg" alt="" />
            <img src="../assets/img6.jpg" alt="" />
            <img src="../assets/img7.jpg" alt="" />
            <img src="../assets/img8.jpg" alt="" />
            <img src="../assets/img9.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
