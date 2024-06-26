import { ReactNode, useMemo } from "react";
import { Theme } from "@emotion/react";
import {
  createTheme,
  dialogContentClasses,
  ThemeProvider as MuiThemeProvider,
  useTheme as useEmotionTheme,
} from "@mui/material";
import "./index.css";

function ThemeProvider(props: { children: ReactNode }) {
  // prop destruction
  const { children } = props;

  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  const theme = useMemo(() => {
    const muiTheme = createTheme({
      components: {
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              padding: "8px 12px",
              border: "2px solid #B3BAC5",
              borderRadius: "8px",
              "&.Mui-focused": {
                borderColor: "#AFAFFF",
              },
              "&.Mui-disabled": {
                backgroundColor: "#F4F6F8",
                border: "2px solid #F1F3F0",
              },
              "&.Mui-error": {
                borderColor: "#FF2626",
              },
            },
            input: {
              fontSize: "14px",
              fontWeight: 500,
              height: "24px",
              padding: "0",
              verticalAlign: "middle",
            },
            notchedOutline: {
              border: "none",
            },
          },
        },
        MuiInputAdornment: {
          styleOverrides: {
            root: {
              marginRight: "0",
            },
          },
        },
        MuiFormHelperText: {
          styleOverrides: {
            root: {
              margin: "0",
              color: "#5E6C83",
            },
          },
        },
        MuiIconButton: {
          defaultProps: {
            disableRipple: true,
          },
          styleOverrides: {
            root: {
              padding: "0",
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              padding: "4px 12px",
            },
            contained: {
              backgroundColor: "rgba(85,85,255,0.5)",
              border: "3px solid #AFAFFF",
              boxShadow: "none",
              ":hover": {
                backgroundColor: "rgba(85,85,255,0.4)",
                boxShadow: "none",
              },
            },
            outlined: {
              padding: "8px 12px",
              border: "2px solid #B3BAC5",
              borderRadius: "8px",
              "&.Mui-focused": {
                borderColor: "#AFAFFF",
              },
              "&.Mui-disabled": {
                backgroundColor: "#F4F6F8",
                border: "2px solid #F1F3F0",
              },
              "&.Mui-error": {
                borderColor: "#FF2626",
              },
            },
          },
        },
        MuiMenuItem: {
          defaultProps: {
            disableRipple: true,
          },
        },
        MuiDialog: {
          styleOverrides: {
            paper: {
              borderRadius: "16px",
              boxShadow: "20px 16px 0px #000000",
            },
          },
        },
        MuiDialogTitle: {
          styleOverrides: {
            root: {
              padding: "24px",
            },
          },
        },
        MuiDialogContent: {
          styleOverrides: {
            root: {
              padding: "40px 60px",
            },
          },
        },
        MuiDialogActions: {
          styleOverrides: {
            root: {
              padding: "40px 60px",
              // https://github.com/mui/material-ui/blob/b265431f9a32ea726c5227821126fbc6424117d5/packages/mui-material/src/DialogContent/DialogContent.js#L41
              [`.${dialogContentClasses.root} + &`]: {
                paddingTop: "0px",
              },
            },
          },
        },
      },
      spacing: 4,
    });
    return {
      ...muiTheme,
      palette: {
        ...muiTheme.palette,
      },
    };
  }, []);

  // effects
  // handlers

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export const useTheme = (): [Theme] => {
  return useEmotionTheme();
};

//HACK: 일단 mui의 theme대신 emotion의 theme을 사용하도록 한다.
export { ThemeProvider, Theme };

export * from "./media-query";
