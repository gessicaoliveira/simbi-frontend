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
    SvgIcon
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';


const truncateTitle = (title, wordLimit) => {
  const words = title.split(' ');
  if (words.length <= wordLimit) return title;
  return words.slice(0, wordLimit).join(' ') + '.';
};

export const ProjectCard = ({ id, name, city, state, value_approved, value_captured, content }) => {
  const [isFavorited, setIsFavorited] = React.useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <ThemeProvider theme={theme}>
      <Card variant="outlined">
        <Box sx={{ m: '20px 20px 0 20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
          <Typography variant="rouanet">
            ROUANET
          </Typography>
          <Typography sx={{ fontWeight: 'bold' }}>
            {id} {truncateTitle(name, 5)}
          </Typography>
          <Typography variant="cityState">
            {city} • {state}
          </Typography>
        </Box>
        <CardContent sx={{ flex: 'auto', overflow: 'hidden', pb: 0 }}>
          <Typography variant="content">
            {content}
          </Typography>
        </CardContent>
        <List sx={{ display: 'flex', flexDirection: 'row', pt: '10px', ml: '15px'}}>
          <ListItem sx={{ width: '80px', flexDirection: 'column', p: 0, alignItems: 'flex-start' }}>
            <ListItemText primary="Aprovado" />
            <ListItemText primary="Captado" />
          </ListItem>
          <ListItem sx={{ width: '150px', flexDirection: 'column', p: 0 }}>
            <ListItemText primary={value_approved} primaryTypographyProps={{ fontWeight: 'bold' }} />
            <ListItemText primary={value_captured} primaryTypographyProps={{ fontWeight: 'bold' }} />
          </ListItem>
        </List>
        <CardActions>
          <Button variant="contained" color="gray">
            ADICIONAR
          </Button>
          <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
            <SvgIcon sx={{
                width: 40,
                height: 40,
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={isFavorited ? "red" : "none"}
                stroke={isFavorited ? "red" : "#aaa"}
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </SvgIcon>
          </IconButton>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};
