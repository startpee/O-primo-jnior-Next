import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const BlogPost = (props) => {
  return (
    <>
      <div className="blog-post-container">
        <Head>
          <title>BlogPost - O primo júnior</title>
          <meta
            name="description"
            content="Meu propósito é despertar a sua sabedoria"
          />
          <meta property="og:title" content="BlogPost - O primo júnior" />
          <meta
            property="og:description"
            content="Meu propósito é despertar a sua sabedoria"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b8a12104-24c3-4629-b2c9-d45b8f7a26e7/d3d7bb16-66a6-4aa4-a606-4141583a8c59?org_if_sml=1"
          />
        </Head>
        <div className="blog-post-hero">
          <div className="blog-post-fixed-header">
            <Header rootClassName="header-root-class-name"></Header>
          </div>
          <h1 className="blog-post-text Text2XL">
            Miami Beah is looking different at night!
          </h1>
          <div className="blog-post-bg"></div>
        </div>
        <div className="blog-post-post-details">
          <div className="blog-post-container1">
            <svg
              viewBox="0 0 1170.2857142857142 1024"
              className="blog-post-icon"
            >
              <path d="M585.143 292.571h-219.429v219.429h219.429v-219.429zM658.286 658.286v73.143h-365.714v-73.143h365.714zM658.286 219.429v365.714h-365.714v-365.714h365.714zM1024 658.286v73.143h-292.571v-73.143h292.571zM1024 512v73.143h-292.571v-73.143h292.571zM1024 365.714v73.143h-292.571v-73.143h292.571zM1024 219.429v73.143h-292.571v-73.143h292.571zM146.286 768v-548.571h-73.143v548.571c0 20 16.571 36.571 36.571 36.571s36.571-16.571 36.571-36.571zM1097.143 768v-621.714h-877.714v621.714c0 12.571-2.286 25.143-6.286 36.571h847.429c20 0 36.571-16.571 36.571-36.571zM1170.286 73.143v694.857c0 60.571-49.143 109.714-109.714 109.714h-950.857c-60.571 0-109.714-49.143-109.714-109.714v-621.714h146.286v-73.143h1024z"></path>
            </svg>
          </div>
          <span className="blog-post-text1 TextXL">posted 18 Sept 2021</span>
          <span className="blog-post-text2">
            <span className="blog-post-text3">
              &apos;Started from the bottom now we here&apos;
            </span>
            <span className="blog-post-text4">
              -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="blog-post-text5">Mark Jonson</span>
            <br></br>
          </span>
          <span className="blog-post-text6">
            <span className="blog-post-text7">
              As a result of growing emeraldhouse gas emissions, climate models
              predict that our planet will get significantly warmer, that
              ecosystems will be changed or destroyed, and that enormous human
              and economic costs will be incurred. These scenarios aren’t
              guaranteed, but avoiding them will be very hard. We’re trying to
              take small steps to mitigate our impact.
            </span>
            <br></br>
          </span>
        </div>
        <div className="blog-post-container2"></div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .blog-post-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-hero {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            min-height: 75vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/playground_assets/photo-1-1500h.jpg');
          }
          .blog-post-fixed-header {
            width: 100%;
            display: flex;
            z-index: 200;
            position: fixed;
            box-shadow: 0px 0px 20px 0px rgba(17, 18, 38, 0.15);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-secondary-300);
          }
          .blog-post-text {
            top: 0px;
            left: 276px;
            color: var(--dl-color-gray-white);
            right: auto;
            bottom: 0px;
            margin: auto;
            z-index: 100;
            text-align: center;
          }
          .blog-post-bg {
            top: auto;
            flex: 0 0 auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            display: flex;
            opacity: 0.4;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-black);
          }
          .blog-post-post-details {
            flex: 0 0 auto;
            width: 95%;
            display: flex;
            position: relative;
            max-width: 1320px;
            box-shadow: 0px 10px 15px -10px #626262;
            margin-top: -100px;
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius75);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            background-color: var(--dl-color-secondary-300);
          }
          .blog-post-container1 {
            top: -2rem;
            flex: 0 0 auto;
            left: auto;
            right: auto;
            width: 4rem;
            bottom: auto;
            height: 4rem;
            display: flex;
            position: absolute;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-500);
          }
          .blog-post-icon {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .blog-post-text1 {
            color: var(--dl-color-gray-white);
            align-self: center;
            margin-top: var(--dl-space-space-tripleunit);
          }
          .blog-post-text2 {
            color: #94a3b8ff;
            align-self: center;
          }
          .blog-post-text3 {
            white-space: normal;
          }
          .blog-post-text4 {
            white-space: normal;
          }
          .blog-post-text5 {
            font-style: italic;
          }
          .blog-post-text6 {
            color: var(--dl-color-gray-white);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            padding-top: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-tripleunit);
          }
          .blog-post-text7 {
            text-align: center;
          }
          .blog-post-container2 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: grid;
            grid-template-columns: repeat(12, 1fr);
          }
          @media (max-width: 991px) {
            .blog-post-text {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 767px) {
            .blog-post-text2 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .blog-post-bg {
              height: 510px;
              background-color: transparent;
            }
            .blog-post-text2 {
              text-align: center;
            }
            .blog-post-container2 {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </>
  )
}

export default BlogPost
