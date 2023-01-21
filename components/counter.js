import React from 'react'

import PropTypes from 'prop-types'

const Counter = (props) => {
  return (
    <>
      <div className={`counter-container ${props.rootClassName} `}>
        <h1 className="counter-text TextXL">{props.number}</h1>
        <span className="counter-text1 TextSM">{props.type}</span>
      </div>
      <style jsx>
        {`
          .counter-container {
            flex: 0 0 auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
          }
          .counter-text {
            color: var(--dl-color-secondary-400);
            font-weight: 600;
          }
          .counter-text1 {
            color: var(--dl-color-secondary-500);
          }

          @media (max-width: 479px) {
            .counter-root-class-name {
              display: none;
            }
            .counter-root-class-name1 {
              display: none;
            }
            .counter-root-class-name2 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Counter.defaultProps = {
  type: 'Friends',
  number: '22',
  rootClassName: '',
}

Counter.propTypes = {
  type: PropTypes.string,
  number: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Counter
