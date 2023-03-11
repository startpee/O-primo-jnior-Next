import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Header from '../components/header'
import Label from '../components/label'
import ServiceCard from '../components/service-card'
import SecondaryButton from '../components/secondary-button'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>O primo júnior</title>
          <meta
            name="description"
            content="Meu propósito é despertar a sua sabedoria"
          />
          <meta property="og:title" content="O primo júnior" />
          <meta
            property="og:description"
            content="Meu propósito é despertar a sua sabedoria"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b8a12104-24c3-4629-b2c9-d45b8f7a26e7/d3d7bb16-66a6-4aa4-a606-4141583a8c59?org_if_sml=1"
          />
        </Head>
        <div className="home-hero">
          <Header rootClassName="header-root-class-name1"></Header>
        </div>
        <div className="home-section1"></div>
        <div className="home-div">
          <DangerousHTML
            html={`<storifyme-collection url="https://stories.storifyme.com/widgets/g-francisco-junior-49065/widget/custom/6949"></storifyme-collection>`}
          ></DangerousHTML>
        </div>
        <div className="home-section2">
          <div className="home-container01">
            <Label text="minha jornada"></Label>
            <h2 className="home-text Text2XL">
              <span className="home-text01">
                Eu vou ser o próximo elon musk
              </span>
              <br></br>
            </h2>
          </div>
          <div className="home-growing-company-section">
            <img
              alt="image"
              src="/playground_assets/img_20230118_131316-1400w.webp"
              className="home-image"
            />
            <div className="home-container02">
              <div className="home-container03">
                <svg viewBox="0 0 967.4605714285714 1024" className="home-icon">
                  <path d="M822.857 256c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM950.857 91.429c0 189.714-52.571 316-188 452-33.143 32.571-70.857 66.286-111.429 100.571l-11.429 216.571c-0.571 5.714-4 11.429-9.143 14.857l-219.429 128c-2.857 1.714-5.714 2.286-9.143 2.286-4.571 0-9.143-1.714-13.143-5.143l-36.571-36.571c-4.571-5.143-6.286-12-4.571-18.286l48.571-157.714-160.571-160.571-157.714 48.571c-1.714 0.571-3.429 0.571-5.143 0.571-4.571 0-9.714-1.714-13.143-5.143l-36.571-36.571c-5.714-6.286-6.857-15.429-2.857-22.286l128-219.429c3.429-5.143 9.143-8.571 14.857-9.143l216.571-11.429c34.286-40.571 68-78.286 100.571-111.429 142.857-142.286 252-188 450.857-188 10.286 0 19.429 8 19.429 18.286z"></path>
                </svg>
              </div>
              <h3 className="home-text03 Healine">Meu propósito</h3>
              <span className="home-text04">
                Servir as pessoas compartilhando a minha visão empreendedora.
              </span>
              <div className="home-container04">
                <div className="home-container05">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon2"
                  >
                    <path d="M391.429 742.286l350.857-350.857c14.286-14.286 14.286-37.143 0-51.429l-58.286-58.286c-14.286-14.286-37.143-14.286-51.429 0l-266.857 266.857-120.571-120.571c-14.286-14.286-37.143-14.286-51.429 0l-58.286 58.286c-14.286 14.286-14.286 37.143 0 51.429l204.571 204.571c14.286 14.286 37.143 14.286 51.429 0zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </div>
                <span className="home-text05">#vailaefaz</span>
              </div>
            </div>
          </div>
          <div className="home-team"></div>
        </div>
        <div className="home-section3">
          <div className="home-container06">
            <h6 className="home-text06 TextSM">
              <span>ON THE COASTLINE</span>
            </h6>
            <h3 className="home-text08 Healine">We are missing the summer</h3>
            <span className="home-text09 TextXL">
              <span className="home-text10">
                We&apos;re waiting for the weather to warm up so that we can go
                to the coastline. We really miss the summertime, our second home
                the coastline.
              </span>
              <br></br>
            </span>
            <div className="home-services">
              <ServiceCard></ServiceCard>
              <div className="home-container07">
                <div className="home-container08">
                  <svg viewBox="0 0 1024 1024" className="home-icon4">
                    <path d="M832 192v-128h-640v128h-192v128c0 106.038 85.958 192 192 192 20.076 0 39.43-3.086 57.62-8.802 46.174 66.008 116.608 113.796 198.38 130.396v198.406h-64c-70.694 0-128 57.306-128 128h512c0-70.694-57.306-128-128-128h-64v-198.406c81.772-16.6 152.206-64.386 198.38-130.396 18.19 5.716 37.544 8.802 57.62 8.802 106.042 0 192-85.962 192-192v-128h-192zM192 436c-63.962 0-116-52.038-116-116v-64h116v64c0 40.186 7.43 78.632 20.954 114.068-6.802 1.246-13.798 1.932-20.954 1.932zM948 320c0 63.962-52.038 116-116 116-7.156 0-14.152-0.686-20.954-1.932 13.524-35.436 20.954-73.882 20.954-114.068v-64h116v64z"></path>
                  </svg>
                </div>
                <h1 className="home-text11 TextXL">Grow your market</h1>
                <span className="home-text12">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </span>
              </div>
              <div className="home-container09">
                <div className="home-container10">
                  <svg viewBox="0 0 1024 1024" className="home-icon6">
                    <path d="M726 726v-172h-86v172h86zM554 726v-428h-84v428h84zM384 726v-300h-86v300h86zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h596z"></path>
                  </svg>
                </div>
                <h1 className="home-text13 TextXL">Launch time</h1>
                <span className="home-text14">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </span>
              </div>
            </div>
            <div className="home-contact">
              <Label text="MESSAGE US"></Label>
              <h2 className="home-text15">Type in the bellow form</h2>
              <span className="home-text16 TextXL">
                They say there&apos;s no future for the street rascals, nothing
                for them, leave them to fall. But it isn&apos;t always how you
                would like it to be, especially when you do nothing for
                yourself.
              </span>
              <div className="home-form">
                <h1 className="home-text17">Want to work with us?</h1>
                <span className="home-text18 TextXL">
                  Complete this form and we will get back to you in 24 hours.
                </span>
                <span className="home-text19 TextXS">FULL NAME</span>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="home-textinput TextSM input"
                />
                <span className="home-text20 TextXS">EMAIL</span>
                <input
                  type="text"
                  placeholder="Email"
                  className="home-textinput1 TextSM input"
                />
                <span className="home-text21 TextXS">MESSAGE</span>
                <textarea
                  cols="80"
                  rows="4"
                  disabled="true"
                  placeholder="Type a message"
                  className="home-textarea TextSM textarea"
                ></textarea>
                <div className="home-container11">
                  <SecondaryButton
                    button="Send message"
                    rootClassName="secondary-button-root-class-name"
                  ></SecondaryButton>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/gray-vector.svg"
            className="home-image1"
          />
        </div>
        <div>
          <DangerousHTML
            html={`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
<a href="https://api.whatsapp.com/send?phone=5511967272695&text=olá" class="float" target="_blank">
<i class="fa fa-whatsapp my-float"></i>
</a>`}
          ></DangerousHTML>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: 85px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-section1 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: none;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-end;
            background-color: var(--dl-color-pimary-900);
          }
          .home-div {
            width: 100%;
            height: 100%;
            margin-top: 30px;
            margin-bottom: 30px;
          }
          .home-section2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-container01 {
            width: 66%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-text {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            line-height: 2.5rem;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text01 {
            background-color: rgb(255, 255, 255);
          }
          .home-growing-company-section {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image {
            width: 33%;
            object-fit: cover;
            margin-left: auto;
            margin-right: auto;
            border-radius: var(--dl-radius-radius-radius50);
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 41%;
            display: flex;
            align-items: flex-start;
            margin-left: auto;
            margin-right: auto;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 4rem;
            height: 4rem;
            display: flex;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .home-icon {
            fill: var(--dl-color-pimary-500);
            width: 24px;
            height: 24px;
          }
          .home-text03 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unitandhalf);
          }
          .home-text04 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unitandhalf);
          }
          .home-container04 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .home-icon2 {
            width: 24px;
            height: 24px;
          }
          .home-text05 {
            color: var(--dl-color-secondary-400);
          }
          .home-team {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: none;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-section3 {
            flex: 0 0 auto;
            width: 100%;
            display: none;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-secondary-100);
          }
          .home-container06 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-text06 {
            font-style: normal;
            font-weight: 700;
          }
          .home-text08 {
            color: var(--dl-color-gray-white);
          }
          .home-text09 {
            width: 80%;
            text-align: center;
            font-weight: 300;
            margin-bottom: 0.25rem;
          }
          .home-text10 {
            white-space: normal;
          }
          .home-services {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #f2f5f9ff;
          }
          .home-icon4 {
            width: 24px;
            height: 24px;
          }
          .home-text11 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-unitandhalf);
            font-weight: 600;
          }
          .home-text12 {
            color: rgba(100, 116, 139, 1);
            font-size: 1.25rem;
            text-align: center;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #f2f5f9ff;
          }
          .home-icon6 {
            width: 24px;
            height: 24px;
          }
          .home-text13 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-unitandhalf);
            font-weight: 600;
          }
          .home-text14 {
            color: rgba(100, 116, 139, 1);
            font-size: 1.25rem;
            text-align: center;
          }
          .home-contact {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
          }
          .home-text15 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-halfunit);
          }
          .home-text16 {
            color: rgba(255, 255, 255, 0.75);
            width: 80%;
            text-align: center;
            font-weight: 300;
          }
          .home-form {
            flex: 0 0 auto;
            width: 80%;
            display: flex;
            padding: var(--dl-space-space-twoandhalf);
            max-width: 700px;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-pimary-800);
          }
          .home-text17 {
            color: var(--dl-color-secondary-400);
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 2rem;
          }
          .home-text18 {
            color: rgba(100, 116, 139, 1);
          }
          .home-text19 {
            color: rgba(100, 116, 139, 1);
            margin-top: var(--dl-space-space-halfunit);
            margin-left: 0.25rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-textinput {
            color: rgba(148, 163, 184, 1);
            width: 100%;
            outline: 0;
            padding: var(--dl-space-space-triplequarter);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
              0 1px 2px 0 rgba(0, 0, 0, 0.06);
            transition: 0.3s;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-textinput:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px#4AA4E3;
          }
          .home-text20 {
            color: rgba(100, 116, 139, 1);
            margin-top: var(--dl-space-space-halfunit);
            margin-left: 0.25rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-textinput1 {
            color: rgba(148, 163, 184, 1);
            width: 100%;
            outline: 0;
            padding: var(--dl-space-space-triplequarter);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
              0 1px 2px 0 rgba(0, 0, 0, 0.06);
            transition: 0.3s;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-textinput1:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px#4AA4E3;
          }
          .home-text21 {
            color: rgba(100, 116, 139, 1);
            margin-top: var(--dl-space-space-halfunit);
            margin-left: 0.25rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-textarea {
            color: rgba(148, 163, 184, 1);
            width: 100%;
            outline: 0;
            padding: var(--dl-space-space-triplequarter);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
              0 1px 2px 0 rgba(0, 0, 0, 0.06);
            transition: 0.3s;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-textarea:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px #4aa4e3;
          }
          .home-container11 {
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image1 {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -1px;
            position: absolute;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .home-container {
              align-items: center;
            }
            .home-hero {
              height: 65px;
            }
            .home-section2 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-text {
              text-align: center;
            }
            .home-section3 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-container06 {
              width: 100%;
            }
            .home-services {
              align-items: center;
              flex-direction: column;
            }
            .home-container07 {
              width: 100%;
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .home-container09 {
              width: 100%;
              padding-bottom: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 767px) {
            .home-container {
              align-items: center;
            }
            .home-section1 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-container01 {
              width: 100%;
            }
            .home-growing-company-section {
              flex-direction: column;
            }
            .home-image {
              width: 100%;
            }
            .home-container02 {
              width: 100%;
              margin-top: var(--dl-space-space-doubleunit);
            }
            .home-text04 {
              color: var(--dl-color-secondary-400);
            }
            .home-text05 {
              color: var(--dl-color-secondary-400);
            }
            .home-form {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-container {
              align-items: center;
            }
            .home-hero {
              height: 83px;
              margin-bottom: 0px;
            }
            .home-section2 {
              width: 100%;
            }
            .home-container02 {
              align-items: flex-start;
            }
            .home-text08 {
              text-align: center;
            }
            .home-text15 {
              text-align: center;
            }
            .home-text17 {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
