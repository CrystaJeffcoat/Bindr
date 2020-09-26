import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './styles.css';

function TextBox({ ...props }) {
    const bull = <span className={'bullet'}>•</span>;

    return (
        <Card className={'root'}>
            <CardContent>
                <Typography className={'title'} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography className={'pos'} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
export default TextBox;
