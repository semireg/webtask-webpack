// @flow

import Webtask from 'webtask-tools';
import app from './src';

module.exports = Webtask.fromExpress(app);
