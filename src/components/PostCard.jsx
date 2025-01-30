import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from "react-router-dom"

const PostCard = ({$id, title, featuredImage, content}) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-400 rounded-xl'>
        <div className='relative inline-block h-auto w-full overflow-hidden rounded-xl bg-cover bg-center' style={{backgroundImage: `url(${appwriteService.getFilePreview(featuredImage, 300, 200)})`}}>
          <span className='absolute right-2 bottom-2 inline-flex rounded-full bg-black px-2 py-1 text-xs font-semibold uppercase leading-none text-white'>
            {content}
          </span>
        </div>
        <h2 className='text-center text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard