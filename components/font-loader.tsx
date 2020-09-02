import React, { useEffect } from 'react'

const FontLoader = () => {
  useEffect(() => {
    import('webfontloader').then(WebFont => {
      WebFont.load({
        google: {
          families: ['Noto Sans JP:100']
        }
      })
    })
  }, [])
  return null
}

export default FontLoader
