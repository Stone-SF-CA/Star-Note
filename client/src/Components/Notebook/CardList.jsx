import React, { useState } from 'react';
import { Avatar, Typography, AppBar, Card, CardActions, CardHeader, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons'
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import useStyles from './styles'
import TwoStepDelete from './TwoStepDelete'

export default function CardList({ selectedList, setSelectedList, selectAll, open, setOpen, setView, setClickedCard, displayCardList }) {
    // const [selectedList, setSelectedList] = useState([])
    const handleSelect = (e, card) => {

        if (selectedList.includes(card._id)) {
            e.target.checked = false
            let i = selectedList.indexOf(card._id)
            let copy = selectedList.slice(0, selectedList.length - 1)
            copy.splice(i, 1)
            setSelectedList(copy)
            return;
        }
        setSelectedList([...selectedList, card._id])
        let obj = [...selectedList, card._id]
    }
    return (
        <Grid container spacing={4}>
            {displayCardList.map((card) => {
                return (
                    <Grid item xs={12} sm={6} md={4}>
                        <Card style={{ height: '100%' }} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <br />
                            <CardHeader
                                action={
                                    selectAll ? (
                                        <input onClick={(e) => handleSelect(e, card)} type='radio' style={{ width: '1.15em', height: '1.15em' }}></input>
                                    )
                                        : <TwoStepDelete open={open} setOpen={setOpen} id={card._id} setView={setView} key={card._id} />
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
