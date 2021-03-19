import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  shadows: ["none"],
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export const api = {
  'url': 'api.example.com',
  'defaultSortType': 'desc', // desc, asc
  'defaultDateFrom': '2020-01-01', //YYYY-MM-DD
  'defaultCurrentPage': 1,
  'defaultPerPage': 30
}
