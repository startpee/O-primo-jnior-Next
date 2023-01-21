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
          <meta property="og:title" content="O primo júnior" />
        </Head>
        <div className="home-hero">
          <div className="home-bg"></div>
          <Header></Header>
          <div className="home-container01">
            <div className="home-container02">
              <h1 className="home-text">Olá, eu sou o primo júnior</h1>
              <span className="home-text01">Esse é o meu site oficial</span>
            </div>
          </div>
        </div>
        <div className="home-section1">
          <div className="home-div">
            <DangerousHTML
              html={`<storifyme-collection url="https://stories.storifyme.com/widgets/g-francisco-junior-49065/widget/custom/6949"></storifyme-collection>`}
            ></DangerousHTML>
          </div>
        </div>
        <div className="home-section2">
          <div className="home-container03">
            <Label text="WITH BURNED SOLES​"></Label>
            <h2 className="home-text02 Text2XL">
              <span className="home-text03">
                You need to fight like David with Goliath
              </span>
              <br></br>
            </h2>
            <span className="home-text04 TextXL">
              Brother, life in est is not like in the west. Over the night, the
              black clouds appear, but at least I have my poetry for my freedom.
              The victory is for those that rise after they fall.
            </span>
          </div>
          <div className="home-growing-company-section">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
              className="home-image"
            />
            <div className="home-container04">
              <div className="home-container05">
                <svg viewBox="0 0 967.4605714285714 1024" className="home-icon">
                  <path d="M822.857 256c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM950.857 91.429c0 189.714-52.571 316-188 452-33.143 32.571-70.857 66.286-111.429 100.571l-11.429 216.571c-0.571 5.714-4 11.429-9.143 14.857l-219.429 128c-2.857 1.714-5.714 2.286-9.143 2.286-4.571 0-9.143-1.714-13.143-5.143l-36.571-36.571c-4.571-5.143-6.286-12-4.571-18.286l48.571-157.714-160.571-160.571-157.714 48.571c-1.714 0.571-3.429 0.571-5.143 0.571-4.571 0-9.714-1.714-13.143-5.143l-36.571-36.571c-5.714-6.286-6.857-15.429-2.857-22.286l128-219.429c3.429-5.143 9.143-8.571 14.857-9.143l216.571-11.429c34.286-40.571 68-78.286 100.571-111.429 142.857-142.286 252-188 450.857-188 10.286 0 19.429 8 19.429 18.286z"></path>
                </svg>
              </div>
              <h3 className="home-text05 Healine">A growing company</h3>
              <span className="home-text06">
                The extension comes with three pre-build pages to help you get
                started faster. You can change the text and images and
                you&apos;re good to go.
              </span>
              <div className="home-container06">
                <div className="home-container07">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M636 938h-6q-92-24-158-90-38-38-65-103t-27-119q0-52 38-89t92-37 93 37 39 89q0 34 25 58t63 24 64-24 26-58q0-120-91-206t-219-86q-92 0-168 47t-114 125q-24 50-24 120 0 80 28 154 6 20-14 26t-26-12q-32-82-32-168 0-78 30-138 42-90 129-144t191-54q146 0 249 99t103 237q0 52-39 88t-93 36-92-36-38-88q0-34-26-59t-64-25-63 25-25 59q0 112 80 192 56 56 140 78 18 2 14 26-4 16-20 16zM530 626q0 74 55 128t137 54q4 0 18-2t23-2 18 3 11 13q4 22-18 26-24 4-52 4-80 0-132-38-102-70-102-186 0-22 22-22 20 0 20 22zM416 930q-8 0-14-6-54-54-86-114-46-80-46-184 0-94 71-162t171-68 171 68 71 162q0 20-22 20t-22-20q0-78-58-133t-140-55-140 55-58 133q0 96 38 164 26 46 80 104 16 14 0 30-6 6-16 6zM150 414q-22 0-22-20 0-4 4-12 64-92 160-140 100-52 220-52t220 52q98 48 160 138 4 8 4 12 0 14-16 20t-24-8q-60-82-144-124-92-46-200-47t-200 47q-90 46-146 126-6 8-16 8zM760 190q-8 0-10-2-118-60-238-60-130 0-238 60-10 6-20 0t-10-18q0-14 10-20 116-64 258-64 130 0 258 64 18 10 8 28-8 12-18 12z"></path>
                  </svg>
                </div>
                <span className="home-text07">
                  Carefully crafted components
                </span>
              </div>
              <div className="home-container08">
                <div className="home-container09">
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M917.806 357.076c-22.21-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-368c-44.114 0-80 35.888-80 80v736c0 44.112 35.886 80 80 80h608c44.112 0 80-35.888 80-80v-496c0-14.332-4.372-39.35-42.194-90.924zM785.374 302.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.982 17.78 50.678 41.878 81.374 72.572v0zM896 944c0 8.672-7.328 16-16 16h-608c-8.672 0-16-7.328-16-16v-736c0-8.672 7.328-16 16-16 0 0 367.956-0.002 368 0v224c0 17.672 14.324 32 32 32h224v496z"></path>
                    <path d="M602.924 42.196c-51.574-37.822-76.592-42.196-90.924-42.196h-368c-44.112 0-80 35.888-80 80v736c0 38.632 27.528 70.958 64 78.39v-814.39c0-8.672 7.328-16 16-16h486.876c-9.646-7.92-19.028-15.26-27.952-21.804z"></path>
                  </svg>
                </div>
                <span className="home-text08">Amazing page examples</span>
              </div>
              <div className="home-container10">
                <div className="home-container11">
                  <svg
                    viewBox="0 0 1024.5851428571427 1024"
                    className="home-icon07"
                  >
                    <path d="M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-301.143-122.857-170.286 186.857c-6.857 8-16.571 12-26.857 12-4.571 0-9.143-0.571-13.143-2.286-14.286-5.714-23.429-19.429-23.429-34.286v-258.286l-269.714-110.286c-13.143-5.143-21.714-17.143-22.857-31.429-1.143-13.714 6.286-26.857 18.286-33.714l950.857-548.571c12-7.429 27.429-6.857 38.857 1.143zM812.571 862.857l126.286-756-819.429 472.571 192 78.286 493.143-365.143-273.143 455.429z"></path>
                  </svg>
                </div>
                <span className="home-text09">Dynamic components</span>
              </div>
            </div>
          </div>
          <div className="home-team"></div>
        </div>
        <div className="home-section3">
          <div className="home-container12">
            <h6 className="home-text10 TextSM">
              <span>ON THE COASTLINE</span>
            </h6>
            <h3 className="home-text12 Healine">We are missing the summer</h3>
            <span className="home-text13 TextXL">
              <span className="home-text14">
                We&apos;re waiting for the weather to warm up so that we can go
                to the coastline. We really miss the summertime, our second home
                the coastline.
              </span>
              <br></br>
            </span>
            <div className="home-services">
              <ServiceCard></ServiceCard>
              <div className="home-container13">
                <div className="home-container14">
                  <svg viewBox="0 0 1024 1024" className="home-icon09">
                    <path d="M832 192v-128h-640v128h-192v128c0 106.038 85.958 192 192 192 20.076 0 39.43-3.086 57.62-8.802 46.174 66.008 116.608 113.796 198.38 130.396v198.406h-64c-70.694 0-128 57.306-128 128h512c0-70.694-57.306-128-128-128h-64v-198.406c81.772-16.6 152.206-64.386 198.38-130.396 18.19 5.716 37.544 8.802 57.62 8.802 106.042 0 192-85.962 192-192v-128h-192zM192 436c-63.962 0-116-52.038-116-116v-64h116v64c0 40.186 7.43 78.632 20.954 114.068-6.802 1.246-13.798 1.932-20.954 1.932zM948 320c0 63.962-52.038 116-116 116-7.156 0-14.152-0.686-20.954-1.932 13.524-35.436 20.954-73.882 20.954-114.068v-64h116v64z"></path>
                  </svg>
                </div>
                <h1 className="home-text15 TextXL">Grow your market</h1>
                <span className="home-text16">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </span>
              </div>
              <div className="home-container15">
                <div className="home-container16">
                  <svg viewBox="0 0 1024 1024" className="home-icon11">
                    <path d="M726 726v-172h-86v172h86zM554 726v-428h-84v428h84zM384 726v-300h-86v300h86zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h596z"></path>
                  </svg>
                </div>
                <h1 className="home-text17 TextXL">Launch time</h1>
                <span className="home-text18">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </span>
              </div>
            </div>
            <div className="home-contact">
              <Label text="MESSAGE US"></Label>
              <h2 className="home-text19">Type in the bellow form</h2>
              <span className="home-text20 TextXL">
                They say there&apos;s no future for the street rascals, nothing
                for them, leave them to fall. But it isn&apos;t always how you
                would like it to be, especially when you do nothing for
                yourself.
              </span>
              <div className="home-form">
                <h1 className="home-text21">Want to work with us?</h1>
                <span className="home-text22 TextXL">
                  Complete this form and we will get back to you in 24 hours.
                </span>
                <span className="home-text23 TextXS">FULL NAME</span>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="home-textinput TextSM input"
                />
                <span className="home-text24 TextXS">EMAIL</span>
                <input
                  type="text"
                  placeholder="Email"
                  className="home-textinput1 TextSM input"
                />
                <span className="home-text25 TextXS">MESSAGE</span>
                <textarea
                  cols="80"
                  rows="4"
                  disabled="true"
                  placeholder="Type a message"
                  className="home-textarea TextSM textarea"
                ></textarea>
                <div className="home-container17">
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
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-hero {
            flex: 0 0 auto;
            width: 100%;
            height: 80vh;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1200&q=80');
          }
          .home-bg {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            opacity: 0.7;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .home-container01 {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/pexels-caio-45917%20%5B1%5D%20%5B1%5D-1500h.webp');
          }
          .home-container02 {
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .home-text01 {
            color: var(--dl-color-gray-900);
            max-width: 600px;
            text-align: center;
          }
          .home-section1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            background-color: var(--dl-color-pimary-900);
          }
          .home-div {
            width: 100%;
            height: 100%;
          }
          .home-section2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-container03 {
            width: 66%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-text02 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            line-height: 2.5rem;
          }
          .home-text03 {
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-text04 {
            color: var(--dl-color-secondary-700);
            text-align: center;
            margin-bottom: var(--dl-space-space-unitandhalf);
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
          .home-container04 {
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
          .home-container05 {
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
          .home-text05 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unitandhalf);
          }
          .home-text06 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unitandhalf);
          }
          .home-container06 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-container07 {
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
          .home-icon02 {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .home-text07 {
            color: var(--dl-color-secondary-400);
          }
          .home-container08 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-container09 {
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
          .home-icon04 {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .home-text08 {
            color: var(--dl-color-secondary-400);
          }
          .home-container10 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-container11 {
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
          .home-icon07 {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .home-text09 {
            color: var(--dl-color-secondary-400);
          }
          .home-team {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
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
          .home-container12 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-text10 {
            font-style: normal;
            font-weight: 700;
          }
          .home-text12 {
            color: var(--dl-color-gray-white);
          }
          .home-text13 {
            width: 80%;
            text-align: center;
            font-weight: 300;
            margin-bottom: 0.25rem;
          }
          .home-text14 {
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
          .home-container13 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container14 {
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
          .home-icon09 {
            width: 24px;
            height: 24px;
          }
          .home-text15 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-unitandhalf);
            font-weight: 600;
          }
          .home-text16 {
            color: rgba(100, 116, 139, 1);
            font-size: 1.25rem;
            text-align: center;
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container16 {
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
          .home-icon11 {
            width: 24px;
            height: 24px;
          }
          .home-text17 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-unitandhalf);
            font-weight: 600;
          }
          .home-text18 {
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
          .home-text19 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-halfunit);
          }
          .home-text20 {
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
          .home-text21 {
            color: var(--dl-color-secondary-400);
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 2rem;
          }
          .home-text22 {
            color: rgba(100, 116, 139, 1);
          }
          .home-text23 {
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
          .home-text24 {
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
          .home-text25 {
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
          .home-container17 {
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
            .home-section2 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-text02 {
              text-align: center;
            }
            .home-section3 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-container12 {
              width: 100%;
            }
            .home-services {
              align-items: center;
              flex-direction: column;
            }
            .home-container13 {
              width: 100%;
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .home-container15 {
              width: 100%;
              padding-bottom: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 767px) {
            .home-section1 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-container03 {
              width: 100%;
            }
            .home-growing-company-section {
              flex-direction: column;
            }
            .home-image {
              width: 100%;
            }
            .home-container04 {
              width: 100%;
              margin-top: var(--dl-space-space-doubleunit);
            }
            .home-form {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-container01 {
              left: 0px;
              right: 0px;
              width: 478px;
              margin: auto;
            }
            .home-container02 {
              padding-left: var(--dl-space-space-doubleunit);
              margin-bottom: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: 220px;
            }
            .home-text {
              color: var(--dl-color-gray-white);
              font-size: 1rem;
            }
            .home-container04 {
              align-items: flex-start;
            }
            .home-text12 {
              text-align: center;
            }
            .home-text19 {
              text-align: center;
            }
            .home-text21 {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
