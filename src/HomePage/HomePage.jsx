// @flow
import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Post from './Post/Post';
import PostCreator from './PostCreator/PostCreator';
import type { PostData } from '/resources/type/posts';
import './HomePage.scss';

type Props = {
    posts: PostData[],
};

const sortPost = (a: PostData, b: PostData) => b.number - a.number;
function HomePage(props: Props) {
    const [filterTags, setFilterTags] = React.useState([]);
    const addFilterTag = tag =>
        !filterTags.includes(tag) && setFilterTags([...filterTags, tag]);
    const removeFilterTag = tag =>
        setFilterTags(filterTags.filter(t => tag !== t));
    return (
        <div className="root">
            <Grid container>
                <Grid item className="post-creator">
                    <PostCreator />
                </Grid>
                <Divider variant="middle" className="divider" />
                <Grid item>
                    {filterTags.map(tag => (
                        <Chip
                            key={tag}
                            label={tag}
                            onDelete={() => removeFilterTag(tag)}
                        />
                    ))}
                </Grid>
                <Grid item container className="posts" spacing={16}>
                    {props.posts
                        .filter(({ tags }) => {
                            return (
                                !filterTags.length ||
                                tags.some(tag => filterTags.includes(tag))
                            );
                        })
                        .sort(sortPost)
                        .map(({ content, tags, number, author }) => (
                            <Grid item key={content + author}>
                                <Post
                                    key={content + author}
                                    content={content}
                                    tags={tags}
                                    number={number}
                                    author={author}
                                    addFilterTag={addFilterTag}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Grid>
        </div>
    );
}

const mapState = state => ({ posts: state.posts });
const mapDispatch = ({ posts }) => ({ ...posts });
export default connect(
    mapState,
    mapDispatch,
)(HomePage);
