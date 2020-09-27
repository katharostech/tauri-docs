import React from 'react'
import Modal from 'react-modal'
import Layout from '@theme/Layout'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

const imgPath = '/img/showcase/'

/*
Make a PR, add your own project to the following array following the pattern!
If you need to add some images, create a folder in /img/showcase so your stuff is isolated
*/
const projects = [
  {
    title: 'GUIJS',
    image: imgPath + 'guijs/logo.svg',
    link: 'https://guijs.dev/',
    screenshots: ['0.png'].map((image) => imgPath + 'guijs/' + image),
  },
  {
    title: 'LuckyYou',
    image: imgPath + 'lucky-you/logo.png',
    link: 'https://github.com/jwenjian/lucky-you/',
    screenshots: ['0.png'].map((image) => imgPath + 'lucky-you/' + image),
  },
  {
    title: 'Bidirectional',
    image: imgPath + 'bidirectional/logo.png',
    link: 'https://github.com/samirdjelal/bidirectional/',
    screenshots: ['0.png'].map((image) => imgPath + 'bidirectional/' + image),
  },
  {
    title: 'Juju Lens',
    image: imgPath + 'juju-lens/logo.svg',
    link: 'https://github.com/katharostech/juju-lens/',
    screenshots: ['0.png'].map((image) => imgPath + 'juju-lens/' + image),
  },
]

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .3)',
  },
  content: {
    top: '100px',
    backgroundColor: 'var(--ifm-background-color)',
  },
}

Modal.setAppElement('#__docusaurus')

function Showcase() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  const editUrl = siteConfig.presets[0].find((row) => row.docs).docs.editUrl

  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <Layout title="Showcase" id="showcase">
      <div className="container margin-vert--lg">
        <h1 className="text--center margin-bottom--xl">Showcase</h1>
        <p className="text--center">
          {siteConfig.themeConfig.t.pages.showcase.projects.content}
        </p>
        <div className="row">
          {projects.map(
            ({ title, image, link, description, screenshots }, index) => (
              <div className="col col--4 margin-bottom--lg" key={index}>
                <div
                  className={'card'}
                  style={{
                    textAlign: 'center',
                    backgroundColor: '#303846',
                    color: '#ffffff',
                  }}
                >
                  <div
                    className="card__image"
                    style={{
                      marginTop: 10,
                      minHeight: 100,
                      display: 'flex',
                      alignSelf: 'center',
                    }}
                  >
                    <img
                      style={{ maxHeight: 100, objectFit: 'contain' }}
                      src={useBaseUrl(image)}
                      alt={title}
                    />
                  </div>
                  <div className="card__body">
                    <div className="avatar">
                      <div className="avatar__intro margin-left--none">
                        <h4 className="avatar__name">{title}</h4>
                        <small className="avatar__subtitle">
                          {
                            siteConfig.themeConfig.t.pages.showcase.projects[
                              index
                            ].description
                          }
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="card__footer">
                    <a href={link} target="_blank">
                      <button
                        className="button button--secondary"
                        onClick={openModal}
                      >
                        {siteConfig.themeConfig.t.global.discover}
                      </button>
                    </a>
                    {/* <button
                      className="button button--secondary"
                      onClick={openModal}
                    >
                      Discover
                    </button>

                    <Modal
                      isOpen={modalIsOpen}
                      onRequestClose={closeModal}
                      style={customStyles}
                      contentLabel={title}
                    >
                      <button onClick={closeModal}>close</button>
                      {screenshots.map(screenshot => <img src={screenshot}/>)}
                    </Modal> */}
                  </div>
                </div>
              </div>
            )
          )}
          <div className="col col--4 margin-bottom--lg">
            <div
              className={'card'}
              style={{
                textAlign: 'center',
                backgroundColor: '#303846',
                color: '#ffffff',
              }}
            >
              <div
                className="card__image"
                style={{
                  marginTop: 10,
                  minHeight: 100,
                  display: 'flex',
                  alignSelf: 'center',
                }}
              >
                <img
                  style={{ maxHeight: 100, objectFit: 'contain' }}
                  src={useBaseUrl('/img/smile.png')}
                  alt="Your project!"
                />
              </div>
              <div className="card__body">
                <div className="avatar">
                  <div className="avatar__intro margin-left--none">
                    <h4 className="avatar__name">
                      {siteConfig.themeConfig.t.pages.showcase.yourProject}
                    </h4>
                    <small className="avatar__subtitle"></small>
                  </div>
                </div>
              </div>
              <div className="card__footer">
                <a href={editUrl + 'src/pages/showcase.js'} target="_blank">
                  <button className="button button--secondary">
                    {siteConfig.themeConfig.t.pages.showcase.addIt}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Showcase
