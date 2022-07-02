import { makeStyles } from '@material-ui/core/styles'
//useStyles here is a hook
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary,
    padding: '6px 0px 46px'
  },
  nbContainer: {
    backgroundColor: theme.palette.primary,
    padding: '6px 0px 46px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  icon: {
    marginRight: '20px',
  },
  buttons: {
    marginTop: '40px'
  },
  outerGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  nbFixedHeader: {
    width: '100%',
    marginTop: '0px',
    paddingBottom: '20px',
    paddingTop: '80px',
    paddingLeft: '10%',
    paddingRight: '10%',
    background: '#fafafa',
    position: 'fixed',
    zIndex: '1'
  },
  notebookListFixedHeader: {
    background: "#fafafa",
    position: 'fixed',
    zIndex: '1',
    width: '100%'
  },
  flexRight: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  createEntryButton: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  createEntryBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    background: '#fafafa',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },
  editNotebookBox: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    background: '#ededed',
    boxShadow: 24,
    p: 4,
    padding: '20px',
    paddingTop: '30px'
  },
  deleteNotebookBox: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    background: '#ededed',
    border: '4px solid red',
    boxShadow: 24,
    p: 4,
    padding: '20px',
  }
}))

export default useStyles;