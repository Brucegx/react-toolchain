
import connection from './connection';
import Sequelize from 'sequelize';

const ActivatePreset = connection.define('activatePreset', {
  user: {
    type: Sequelize.STRING,
    primaryKey: true,
  },

  preset: {
    type: Sequelize.UUID,
    primaryKey: true,
  },
});

export default ActivatePreset;
