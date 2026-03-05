import { fileURLToPath } from "node:url"
import * as path from "node:path"

const PORT = parseInt( process.env.PORT || 3_000 )
const __filename = fileURLToPath( import.meta.url )
const __dirname = path.dirname( __filename )

console.log( __filename )
console.log( __dirname )
console.log( PORT )
