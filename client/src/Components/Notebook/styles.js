import { makeStyles } from '@material-ui/core/styles'
//useStyles here is a hook
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary,
    padding: '6px 0px 46px'
  },
  icon: {
    marginRight: '20px',
  },
  buttons: {
    marginTop: '40px'
  }
}))

export default useStyles;