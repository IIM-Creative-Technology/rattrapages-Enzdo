import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const urlApi = "http://localhost:3001/dbApiMoogoo/restaurant/";

class App extends Component {
  state = {
    restaurants: []
  };

  componentDidMount() {
    fetch(urlApi)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ restaurants: result });
        console.log(result)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { restaurants } = this.state;

    return (
      <div className='flex flex-col items-center justify-items-center w-full'>
        <div className='text-4xl py-10'>
          <h1>Moogoo restaurant</h1>
        </div>
        <div className='py-6 w-full flex flex-col items-center'>
          {restaurants.map((restaurant) => (
          <Card className="my-4 w-10/12" key={restaurant.id} sx={{ }}>
            <CardContent>
              <Typography gutterBottom className='text-5xl' variant="h5" component="div">
                {restaurant.nom}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {restaurant.adresse}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Code postal : {restaurant.codepostal}</Button>
              <Button size="small">Nombre de place : {restaurant.nombredeplace}</Button>
            </CardActions>
          </Card>
        ))}
        </div>
        
      </div>
    );
  }
}

export default App;
