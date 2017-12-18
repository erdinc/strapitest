'use strict';

/**
 * Transaction.js controller
 *
 * @description: A set of functions called "actions" for managing `Transaction`.
 */

module.exports = {

  /**
   * Retrieve transaction records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.transaction.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a transaction record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    const data = await strapi.services.transaction.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an transaction record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.transaction.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an transaction record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.transaction.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an transaction record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.transaction.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
