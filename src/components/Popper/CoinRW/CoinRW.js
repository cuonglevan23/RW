import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './CoinRW.module.scss';

const cx = classNames.bind(styles);

function CoinRW({ children }) {
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                <div className={cx('menu-body')}>
                    <h4 className={cx('header')}>Giỏ Hàng</h4>
                </div>
            </PopperWrapper>
        </div>
    );

    return (
        <Tippy interactive offset={[12, 8]} trigger="click" placement="bottom-end" render={renderResult}>
            {children}
        </Tippy>
    );
}

CoinRW.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default CoinRW;
