import { Interface } from "readline";

interface IThemeDetail {
    primary:string,
    secondary:string,
    accent:string,
}

interface ITheme {
    colors:IThemeDetail
};

const theme:ITheme ={
    colors:{
        primary:"#0468BF",
        secondary:"#049DBF",
        accent:"#ffffff"
    }
}

export default theme;