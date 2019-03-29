// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import Add from '@material-ui/icons/Add';
import type { PostData } from 'resources/type/posts';
import './PostCreator.scss';

type Props = {
    addTag: string => void,
    removeTag: string => void,
    setAuthor: string => void,
    setContent: string => void,
    submit: () => void,
    newPost: PostData,
};

function PostCreator(props: Props) {
    const [currentTag, setCurrentTag] = React.useState('');

    const changeContent = event => props.setContent(event.target.value);
    const changeAuthor = event => props.setAuthor(event.target.value);
    const changeCurrentTag = event => setCurrentTag(event.target.value);
    const removeTag = (tag: string) => props.removeTag(tag);
    const addTag = () => {
        if (currentTag != null && currentTag.trim() !== '') {
            props.addTag(currentTag);
            setCurrentTag('');
        }
    };
    const onTagKeyPress = e => e.key === 'Enter' && addTag();
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
                                fullWidth
                                rows="5"
                                variant="outlined"
                                value={props.newPost.content}
                                onChange={changeContent}
                            />
                        </Grid>
                        <Grid item container direction="column" xs={3}>
                            <Grid item>
                                <TextField
                                    label="Add tag"
                                    placeholder="Economic..."
                                    variant="outlined"
                                    value={currentTag}
                                    onChange={changeCurrentTag}
                                    onKeyPress={onTagKeyPress}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="Add tag"
                                                    onClick={addTag}
                                                >
                                                    <Add />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                {props.newPost.tags.map(tag => (
                                    <Chip
                                        key={tag}
                                        label={tag}
                                        onDelete={() => removeTag(tag)}
                                        variant="outlined"
                                    />
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Your name"
                            variant="outlined"
                            value={props.newPost.author}
                            onChange={changeAuthor}
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
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={props.submit}
                    >
                        Shoot
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

const mapState = state => ({ newPost: state.newPost });
const mapDispatch = ({ newPost }) => ({ ...newPost });
export default connect(
    mapState,
    mapDispatch,
)(PostCreator);
