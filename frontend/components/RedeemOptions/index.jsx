import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { I18n } from '@shopgate/engage/components';
import connect from './connector';
import RedeemOptionItem from './components/RedeemOptionItem';

const optionWrapper = css({
  display: 'flex',
  width: '100%',
  flexFlow: 'row wrap',
}).toString();

const headline = css({
  fontSize: '22px',
  margin: '12px 16px',
});

/**
 * RedeemOptions component
 * @param {Object[]} redeemOptions Swell redemption option
 * @param {Object} settings Widget settings object
 * @return {JSX}
 */
const RedeemOptions = ({ redeemOptions, settings }) => {
  if (!redeemOptions.length) {
    return null;
  }

  const { backgroundColor, textColor, title } = settings || {};
  return (
    <div>
      <h2 className={headline}>
        {title || <I18n.Text string="swell.rewards" />}
      </h2>
      <div className={optionWrapper}>
        {
          redeemOptions.map(redeemOption => (
            <RedeemOptionItem
              key={`option-id-${redeemOption.id}`}
              redeemOption={redeemOption}
              backgroundColor={backgroundColor}
              textColor={textColor}
            />
          ))
        }
      </div>
    </div>
  );
};

RedeemOptions.propTypes = {
  redeemOptions: PropTypes.arrayOf(PropTypes.shape()),
  settings: PropTypes.shape(),
};

RedeemOptions.defaultProps = {
  redeemOptions: [],
  settings: {},
};

export default connect(RedeemOptions);
