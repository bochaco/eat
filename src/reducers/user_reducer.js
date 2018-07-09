import { TYPES } from '../actions/user_actions';

const initialState = {
    webId : {},
    posts : [
    ],
    inbox : [
    ]

};

export default ( state = initialState, action ) =>
{
    const { payload } = action;

    switch ( action.type )
    {
        case TYPES.SET_CURRENT_USER:
        {
            console.log("Let's get the posts then")
            const newUser = { ...payload };
            return { ...state, webId: newUser };
        }
        case TYPES.ADD_POST:
        {
            const oldPosts = state.posts;
            console.log("Let's update list of posts")
            const postArray = [...oldPosts, payload];
            console.log("POSTS:", postArray)
            return { ...state, posts: postArray };
        }

        default:
            return state;
    }
};
