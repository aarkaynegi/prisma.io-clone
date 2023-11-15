import { Container } from 'pages/Home/container/Container'
import { useState } from 'react'
import { SixthSectionSVG } from '../../../../assets/images/sixthSection/SixthSectionSVG'
import { SixthSectionSVG2 } from '../../../../assets/images/sixthSection/SixthSectionSVG2'
import './SixthSection.css'

import collab from '../../../../assets/images/sixthSection/optimise-filter.svg'

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
                <div className="text-center cursor-pointer">
                  {showSvg && (
                    <div className="svgProxy">
                      <SixthSectionSVG className="active" />
                    </div>
                  )}
                  {showSvg2 && (
                    <div className="=">
                      <SixthSectionSVG2 className="active" />
                    </div>
                  )}
                </div>
              </div>
              <div className="sixthBodyOneTwo">
                <h3 className="fontBarlow">Serverless functions made easy</h3>
                <p>
                  When used with the ORM, the Data Proxy manages a connection
                  pool to avoid running out of connections during traffic
                  spikes. It also drastically reduces Prisma Clients bundle size
                  and makes your Serverless function start up faster.
                </p>
              </div>
            </div>
            <div className="sixthBodyTwo">
              <div className="sixthBodyTwoOne">
                <img src={collab} alt="" />
              </div>
              <div className="sixthBodyTwoTwo">
                <h3>Collaborate safely with your team!</h3>
                <p>
                  Invite your colleagues and collaborate with appropriate
                  permissions. Manage and verify your application data in the
                  cloud with the Data Browser. Then test and troubleshoot Prisma
                  queries directly from your browser using the Query Console.
                </p>
              </div>
            </div>
          </div>
          <div className="sixthFooter text-center">
            <a href="./data-platform" className="fontInter">
              Discover the Data Platform{' '}
              <i className="fa-solid fa-arrow-right min-[940px]: "></i>
            </a>
          </div>
        </Container>
      </div>
    </>
  )
}
