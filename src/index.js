import { fileURLToPath } from "node:url"
import * as path from "node:path"
import express from "express"

const PORT = parseInt( process.env.PORT || 3_000 )
const __filename = fileURLToPath( import.meta.url )
const __dirname = path.dirname( __filename )

//

const app = express()

app.get( "/", ( _, res ) => res.send( { message: "OK" } ) )

//

app.listen( PORT, () => {

	console.info( `Server ready at: ${ PORT }` )
} )
