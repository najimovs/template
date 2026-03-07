import { fileURLToPath } from "node:url"
import * as path from "node:path"
import express from "express"
import ejs from "ejs"

const PORT = parseInt( process.env.PORT || 3_000 )
const __filename = fileURLToPath( import.meta.url )
const __dirname = path.dirname( __filename )

const images = [
	{
		imgURL: "/images/pic01.jpg",
	},
	{
		imgURL: "/images/pic02.jpg",
	},
	{
		imgURL: "/images/pic03.jpg",
	},
	{
		imgURL: "/images/pic04.jpg",
	},
	{
		imgURL: "/images/pic05.jpg",
	},
	{
		imgURL: "/images/pic06.jpg",
	},
	{
		imgURL: "/images/pic07.jpg",
	},
	{
		imgURL: "/images/pic08.jpg",
	}
]

//

const app = express()

app.use( express.static( path.join( __dirname, "..", "public" ) ) )

app.engine( "html", ejs.renderFile )
app.set( "view engine", "html" )

app.set( "views", path.join( __dirname, "views" ) )

app.get( "/", ( _, res ) => res.render( "index" ) )

app.get( "/elements", ( _, res ) => res.render( "elements", { images } ) )
app.get( "/left-sidebar", ( _, res ) => res.render( "left-sidebar" ) )
app.get( "/right-sidebar", ( _, res ) => res.render( "right-sidebar" ) )
app.get( "/no-sidebar", ( _, res ) => res.render( "no-sidebar" ) )

//

app.listen( PORT, () => {

	console.info( `Server ready at: ${ PORT }` )
} )
