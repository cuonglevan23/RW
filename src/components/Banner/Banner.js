import classNames from 'classnames/bind';
import { CoinBit, IconCoin } from '~/components/Icons/Icons';
import styles from './Banner.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function Banner() {
    return (
        <>
            <section className={cx('section-styles')}>
                <div className={cx('section-content')}>
                    <div className={cx('left-section-content')}>
                        <div className={cx('description')}>
                            <CoinBit className={cx('icon')} />
                            Jump start your portfolio
                            <IconCoin className={cx('icon')} />
                        </div>
                        <div className={cx('header')}>
                            <h1>Jump start your crypto portfolio</h1>
                        </div>
                        <div className={cx('text-element')}>
                            <h3>
                                Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started
                                today.
                            </h3>
                        </div>
                        <div className={cx('contain-email')}>
                            <form className={cx('email-form')}>
                                <div className={cx('input-container')}>
                                    <input
                                        aria-invalid="false"
                                        placeholder="Email address"
                                        aria-label="Email address"
                                        autoComplete="off"
                                        autoCorrect="off"
                                        autoCapitalize="off"
                                        spellCheck="false"
                                        name="email"
                                        className={cx('input-email')}
                                        defaultValue="Initial value"
                                    />
                                </div>
                                <div className={cx('button-container')}>
                                    <Button className={cx('button-email')}>Get started</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={cx('right-section-content')}>
                        <img
                            src="https://images.ctfassets.net/c5bd0wqjc7v0/1DrLQBxqDE4XmGXcmaGy7u/8acbd0322803e3190154169b028e9d20/freeMoney-1.5.webp"
                            className={cx('img-content')}
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;
