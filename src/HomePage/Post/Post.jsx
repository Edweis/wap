// @flow
import * as React from 'react';
import type { PostData } from 'resources/types/posts';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import './Post.scss';

const setFilterTag = (tag: string) => {
    console.info(`Setting ${tag} as filter`);
};

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
                        <Typography variant="h4" paragraph>
                            {props.content}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">
                            {props.tags.map(tag => (
                                <Chip
                                    key={tag}
                                    label={tag}
                                    onClick={() => setFilterTag(tag)}
                                />
                            ))}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="h6">
                        by <span className="underlined">{props.author}</span>
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}
