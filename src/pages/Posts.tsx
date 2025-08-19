import React, { useState } from 'react'

const Posts: React.FC = () => {
  const [caption, setCaption] = useState('')
  const [prompt, setPrompt] = useState('')
  const [preview, setPreview] = useState<string | null>(null)
  const [status, setStatus] = useState('')

  const dummyCaptions = [
    "🎉 Big Offer this week! Grab 20% off now 🚀 #MVdigital",
    "🌟 Unlock your business growth with MV Digital Work 💼✨",
    "🔥 Trending Now: AI-powered Marketing for Everyone 🤖",
    "💡 Boost your reach today with smart digital ads 📈"
  ]
  const dummyImages = [
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800"
  ]

  const generateCaption = () => {
    const random = dummyCaptions[Math.floor(Math.random() * dummyCaptions.length)]
    setCaption(random)
  }

  const generateImage = () => {
    const random = dummyImages[Math.floor(Math.random() * dummyImages.length)]
    setPreview(random)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // Dummy posting simulation
  const postToPlatform = (platform: string) => {
    setStatus(`✅ Posted successfully to ${platform}`)
    console.log(`Posted to ${platform}:`, { caption, preview })
    setTimeout(() => setStatus(''), 3000)
  }

  return (
    <div>
      <h1>Post Generator</h1>
      <p className="sub">Create caption & image with AI (static demo now).</p>

      <div className="grid">
        {/* Caption */}
        <div className="card">
          <strong>Caption</strong>
          <textarea
            rows={6}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            style={{
              width: '100%',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,.06)',
              padding: 12,
              borderRadius: 12,
            }}
          />
          <div style={{ marginTop: 12, display: 'flex', gap: 12 }}>
            <button className="btn" onClick={generateCaption}>
              AI Generate Caption
            </button>
            <button className="btn">Save Draft</button>
          </div>
        </div>

        {/* Image */}
        <div className="card">
          <strong>Image Prompt</strong>
          <textarea
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            style={{
              width: '100%',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,.06)',
              padding: 12,
              borderRadius: 12,
            }}
          />
          <div style={{ marginTop: 12, display: 'flex', gap: 12 }}>
            <button className="btn" onClick={generateImage}>
              AI Generate Image
            </button>
            <label className="btn" style={{ cursor: 'pointer' }}>
              Upload
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
            </label>
          </div>
        </div>

        {/* Preview */}
        <div className="card">
          <strong>Preview</strong>
          <div className="placeholder" style={{ textAlign: 'center' }}>
            {preview ? (
              <img
                src={preview}
                alt="preview"
                style={{ maxWidth: '100%', borderRadius: 12 }}
              />
            ) : (
              'Image Preview'
            )}
            {caption && (
              <p style={{ marginTop: 12, fontSize: 14, color: 'var(--muted)' }}>
                {caption}
              </p>
            )}
          </div>

          {/* Posting Buttons */}
          <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <button className="btn" onClick={() => postToPlatform('Google Business')}>
              Post to Google Business
            </button>
            <button className="btn" onClick={() => postToPlatform('Google Ads')}>
              Post to Google Ads
            </button>
            <button className="btn" onClick={() => postToPlatform('Instagram')}>
              Post to Instagram
            </button>
            <button className="btn" onClick={() => postToPlatform('Facebook')}>
              Post to Facebook
            </button>
            <button className="btn" onClick={() => postToPlatform('WhatsApp')}>
              Post to WhatsApp
            </button>
          </div>

          {status && (
            <div style={{ marginTop: 12, color: 'var(--accent)', fontSize: 14 }}>
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Posts
