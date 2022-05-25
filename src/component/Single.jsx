import React from "react";
import "../styles/components/Single.css";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialPinterest,
} from "react-icons/ti";
import { HiShare } from "react-icons/hi";

function Single() {
  return (
    <div className="app__single">
      <div className="container">
        <div className="single__grid">
          <div className="single__img-container">
            <img src="../assets/img10.jpg" alt="" className="single__img" />
          </div>

          <div className="single__content-container">
            <h2 className="title">Exploring The 50th State Fair 2022</h2>

            <div className="single__content">
              <div className="author">
                <p className="desc">Author: Lake Marie</p>

                <p className="desc">March 22, 2022</p>
              </div>

              <div className="upd__del">
                <button className="btn__light">Update</button>
                <button className="btn__dark">Delete</button>
              </div>
            </div>

            <div className="single__desc">
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur distinctio at expedita aperiam qui cupiditate! Omnis
                unde ut dignissimos sequi incidunt porro doloribus corporis
                illum laboriosam vitae sapiente nobis eos, alias ullam. Quod,
                vitae. Eligendi vero culpa eum, possimus voluptates autem
                deleniti vel neque ex doloribus deserunt consequatur sint
                exercitationem est fuga minus dignissimos. Laudantium
                repudiandae dicta sed incidunt cupiditate ea illum tempore sunt
                repellendus, aliquid quia nostrum facilis mollitia est obcaecati
                fugiat iure corporis enim quo numquam velit soluta quibusdam
                cum! Modi sunt temporibus dolore aut optio sed sit asperiores
                nesciunt? Odio reprehenderit officia fugiat quas possimus
                ratione. Aliquam.
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="share__container">
          <div className="share__content-left">
            <p className="subtitle">Share Post</p>
          </div>

          <div className="share__content-right">
            <div className="share__icons">
              <TiSocialFacebook className="share__icon" />
              <TiSocialInstagram className="share__icon" />
              <TiSocialPinterest className="share__icon" />
              <HiShare className="share__icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
