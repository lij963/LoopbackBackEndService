'use strict';

module.exports = function(Idea) {
  Idea.beforeRemote('create', function(context, user, next) {
    context.args.data.userId =context.req.accessToken.userId;
    //context.args.data.test="test";
    //context.args.data.publisherId = context.req.accessToken.userId;
    next();
  });

};
