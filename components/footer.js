import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div className={`footer-container ${props.rootClassName} `}>
        <div className="footer-container01">
          <div className="footer-container02">
            <h1 className="footer-text TextXL">@oprimojunior</h1>
            <span className="footer-text1">
              Acompanha o primo em uma das redes
            </span>
            <div className="footer-container03">
              <div className="footer-container04">
                <a
                  href="https://www.instagram.com/oprimojunior/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link"
                >
                  <svg viewBox="0 0 1024 1024" className="footer-icon">
                    <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
                    <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
                    <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
                  </svg>
                </a>
              </div>
              <div className="footer-container05">
                <a
                  href="https://www.youtube.com/@oprimojunior"
                  className="footer-link1"
                >
                  <svg viewBox="0 0 1024 1024" className="footer-icon04">
                    <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
                  </svg>
                </a>
              </div>
              <div className="footer-container06">
                <a
                  href="https://open.spotify.com/show/4GLX3DpZCOgAHsV6SWwj7o?go=1&amp;sp_cid=1a2f9dc2c195ddf4646f77637a80f963&amp;utm_source=embed_player_p&amp;utm_medium=desktop&amp;nd=1"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link2"
                >
                  <svg viewBox="0 0 1024 1024" className="footer-icon06">
                    <path d="M512 0c-281.6 0-512 230.4-512 512s230.4 512 512 512 512-230.4 512-512-227.8-512-512-512zM747.6 739.8c-10.2 15.4-28.2 20.4-43.6 10.2-120.4-74.2-271.4-89.6-450.6-48.6-18 5.2-33.2-7.6-38.4-23-5.2-18 7.6-33.2 23-38.4 194.6-43.6 363.6-25.6 496.6 56.4 18 7.6 20.6 28 13 43.4zM809 599c-12.8 18-35.8 25.6-53.8 12.8-138.2-84.4-348.2-110-509.4-58.8-20.4 5.2-43.6-5.2-48.6-25.6-5.2-20.4 5.2-43.6 25.6-48.6 186.8-56.4 417.2-28.2 576 69.2 15.2 7.6 23 33.2 10.2 51zM814 455.6c-163.8-97.2-437.8-107.6-594-58.8-25.6 7.6-51.2-7.6-58.8-30.8-7.6-25.6 7.6-51.2 30.8-58.8 181.8-53.8 481.2-43.6 670.8 69.2 23 12.8 30.8 43.6 18 66.6-13 17.8-43.6 25.4-66.8 12.6z"></path>
                  </svg>
                </a>
              </div>
              <div className="footer-container07">
                <a
                  href="https://br.pinterest.com/oprimojunior/"
                  className="footer-link3"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="footer-icon08"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857-43.429 0-84.571-6.286-124.571-18.286 16.571-26.286 35.429-60 44.571-93.714 0 0 5.143-19.429 30.857-120.571 14.857 29.143 59.429 54.857 106.857 54.857 141.143 0 237.143-128.571 237.143-301.143 0-129.714-110.286-251.429-278.286-251.429-208 0-313.143 149.714-313.143 274.286 0 75.429 28.571 142.857 89.714 168 9.714 4 18.857 0 21.714-11.429 2.286-7.429 6.857-26.857 9.143-34.857 2.857-11.429 1.714-14.857-6.286-24.571-17.714-21.143-29.143-48-29.143-86.286 0-110.857 82.857-210.286 216-210.286 117.714 0 182.857 72 182.857 168.571 0 126.286-56 233.143-139.429 233.143-45.714 0-80-37.714-69.143-84.571 13.143-55.429 38.857-115.429 38.857-155.429 0-36-19.429-66.286-59.429-66.286-46.857 0-84.571 48.571-84.571 113.714 0 0 0 41.714 14.286 69.714-48 203.429-56.571 238.857-56.571 238.857-8 33.143-8.571 70.286-7.429 101.143-154.857-68-262.857-222.286-262.857-402.286 0-242.286 196.571-438.857 438.857-438.857s438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-container08">
            <div className="footer-container09">
              <span className="footer-text2">Link importante</span>
              <span className="footer-text3 TextSM">Sobre</span>
              <a
                href="https://api.whatsapp.com/send?phone=5511967272695"
                className="footer-link4 TextSM"
              >
                Fale comigo
              </a>
            </div>
            <div className="footer-container10">
              <span className="footer-text4">empresa</span>
              <span className="footer-text5 TextSM">
                Politica de privacidade
              </span>
              <a href="https://startpee.com/" className="footer-link5 TextSM">
                Nossa startup
              </a>
            </div>
          </div>
        </div>
        <div className="footer-container11"></div>
        <span className="footer-text6 TextSM">
          Copyright © 2023 O primo júnior
        </span>
      </div>
      <style jsx>
        {`
          .footer-container {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-900);
          }
          .footer-container01 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-container02 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unit);
            font-weight: 600;
          }
          .footer-text1 {
            color: var(--dl-color-secondary-500);
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-container03 {
            display: flex;
            margin-top: var(--dl-space-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .footer-container04 {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .footer-link {
            display: contents;
          }
          .footer-icon {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .footer-container05 {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .footer-link1 {
            display: contents;
          }
          .footer-icon04 {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .footer-container06 {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .footer-link2 {
            display: contents;
          }
          .footer-icon06 {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .footer-container07 {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .footer-link3 {
            display: contents;
          }
          .footer-icon08 {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .footer-container08 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .footer-container09 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 6rem;
            flex-direction: column;
          }
          .footer-text2 {
            color: var(--dl-color-secondary-400);
            font-weight: 600;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text3 {
            color: var(--dl-color-secondary-500);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .footer-link4 {
            color: var(--dl-color-secondary-500);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-container10 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text4 {
            color: var(--dl-color-secondary-400);
            font-weight: 600;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text5 {
            color: var(--dl-color-secondary-500);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .footer-link5 {
            color: var(--dl-color-secondary-500);
            text-decoration: none;
          }
          .footer-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: 1px;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            background-color: #e3e8efff;
          }
          .footer-text6 {
            color: var(--dl-color-secondary-500);
            align-self: center;
          }
          .footer-root-class-name {
            height: 100%;
          }
          @media (max-width: 991px) {
            .footer-container01 {
              align-items: center;
              flex-direction: column;
            }
            .footer-container02 {
              align-items: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .footer-container09 {
              align-items: center;
            }
            .footer-container10 {
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .footer-text1 {
              text-align: center;
            }
            .footer-container08 {
              align-items: center;
              flex-direction: column;
            }
            .footer-container09 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .footer-container10 {
              align-items: center;
            }
            .footer-root-class-name {
              width: 100%;
              height: 100%;
            }
          }
          @media (max-width: 479px) {
            .footer-text2 {
              color: var(--dl-color-secondary-400);
              font-style: normal;
              font-weight: 700;
            }
            .footer-text4 {
              color: var(--dl-color-secondary-400);
              font-style: normal;
              font-weight: 700;
            }
            .footer-root-class-name {
              width: 100%;
              height: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
