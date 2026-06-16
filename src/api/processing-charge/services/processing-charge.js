'use strict';

/**
 * processing-charge service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::processing-charge.processing-charge');
