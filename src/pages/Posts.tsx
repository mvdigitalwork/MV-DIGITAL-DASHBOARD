import React, { useState } from 'react'

const Posts: React.FC = () => {
  const [caption, setCaption] = useState('')
  const [prompt, setPrompt] = useState('')
  const [preview, setPreview] = useState<string | null>(null)

  const generateCaption = () => {
    // UI mock: place a sample caption
    setCaption(`🎉 Special Offer: 20% off this week! Visit MV Digital Work. #LocalBusiness`)
  }

  const generateImage = () => {
    // UI placeholder preview image
    setPreview('https://placehold.co/600x600/png?text=AI+Image+Preview')
  }

  return (
    <div>
      <h1>Post Generator</h1>
      <p className="sub">Create caption & image with AI (UI mock now).</p>

      <div className="grid">
        <div className="card">
          <strong>Caption</strong>
          <textarea rows={6} value={caption} onChange={(e)=>setCaption(e.target.value)} style={{width:'100%', background:'transparent', border:'1px solid rgba(255,255,255,.06)', padding:12, borderRadius:12}} />
          <div style={{marginTop:12, display:'flex', gap:12}}>
            <button className="btn" onClick={generateCaption}>AI Generate Caption</button>
            <button className="btn">Save Draft</button>
          </div>
        </div>

        <div className="card">
          <strong>Image Prompt</strong>
          <textarea rows={4} value={prompt} onChange={(e)=>setPrompt(e.target.value)} style={{width:'100%', background:'transparent', border:'1px solid rgba(255,255,255,.06)', padding:12, borderRadius:12}} />
          <div style={{marginTop:12, display:'flex', gap:12}}>
            <button className="btn" onClick={generateImage}>AI Generate Image</button>
            <button className="btn">Upload</button>
          </div>
        </div>

        <div className="card">
          <strong>Preview</strong>
          <div className="placeholder">
            {preview ? <img src={preview} alt="preview" style={{maxWidth:'100%', borderRadius:12}} /> : 'Image Preview'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts
