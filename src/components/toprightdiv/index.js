import React from "react";
import Circle from "../navigation/index";
import ImageBorder from "../images/circular_around_top_righ_div.png";
import toprightimage from "../images/topright.png";
import Topbottom from "../../components/border/top_bottom";

function toprightdiv() {
  const vertices = [
    [0, 316],
    [742, 316, 0, 1, 1, 1484, 316],
    [742, 316, 0, 1, 1, 0, 316],
    [0, 316],
    [742, 316, 0, 1, 1, 1484, 316],
    [742, 316, 0, 1, 1, 0, 316]
  ];
  let textPath = `<textPath xlink:href="#textPath03">Come dn...</textPath>`;
  return (
    <>
      <div id="toprightdiv">
        <div id="hero-img"></div>
        <div class="text-wrapper">
        {/* <svg version="1.1" height="700" width="700" viewBox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" data-reactid="13"> */}
        <svg viewBox="0 0 1400 1200" id="menu-svg"  data-reactid="13">
          <defs data-reactid="14">
            {/* <path id="textPath03" d="M95,10 A43,45 0 0 0 50,5" data-reactid="15"></path> */}
            <ellipse id="textPath03" data-reactid="15" fill="yellow" cx="50%" cy="50%" rx="50%" ry="50%" />
          </defs>
          <use xmlnsXlink="#textPath03" fill="yellow" stroke="red" data-reactid="19"></use>

          <text dangerouslySetInnerHTML={{__html: textPath }}></text>;
        </svg>
        {/* <svg viewBox="0 0 100% 200%" id="menu-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs>
            <path fill="none" id="curve" d="M 0 316 A 742 316 0 1 1 1484 316 A 742 316 0 1 1 0 316 Z M 0 316 A 742 316 0 1 1 1484 316 A 742 316 0 1 1 0 316 Z" />
            <ellipse id="curve" fill="yellow" cx="50%" cy="50%" rx="50%" ry="50%" />
          </defs>
          <use xlinkHref="#curve" fill="none"></use>
          <text dy="50" font-size="1.845rem" letter-spacing="1px" fill="#FFF" textLength="232%" dangerouslySetInnerHTML={{__html: textPath }}>
            EYJNLJ
            <textPath xmlnsXlink="#curve" id="textPath" text-anchor="middle">
             hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
              </textPath>
            </text>
    </svg> */}
    </div >
      </div>
    </>
  );
}

export default toprightdiv;
