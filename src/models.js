// @flow
import testPosts from './resources/data/posts';
import type { PostData } from './resources/type/posts';

const emptyPost: PostData = {
    tags: [],
    author: '',
    content: '',
};
export const newPost = {
    state: emptyPost,
    reducers: {
        removeTag(state, tag: string) {
            return { ...state, tags: state.tags.filter(t => t !== tag) };
        },
        addTag(state, tag: string) {
            if (state.tags.includes(tag)) return state;
            return { ...state, tags: state.tags.concat(tag) };
        },
        setContent(state, content: string) {
            return { ...state, content };
        },
        setAuthor(state, author: string) {
            return { ...state, author };
        },
        reset() {
            return emptyPost;
        },
    },
    effects: dispatch => ({
        submit(payload: undefined, rootState) {
            dispatch.posts.addPost(rootState.newPost);
            dispatch.newPost.reset();
        },
    }),
};

export const posts = {
    state: testPosts,
    reducers: {
        addPost(state, post: PostData) {
            const maxNumber = Math.max(...state.map(p => p.number));
            return state.concat({ ...post, number: maxNumber + 1 });
        },
    },
};
