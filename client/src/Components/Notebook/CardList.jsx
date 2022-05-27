import React, { useState } from 'react';
import { Avatar, Typography, AppBar, Card, CardActions, CardHeader, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons'
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import useStyles from './styles'
import TwoStepDelete from './TwoStepDelete'

export default function CardList({ open, setOpen, setView, setClickedCard, displayCardList }) {

    return (
        <Grid container spacing={4}>
            {displayCardList.map((card) => {
                return (
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <br />
                            <CardHeader
                                action={
                                    <TwoStepDelete open={open} setOpen={setOpen} id={card._id} setView={setView} />
                                }
                                title={card.title}
                                subheader={new Date(card.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
                            />
                            <CardActionArea onClick={() => {
                                setView('Description')
                                setClickedCard(card)
                            }}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={card.photos[0]}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {card.summary}
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
