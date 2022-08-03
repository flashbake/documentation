import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container text--center">
            <div className="row">
              <p style={{ marginTop: 4 + 'em' }}>
                <h1>Flashbake is available on Ghostnet! Read more on <a href="https://medium.com/flashbake/flashbake-is-available-on-ghostnet-463088524a98">the Medium post</a>.</h1>
              </p>
              <p style={{ marginBottom: 4 + 'em' }}>
                <h2>Use the following endpoint to send a Flashbake transaction: <code>--endpoint https://ghostnet.relay.flashbake.xyz</code>.</h2>
              </p>
            </div>
          </div>
          <div className="container text--center">
            <div className="row">
              <div className="col">
                <h3>Number of Flashbake transactions in the last 3 days</h3>
                <img src="https://gorgon.service.eu.newrelic.com/image/6096558e-ce50-408d-abf1-3fbc5bb5f33c?type=billboard" height="280px" />
              </div>
              <div className="col">
                <h3>Number of Ghostnet Flashbakers who processed them</h3>
                <img src="https://gorgon.service.eu.newrelic.com/image/714d0c6c-46b0-4da1-b23e-35291af10c01?type=billboard" height="280px" />
              </div>
              <div className="col">
                <h3>Average inclusion time</h3>
                <img src="https://gorgon.service.eu.newrelic.com/image/ebc5206c-bd48-4366-a567-4e54b35e87f7?type=area" height="280px" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
