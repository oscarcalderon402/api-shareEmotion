const boom = require('@hapi/boom');

function validatorHandler(schema, property, image) {
  return (req, res, next) => {
    let data = req[property];
    if (!!image) {
      const _data = JSON.parse(JSON.stringify(req.body));
      data = JSON.parse(_data.body);
    }

    const { error } = schema.validate(data);
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
