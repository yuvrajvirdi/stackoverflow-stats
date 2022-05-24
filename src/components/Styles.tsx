import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    paper: {
        height: '100%',
        width: '50%',
        margin: 'auto',
        marginTop: '55px',
        backgroundColor: theme.palette.info.light,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: theme.spacing(5),
        fontWeight: 600,
    },
    text: {
        fontSize: theme.spacing(2),
    },
    col: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
    },
    textField: {
        color: theme.palette.primary.main,
    },
    textInput: {
      color: 'black',
    },
    successText: {
        color: theme.palette.primary.main,
    },
    errorText: {
        color: theme.palette.secondary.main,
    },
}));