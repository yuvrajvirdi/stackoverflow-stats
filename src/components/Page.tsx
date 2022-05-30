import axios from 'axios';
import React, { useState, useRef } from 'react';
import { themes } from '../themes/themes';
import PageButton from './PageButton';
import Popup from './Popup';
import { useStyles } from './Styles';
import { Grid, Paper, TextField, MenuItem, Typography } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Done  from '@material-ui/icons/Done';

const URL = 'https://stackoverflow-stats.vercel.app';

function Page(): JSX.Element {
    // styles 
    const classes = useStyles();

    // query handling
    const queryRef = useRef('');
    const getValue = (ref:React.MutableRefObject<string>): string => {
        const curr = (ref.current as unknown) as HTMLTextAreaElement;
        return curr.value;
    };

    // theme handling
    const [theme, setTheme] = useState('Dark');
    const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        setTheme(target.value);
    }

    // status
    const [textStatus, setTextStatus] = useState('');

    // button states
    const [created, setCreated] = useState(false);
    const [copiedImg, setCopiedImg] = useState(false);
    const [copiedMd, setCopiedMd] = useState(false);

    // svg state
    const [svg, setSvg] = useState('');

    // reset states
    const resetStates = () => {
        setCopiedImg(false);
        setCopiedMd(false);
        setSvg('');
        setCreated(false);
    };

    // create btn
    const handleCreateOnclick = () => {
        resetStates();
        setTextStatus('Creating image...');

        const userId = getValue(queryRef);

        // no query
        if (userId === ''){
            setTextStatus('Enter an ID');
            return;
        }
        
        axios.get(`${URL}/api?userId=${userId}&theme=${theme}`)
            .then((response) => {
                setSvg(response.data as string)
                setCreated(true)
                setTextStatus('')
            })
            .catch((error) => {
                setCreated(false)
                setTextStatus(`Error occured: ${error}`)
            })
    };

    // copy svg
    const copySvgOnClick = () => {
        const userId = getValue(queryRef);
        navigator.clipboard.writeText(
            `${URL}/api?userId=${userId}&theme=${theme}`,
        )
        setCopiedImg(true);
    };

    // copy md link
    const copyMdOnClick = () => {
        const userId = getValue(queryRef);
        const svgUrl = `${URL}/api?userId=${userId}&theme=${theme}`;
        const redirUrl = `https://stackoverflow.com/users/${userId}`;
        navigator.clipboard.writeText(
            `[![Stackoverflow stats](${svgUrl})](${redirUrl})`,
        )
        setCopiedMd(true);
    }

    // page tsx element
    return (
        <Grid item>
            <Paper elevation={12} className={classes.paper}>

                <div className={classes.col}>
                    <Typography
                        color='primary'
                        align='center'
                        variant='h1'
                        className={classes.title}
                    >
                        Stack Overflow Stats
                    </Typography>
                    <Popup />
                    
                </div>

                <div className={classes.row}>
                    <TextField
                        fullWidth
                        autoComplete='off'
                        label='User ID'
                        placeholder='User ID'
                        inputRef={queryRef}
                        InputLabelProps={{
                            shrink: true,
                            className: classes.textField,
                        }}
                        InputProps={{
                            className: classes.textInput,
                        }}
                    />
                    <TextField
                        fullWidth
                        select
                        label='Theme'
                        value={theme}
                        onChange={handleThemeChange}
                        InputLabelProps={{
                            className: classes.textField,
                        }}
                        InputProps={{
                            className: classes.textInput,
                        }}
                    >
                        {Object.keys(themes).map((themeX) => {
                            const key = themeX as keyof typeof themes
                            return (
                                <MenuItem key={themes[key].value} value={themes[key].value}>
                                    {themes[key].value}
                                </MenuItem>
                            )
                        })}
                    </TextField>
                </div>
                <div className={created ? classes.successText : classes.errorText}>
                    {textStatus}
                </div>
                <div className={classes.row}>
                    <PageButton
                        text='Create'
                        icon={<CreateIcon/>}
                        colour='primary'
                        onClick={handleCreateOnclick}
                    />
                </div>
                <div dangerouslySetInnerHTML={{ __html: svg }} />
                {created && (
                    <div className={classes.row}>
                        <PageButton
                            text={copiedImg ? 'Copied' : 'Copy SVG URL'}
                            icon={copiedImg ? <Done /> : <FileCopyIcon />}
                            colour='primary'
                            onClick={copySvgOnClick}
                        />
                        <PageButton
                            text={copiedMd ? 'Copied' : 'Copy Markdown'}
                            icon={copiedMd ? <Done /> : <FileCopyIcon />}
                            colour='primary'
                            onClick={copyMdOnClick}
                        />
                    </div>
                )}
            </Paper>
        </Grid>
    )

};

export default Page;
