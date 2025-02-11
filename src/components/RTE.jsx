import React from 'react'
import {Editor} from "@tinymce/tinymce-react"
import {Controller} from "react-hook-form"

const RTE = ({name, control, label, defaultValue=""}) => {
  return (
    <div className='w-full'>
      {label && <label className='block text-sm font-medium text-gray-700' htmlFor={name}>{label}</label>}
      <Controller
       name={name || "content"}
       control={control}
       render={({field: {onChange}}) => (
        <Editor
        initialValue={defaultValue}
        height={350}
        menubar={true}
        plugins={['lists', 'link', 'image', 'charmap', 'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount']}
        toolbar='undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat'
        contentStyle='body {font-family:Inter; font-size:16px}'
        init={{
          branding: false,
          content_style: 'body {font-family:Inter; font-size:16px}',
          content_css: 'dark',
        }}
        onEditorChange={onChange}
        />
       )}
      />
      </div>
  )
}

export default RTE