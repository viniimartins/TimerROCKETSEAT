import { DefaultTheme } from './../../.history/src/@types/styled.d_20230511142952';
import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;


declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }
}
