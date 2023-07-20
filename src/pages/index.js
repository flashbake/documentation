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
                <h1>Flashbake is available on Mainnet! Read more on <a href="https://medium.com/@nicolasochem/flashbake-on-mainnet-here-we-come-c2212109e61">the Medium post</a>.</h1>
              </p>
              <p style={{ marginBottom: 4 + 'em' }}>
                Use the following endpoint to send a Flashbake transaction: <code>--endpoint https://relay.flashbake.xyz</code>.
              </p>
              <p style={{ marginBottom: 4 + 'em' }}>
                On Ghostnet, use: <code>--endpoint https://ghostnet.relay.flashbake.xyz</code>.
              </p>
            </div>
            <div className="container text--center">
              <p style={{ marginBottom: 4 + 'em' }}>
                <h3>Learn more in the <a href="/docs/intro">Flashbake Documentation</a>.</h3>
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
