import 'reflect-metadata'
import express,{response,Request, NextFunction} from 'express'
const app = express()
import { router } from './routes'

import '../../container'
import { CelebrateError } from 'celebrate'

app.use(express.json())

app.use(router)

app.use((err:Error,req:express.Request,res:express.Response,next:express.NextFunction)=>{
  if(err instanceof CelebrateError){
    return res.status(400).json({
      message:err.details.get('body')
    })
  }

  return res.status(500).json({
    status:'Error',
    message: `Internal Server Error:${err.message}`
  })

})

app.listen(5000,()=>{
  console.log("server is running")
})