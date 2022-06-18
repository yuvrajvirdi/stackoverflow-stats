import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { ButtonProps } from '../interfaces/ButtonProps';

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(1),
        textTransform: 'none',
    }, 
}));

function PageButton({ text, icon, colour, onClick }: ButtonProps): JSX.Element {
    const classes = useStyles();
    return (
        <Button
            variant="contained"
            color={colour}
            className={classes.button}
            startIcon={icon}
            onClick={onClick}
        >
            {text}
        </Button>
    )
};

export default PageButton;

