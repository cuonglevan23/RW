import Banner from '~/components/Banner/Banner';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Button from '~/components/Button/Button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    IconAppFeatures1,
    IconAppFeatures2,
    IconAppFeatures3,
    IconAppFeatures4,
    IconAppFeatures5,
    IconAppFeatures6,
    IconAppFeatures7,
    IconAppFeaturesRight,
    IconQuickSteep1,
    IconQuickSteep2,
    IconQuickSteep3,
} from '~/components/Icons';
const cx = classNames.bind(styles);

function Home() {
    return (
        <section className="container">
            <main className={cx('content')}>
                <Banner />
                <div className={cx('block')}>
                    <div className={cx('content-block')}>
                        <div className={cx('content-img')}>
                            <img
                                className={cx('img')}
                                src="https://images.ctfassets.net/c5bd0wqjc7v0/2nmdMe3zBL8fgv3Ltvk6JD/068793dfeb8744955ed8794b97e0f9c5/image_26.png?fm=webp&q=100&w=1180"
                                alt="Web3 Profiles"
                            />
                        </div>
                        <div className={cx('content-text')}>
                            <div className={cx('content-text-header')}>
                                Explore web3 profiles, and claim one for free
                            </div>
                            <div className={cx('content-text-description')}>
                                Create and customize your web3 profile, check out other profiles, and explore popular
                                NFT collections and tokens.
                            </div>
                            <div className={cx('content-btn')}>
                                <Button primary className={cx('content-btn-primary')}>
                                    Learn more
                                    <FontAwesomeIcon icon={faArrowRight} className={cx('content-block-icon')} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('overview')}>
                    <h2 className={cx('overview-title')}>Create your cryptocurrency portfolio today</h2>
                    <div className={cx('overview-description')}>
                        Coinbase has a variety of features that make it the best place to start trading
                    </div>
                    <div className={cx('overview-appfeatures')}>
                        <div className={cx('overview-appfeatures-left')}>
                            <div className={cx('overview-left-item')}>
                                <div className={cx('icon')}>
                                    <IconAppFeatures1 />
                                </div>
                                <div className={cx('left-text')}>
                                    <div className={cx('left-title')}>Manage your portfolio</div>
                                    <div className={cx('left-description')}>
                                        Buy and sell popular digital currencies, keep track of them in the one place.
                                    </div>
                                </div>
                            </div>
                            <div className={cx('overview-left-item')}>
                                <div className={cx('icon')}>
                                    <IconAppFeatures2 />
                                </div>
                                <div className={cx('left-text')}>
                                    <div className={cx('left-title')}>Recurring buys</div>
                                    <div className={cx('left-description')}>
                                        Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or
                                        monthly.
                                    </div>
                                </div>
                            </div>
                            <div className={cx('overview-left-item')}>
                                <div className={cx('icon')}>
                                    <IconAppFeatures3 />
                                </div>
                                <div className={cx('left-text')}>
                                    <div className={cx('left-title')}>Vault protection</div>
                                    <div className={cx('left-description')}>
                                        For added security, store your funds in a vault with time delayed withdrawals.
                                    </div>
                                </div>
                            </div>
                            <div className={cx('overview-left-item')}>
                                <div className={cx('icon')}>
                                    <IconAppFeatures4 />
                                </div>
                                <div className={cx('left-text')}>
                                    <div className={cx('left-title')}>Mobile apps</div>
                                    <div className={cx('left-description')}>
                                        Stay on top of the markets with the Coinbase app for Android or iOS.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('overview-appfeatures-right')}>
                            <img
                                src="https://assets.coinbase.com/assets/2a688cc86b2508f2.webp"
                                className={cx('img')}
                                alt="Web3 Profiles"
                            />
                        </div>
                    </div>
                </div>
                <div className={cx('divider')} />

                <div className={cx('features')}>
                    <div className={cx('features-wrapper')}>
                        <div className={cx('feature-content')}>
                            <h2 className={cx('features-title')}>The most trusted cryptocurrency platform</h2>
                            <p className={cx('feature-description')}>
                                Here are a few reasons why you should choose Coinbase
                            </p>
                            <div className={cx('feature-app')}>
                                <div className={cx('feature-app-item')}>
                                    <IconAppFeatures5 />
                                    <h2 className={cx('feature-app-title')}>Secure storage</h2>
                                    <div className={cx('feature-app-description')}>
                                        We store the vast majority of the digital assets in secure offline storage.
                                    </div>
                                    <a
                                        href="https://www.coinbase.com/security"
                                        title="Learn how Coinbase keeps your funds safe and secure"
                                        className={cx('feature-app-item-link')}
                                    >
                                        Learn how Coinbase keeps your funds safe and secure <IconAppFeaturesRight />
                                    </a>
                                </div>
                                <div className={cx('feature-app-item')}>
                                    <IconAppFeatures6 />
                                    <h2 className={cx('feature-app-title')}>Secure storage</h2>
                                    <div className={cx('feature-app-description')}>
                                        We store the vast majority of the digital assets in secure offline storage.
                                    </div>
                                    <a
                                        href="https://www.coinbase.com/security"
                                        title="Learn how Coinbase keeps your funds safe and secure"
                                        className={cx('feature-app-item-link')}
                                    >
                                        Learn how Coinbase keeps your funds safe and secure <IconAppFeaturesRight />
                                    </a>
                                </div>
                                <div className={cx('feature-app-item')}>
                                    <IconAppFeatures7 />
                                    <h2 className={cx('feature-app-title')}>Secure storage</h2>
                                    <div className={cx('feature-app-description')}>
                                        We store the vast majority of the digital assets in secure offline storage.
                                    </div>
                                    <a
                                        href="https://www.coinbase.com/security"
                                        title="Learn how Coinbase keeps your funds safe and secure"
                                        className={cx('feature-app-item-link')}
                                    >
                                        Learn how Coinbase keeps your funds safe and secure <IconAppFeaturesRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('backdrop')}>
                    <div className={cx('backdrop-wrapper')}>
                        <div className={cx('backdrop-content')}>
                            <div className={cx('backdrop-item')}>
                                <div className={cx('backdrop-title')}>$145B</div>
                                <div className={cx('backdrop-description')}>Quarterly volume traded</div>
                            </div>
                            <div className={cx('backdrop-item')}>
                                <div className={cx('backdrop-title')}>100+</div>
                                <div className={cx('backdrop-description')}>Countries supported</div>
                            </div>
                            <div className={cx('backdrop-item')}>
                                <div className={cx('backdrop-title')}>$130B</div>
                                <div className={cx('backdrop-description')}>Assets on platform</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('quickstart')}>
                    <div className={cx('quickstart-wrapper')}>
                        <div className={cx('quickstart-title')}>Get started in a few minutes</div>
                        <div className={cx('quickstart-subtitle')}>
                            Coinbase supports a variety of the most popular digital currencies.
                        </div>
                        <div className={cx('quickstart-steep')}>
                            <div className={cx('quickstart-steep-item')}>
                                <IconQuickSteep1 />
                                <div className={cx('quickstart-steep-title')}>Create an account</div>
                            </div>
                            <div className={cx('quickstart-steep-item')}>
                                <IconQuickSteep2 />
                                <div className={cx('quickstart-steep-title')}>Create an account</div>
                            </div>
                            <div className={cx('quickstart-steep-item')}>
                                <IconQuickSteep3 />
                                <div className={cx('quickstart-steep-title')}>Create an account</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('background-accent')}>
                    <div className={cx('background-accent-left')}>
                        <div className={cx('accent-left-content')}>
                            <h2 className={cx('left-accent-title')}>Earn up to $18 worth of crypto</h2>
                            <div className={cx('left-accent-description')}>
                                Discover how specific cryptocurrencies work — and get a bit of each crypto to try out
                                for yourself.
                            </div>
                            <Button className={cx('accent-btn')}>Start earning</Button>
                        </div>
                    </div>
                    <div className={cx('background-accent-right')}>
                        <img
                            src="https://assets.coinbase.com/assets/245d5698473dc72a.webp"
                            className={cx('right-accent-img')}
                            alt="Web3 Profiles"
                        />
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Home;
