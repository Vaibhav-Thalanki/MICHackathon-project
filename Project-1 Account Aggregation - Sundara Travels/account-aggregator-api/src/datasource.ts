import { DataSource } from "typeorm"
require('dotenv').config()

const appDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'accounts_aggregator',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}']
})

appDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })

export default appDataSource