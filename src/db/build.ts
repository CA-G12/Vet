import sequelize from './index'
const a = async () => {
  await sequelize.sync({ force: true })
}

a()
