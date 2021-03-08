import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 220,
  },
});

const Country = (props) => {
  //   console.log(props.country);
  const countryDetails = props.country;
  const { name, flag } = countryDetails;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={flag} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/country/${name}`}>More Information</Link>
        </Button>
      </CardActions>
    </Card>
  );
  // return (
  //   <>
  //     <div className="country">
  //       <div className="img">
  //         <img src={flag} alt={name} />
  //       </div>
  //       <h2 className="mt-2">
  //         <Link to={`/country/${name}`}>{name}</Link>
  //       </h2>
  //       <button
  //         onClick={() => props.handleMoreInfo(name)}
  //         className=" button btn-primary mt-2"
  //       >
  //         <Link to={`/country/${name}`}>More Information</Link>
  //       </button>
  //     </div>
  //   </>
  // );
};

export default Country;
