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
                <h1>Flashbake is available on Ghostnet! Read more on <a href="https://medium.com">FIXME the Medium post FIXME</a>.</h1>
              </p>
              <p style={{ marginBottom: 4 + 'em' }}>
                <h2>Use the following endpoint to send a Flashbake transaction: <code>--endpoint https://ghostnet.relay.flashbake.xyz</code>.</h2>
              </p>
            </div>
          </div>
          <div className="container text--center">
            <div className="row">
              <div className="col">
                <h3>Number of Flashbake transactions</h3>
                <img src="https://gorgon.service.eu.newrelic.com/image/a94ba54e-f622-4d9e-b70a-47eb9dbf93e2?type=billboard" height="280px" />
              </div>
              <div className="col">
                <h3>Number of Flashbakers on Ghostnet</h3>
                <img src="https://gorgon.service.eu.newrelic.com/image/c732b910-d9ae-4c6d-a179-3b34507d891f?type=billboard" height="280px" />
              </div>
              <div className="col">
                <h3>Average inclusion time</h3>
                <img src="https://gorgon.service.eu.newrelic.com/image/95ddb8c4-eb3a-49a8-8b3e-aee1df659550?type=billboard" height="280px" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
