import {
    createTheme
} from "@mui/material/styles";

export const theme = createTheme({
    typography: {
        fontFamily: [
            "Montserrat",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
    palette: {
        primary: {
            main: "#ff791f",
            contrastText: "#fff"
        },
        error: {
            main: "#FF647C",
            contrastText: "#fff"
        },
        secondary: {
            main: "#55C763",
            contrastText: "#fff"
        },
        cancel: {
            main: "#818181",
            contrastText: "#fff"
        },
        grey: {
            main: "#E9E9E9",
            contrastText: "#565771"
        },
        yellow: {
            main: "#FFD93D"
        },
        blue: {
            main: "#457EFF",
            contrastText: "#fff"
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: "0px 3px 3px -3px rgb(0 0 0 / 0%), 0px 3px 0px 1px rgb(0 0 0 / 0%), 0px 3px 6px 2px rgb(0 0 0 / 3%)",
                },
            },
        },
    },
});