import { ThemeType, themes, unknownTheme } from '../themes/themes';

export const fetchTheme = (theme: string): ThemeType => {
    if (Object.prototype.hasOwnProperty.call(themes, theme)) {
        return themes[theme as keyof typeof themes];
    } else {
        return unknownTheme;
    }
}