import { asClass, asValue, createContainer } from 'awilix';
import models from '../database/models';
import basicRepo from '../database/repository/basic.repository';

const container = createContainer();

container.register({
  models: asValue(models),
  basicRepo: asClass(basicRepo).scoped()
});

export default container;