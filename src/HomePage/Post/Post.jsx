// @flow
import * as React from 'react';
import type { PostData } from 'resources/types/posts';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Post.scss';

export default function Post(props: PostData) {
    return (
        <Paper className="post-paper">
            <Grid container direction="column" alignItems="flex-end">
                <Grid
                    item
                    container
                    spacing={8}
                    direction="row"
                    wrap="nowrap"
                    justify="space-between"
                >
                    <Grid item>
                        <Typography variant="h4">{props.content}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">{props.tags}</Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="h4">{props.author}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}
