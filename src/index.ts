"use strict";

import { Callback, Context, Handler } from 'aws-lambda';
import { pathOr } from 'ramda';

export const handler: Handler = (event, context: Context, callback: Callback) => {
    console.log('externals test => ' + pathOr('good', ['noneExisting'], {}));

    callback(null, 'good stuff');
}
