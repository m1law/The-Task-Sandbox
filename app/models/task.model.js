export default (sequelize, Sequelize) => {
  const Task = sequelize.define("tasks", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isComplete: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });
  return Task;
};
