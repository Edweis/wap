// @flow
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import './PostCreator.scss';

export default function Post() {
    return (
        <Paper className="post-paper">
            <Grid container justify="center">
                {/* title */}
                <Grid item>
                    <Typography variant="h4">
                        Shoot your best thought
                    </Typography>
                </Grid>
                {/* form - it has the exact same layout as <Post>. TODO: merge them */}
                <Grid
                    item
                    container
                    direction="column"
                    alignItems="flex-end"
                    spacing={32}
                >
                    <Grid
                        item
                        container
                        spacing={8}
                        direction="row"
                        wrap="nowrap"
                        justify="space-between"
                    >
                        <Grid item className="fullwidth-textfield">
                            <TextField
                                label="Content"
                                placeholder="Koala freedom in Asia: an economical breakthrough..."
                                multiline
                                fullwidth
                                rows="5"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Add tag"
                                placeholder="Economic..."
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    <Grid item wrap="nowrap">
                        <TextField
                            label="Your name"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        by
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
                {/* validation */}
                <Grid item>
                    <Button variant="contained" color="primary">
                        Shoot
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}
