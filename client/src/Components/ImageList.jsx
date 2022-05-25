import React, { useState } from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons'
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import useStyles from './styles'

export default function ImageList({displayPhotoList}) {
    
    return (
        <Grid container spacing={4}>
            {displayPhotoList.map((photo)=>{
                const text="To be updated";
                return (
                    <Grid item xs={12} sm={6} md={4}>
                        <Card onClick={()=>text="changed"} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={photo}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {text}
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    );

}

<Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
    <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
        </Typography>
    </CardContent>
    </CardActionArea>
</Card>