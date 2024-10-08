/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import appwriteService from '../../appwrite/config'

function PostCard({$userid, title, featuredimage}) {
  return (
    <Link to={`/post/${$userid}`}>
    <div className='w-full  rounded-xl p-4'>
        <div className='w-full justify-center mb-4 '>
            <img className='rounded-xl' src={appwriteService.getFilePreview(featuredimage)} alt={title}/>
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
    </div>
    </Link>
  )
}

export default PostCard