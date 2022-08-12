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
                Use the following endpoint to send a Flashbake transaction: <code>--endpoint https://ghostnet.relay.flashbake.xyz</code>.
              </p>
            </div>
          </div>
          <div className="container text--center">
            <div className="row">
              <div className="col">
                <h3>Number of Flashbake transactions in the last 3 days</h3>
                <iframe scrolling="no" width="347" height="301" src="https://chart-embed.service.eu.newrelic.com/herald/82bd2335-3357-42d1-92e9-dcfff0665acf?height=200px&timepicker=false" frameborder="0"></iframe>
              </div>
              <div className="col">
                <h3>Number of Ghostnet Flashbakers who processed them</h3>
                <iframe scrolling="no" width="347" height="301" src="https://chart-embed.service.eu.newrelic.com/herald/225f7e63-ac66-4998-b593-871d22aa36c9?height=200px&timepicker=false" frameborder="0"></iframe>
              </div>
              <div className="col">
                <h3>Average inclusion time</h3>
                <iframe scrolling="no" width="347" height="301" src="https://chart-embed.service.eu.newrelic.com/herald/044c06f2-2e5f-4ff8-ac72-2f58e947fcc5?height=200px&timepicker=false" frameborder="0"></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
