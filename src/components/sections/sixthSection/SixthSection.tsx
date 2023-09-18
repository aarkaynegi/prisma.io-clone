import React, { useState } from 'react'
import { Container } from 'components/container/Container'
import './SixthSection.css'
import { SixthSectionSVG } from '../../../assets/images/sixthSection/SixthSectionSVG'
import { SixthSectionSVG2 } from '../../../assets/images/sixthSection/SixthSectionSVG2'

export function SixthSection() {
  const [showSvg, setShowSvg] = useState(true)
  const [showSvg2, setShowSvg2] = useState(false)

  const handleSvgClick = () => {
    setShowSvg(!showSvg)
    setShowSvg2(false)
  }

  const handleSvg2Click = () => {
    setShowSvg(false)
    setShowSvg2(!showSvg2)
  }
  return (
    <>
      <div className="sixth-section">
        <Container>
          <div className="sixthHeader">
            <h2 className="">Optimize Prisma for production workflows</h2>
            <p className="fontInter">
              Gain better reliability, collaboration, and visibility when
              working with your database.
            </p>
          </div>
          <div className="sixthBody">
            <div className="sixthBodyOne">
              <div className="sixthBodyOneOne">
                <div
                  className={`sixth-btns ${showSvg && 'with'}  ${
                    showSvg2 && 'without'
                  }`}
                >
                  <button onClick={handleSvgClick} className="withProxy">
                    With the Proxy
                  </button>
                  <button onClick={handleSvg2Click} className="withoutProxy">
                    Without the Proxy
                  </button>
                </div>
                <div className="text-center pointer">
                  {showSvg && (
                    <div className="">
                      <SixthSectionSVG />
                    </div>
                  )}
                  {showSvg2 && (
                    <div className="=">
                      <SixthSectionSVG2 />
                    </div>
                  )}
                </div>
              </div>
              <div className="">
                <h3>Serverless functions made easy</h3>
                <p>
                  When used with the ORM, the Data Proxy manages a connection
                  pool to avoid running out of connections during traffic
                  spikes. It also drastically reduces Prisma Clients bundle size
                  and makes your Serverless function start up faster.
                </p>
              </div>
            </div>
            <div className=""></div>
          </div>
          <div className="sixthFooter text-center"></div>
        </Container>
      </div>
    </>
  )
}
