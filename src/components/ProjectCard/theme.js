import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      gray: {
        main: '#f7f7f7',
        contrastText: '#aaa',
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '5px',
            background: '#fff',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            transition: 'transform 100ms ease-in-out',
            minHeight: 350,
            width: 400,
            display: 'flex',
            flexDirection: 'column',
          },
        },
      },
      MuiCardActions: {
        styleOverrides: {
          root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            width: '300px',
            fontSize: '1rem',
            boxShadow: 'none',
          },
        },
      },
      MuiTypography: {
        variants: [
          {
            props: { variant: 'rouanet' },
            style: {
              backgroundColor: '#fff2db',
              color: '#dcb060',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: '600',
            },
          },
          {
            props: { variant: 'cityState' },
            style: {
              color: '#aaa',
              fontSize: '1rem',
            },
          },
          {
            props: { variant: 'content' },
            style: {
              color: '#aaa',
              fontSize: '16px',
              textAlign: 'justify',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
          },
        ],
      },
    },
  });

  export default theme;
