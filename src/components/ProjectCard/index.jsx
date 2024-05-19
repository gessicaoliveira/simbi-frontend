import * as React from 'react';
import {
    Box,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemText,
    SvgIcon }
from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
        },
      },
    },
  },
});

const truncateTitle = (title, wordLimit) => {
  const words = title.split(' ');
  if (words.length <= wordLimit) return title;
  return words.slice(0, wordLimit).join(' ') + '.';
};

export const ProjectCard = ({ title, body, id }) => (
  <ThemeProvider theme={theme}>
    <Card
      variant="outlined"
      sx={{
        width: 400,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          m: '20px 20px 0 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '10px',
        }}
      >
        <Typography
          sx={{
            backgroundColor: '#fff2db',
            color: '#dcb060',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.9rem',
            fontWeight: '600',
          }}
        >
          ROUANET
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }}>
          {id} {truncateTitle(title, 5)}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.gray.contrastText,
            fontSize: '0.875rem',
          }}
        >
          São Paulo • SP
        </Typography>
      </Box>
      <CardContent
        sx={{
          flex: '1 1 auto',
          overflow: 'hidden',
          pb: 0
        }}
      >
        <Typography
          sx={{
            color: theme.palette.gray.contrastText,
            fontSize: '0.875rem',
            textAlign: 'justify',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {body}
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'row', paddingTop: '10px' }}>
          <ListItem sx={{ width: '80px', flexDirection: 'column', p: 0, alignItems: 'flex-start'}}>
            <ListItemText primary="Aprovado" />
            <ListItemText primary="Captado" />
          </ListItem>
          <ListItem sx={{ width: '150px', flexDirection: 'column', p: 0 }}>
            <ListItemText
              primary="R$ 100.000,00"
              primaryTypographyProps={{ fontWeight: 'bold'}}
            />
            <ListItemText
              primary="R$ 300.000,00"
              primaryTypographyProps={{ fontWeight: 'bold' }}
            />
          </ListItem>
        </List>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: '16px',
        }}
      >
        <Button sx={{ width: '300px', fontSize: '15px', boxShadow: 0 }} variant="contained" color="gray">
          ADICIONAR
        </Button>
        <IconButton aria-label="add to favorites">
          <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </SvgIcon>
        </IconButton>
      </CardActions>
    </Card>
  </ThemeProvider>
);
