import { defaultTheme } from './../../.history/src/styles/themes/default_20230511132220';
import "styled-components";
import { DefaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;


declare module "styled-components' {
    export interface DefaultTheme
}