import ShowBlog from '../components/ShowBlog'
import AddBlog from '../components/AddBlog'
import SingleBlog from '../components/SingleBlog'
import Home from '../components/Home';
export default [
    {path:'/show',component:ShowBlog},
    {path:'/add',component:AddBlog},
    {path:'/blog/:id',component:SingleBlog},
    {path:'/',component:Home},
]