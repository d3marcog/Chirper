import React from 'react'
import MadeWithLove from 'react-made-with-love'
import { withStyles } from '@material-ui/core/styles'

const styles = {
	root: {
		textAlign: 'center',
		marginTop: 20
	}
}

const Footer = ({ classes }) => (
	<div className={classes.root}>
		<MadeWithLove 
			by="DeMarco Grayson"
			emoji
			link="https://github.com/d3marcog"
		/>
	</div>
)


export default withStyles(styles)(Footer)