import ejs from "ejs"

const template = `

	<html>
		<head>
			<title>
				<%= title %>
			</title>
		</head>
		<body>
		</body>
	</html>
`

console.log( ejs.render( template, { title: "Homepage" } ) )
