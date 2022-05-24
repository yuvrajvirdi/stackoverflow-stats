export type ThemeType = {
    value: string
    backgroundColour: string
    usernameColour: string
    reputationColour: string
    reachedColour: string
    answersColour: string
    questionsColour: string
    badgesColour: string
    percentileColour: string
}

export const unknownTheme = {
    value: 'unknown',
    backgroundColour: '',
    usernameColour: '',
    reputationColour: '',
    reachedColour: '',
    answersColour: '',
    questionsColour: '',
    badgesColour: '',
    percentileColour: '',
}

export const defaultTheme = {
    value: 'Dark', 
    backgroundColour: '#121212',
    usernameColour: '#f0610e',
    reputationColour: '#4958e3',
    reachedColour: '#49e36a',
    answersColour: '#d341f0',
    questionsColour: '#f041a1',
    badgesColour: '#f70a0a',
    percentileColour: '#f73378',
}

export const themes = {
    dark: defaultTheme,
    light: {
        value: 'Light',
        backgroundColour: '#f9feff',
        usernameColour: '#f58f0a',
        reputationColour: '#119af5',
        reachedColour: '#0af59f',
        answersColour: '#c359f7',
        questionsColour: '#ed66db',
        badgesColour: '#f05151',
        percentileColour: '#ed6195',
    }
}