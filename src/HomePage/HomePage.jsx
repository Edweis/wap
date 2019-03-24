// @flow
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Post from './Post/Post';
import PostCreator from './PostCreator/PostCreator';
import postData from '../resources/data/posts';
import './HomePage.scss';

// <PostCreator />
// <Post />
export default function HomePage() {
    return (
        <div className="root">
            <Grid container>
                <Grid item className="post-creator">
                    <PostCreator />
                </Grid>
                <Grid item container className="posts" spacing={16}>
                    {postData.map(({ content, tags, number, author }) => (
                        <Grid item key={content + author}>
                            <Post
                                key={content + author}
                                content={content}
                                tags={tags}
                                number={number}
                                author={author}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    );
}
