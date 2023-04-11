import React from 'react'
import Head from 'next/head'

const Assessoria = (props) => {
  return (
    <>
      <div className="assessoria-container">
        <Head>
          <title>Assessoria - O primo júnior</title>
          <meta name="description" content="o cara da tecnologia" />
          <meta property="og:title" content="Assessoria - O primo júnior" />
          <meta property="og:description" content="o cara da tecnologia" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b8a12104-24c3-4629-b2c9-d45b8f7a26e7/d3d7bb16-66a6-4aa4-a606-4141583a8c59?org_if_sml=1"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .assessoria-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Assessoria
