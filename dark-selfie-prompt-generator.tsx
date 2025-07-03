// @ts-ignore - React loaded via CDN in browser
import React, { useState } from 'react';

const DarkSelfiePromptGenerator = () => {
  const [formData, setFormData] = useState({
    gender: 'neutral',
    orientation: 'landscape',
    background: '',
    lighting: '',
    tshirt: 'navy blue',
    selfie_style: 'one_handed'
  });
  
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [copyMessage, setCopyMessage] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const promptTemplates = {
    neutral: {
      landscape: {
        one_handed: `Transform this passport photo into a natural selfie: Person wearing a casual {tshirt} t-shirt, taking a front-facing camera selfie with one arm extended but phone not visible in frame, looking directly at camera with a subtle natural smile. Shot in landscape orientation zoomed out to show head centered with extensive space around all sides. Full torso and shoulders visible with significant background space above, below, and around subject. Background: {background}. Lighting: {lighting}. Authentic front-facing smartphone camera quality with slight motion blur, natural skin imperfections, uneven lighting, slightly off-center composition. Include realistic flaws: minor focus issues, natural skin texture with pores and slight blemishes, casual messy hair, wrinkled clothing, candid unposed expression. Other arm relaxed at side, natural one-handed selfie pose. Maintain exact facial features, bone structure, and identity from reference image. Raw unfiltered smartphone selfie aesthetic with imperfect framing and natural shadows.`,
        
        two_handed: `Transform this passport photo into a natural selfie: Person wearing a casual {tshirt} t-shirt, taking a front-facing camera selfie with both arms visible in frame, looking directly at camera with a subtle natural smile. Shot in landscape orientation zoomed out to show head centered with extensive space around all sides. Full torso and shoulders visible with significant background space above, below, and around subject. Background: {background}. Lighting: {lighting}. Authentic front-facing smartphone camera quality with slight motion blur, natural skin imperfections, uneven lighting, slightly off-center composition. Include realistic flaws: minor focus issues, natural skin texture with pores and slight blemishes, casual messy hair, wrinkled clothing, candid unposed expression. Both arms extended naturally showing hands and forearms in frame. Maintain exact facial features, bone structure, and identity from reference image. Raw unfiltered smartphone selfie aesthetic with imperfect framing and natural shadows.`
      },
      
      portrait: {
        one_handed: `Transform this passport photo into a natural selfie: Person wearing a casual {tshirt} t-shirt, taking a front-facing camera selfie with one arm extended but phone not visible in frame, looking directly at camera with a subtle natural smile. Shot in portrait orientation zoomed out to show head centered with extensive space around all sides. Full torso visible with significant background space above and around subject. Background: {background}. Lighting: {lighting}. Authentic front-facing smartphone camera quality with slight motion blur, natural skin imperfections, uneven lighting, slightly off-center composition. Include realistic flaws: minor focus issues, natural skin texture with pores and slight blemishes, casual messy hair, wrinkled clothing, candid unposed expression. Other arm relaxed at side, natural one-handed selfie pose. Maintain exact facial features, bone structure, and identity from reference image. Raw unfiltered smartphone selfie aesthetic with imperfect framing and natural shadows.`,
        
        two_handed: `Transform this passport photo into a natural selfie: Person wearing a casual {tshirt} t-shirt, taking a front-facing camera selfie with both arms visible in frame, looking directly at camera with a subtle natural smile. Shot in portrait orientation zoomed out to show head centered with extensive space around all sides. Full torso visible with significant background space above and around subject. Background: {background}. Lighting: {lighting}. Authentic front-facing smartphone camera quality with slight motion blur, natural skin imperfections, uneven lighting, slightly off-center composition. Include realistic flaws: minor focus issues, natural skin texture with pores and slight blemishes, casual messy hair, wrinkled clothing, candid unposed expression. Both arms extended naturally showing hands and forearms in frame. Maintain exact facial features, bone structure, and identity from reference image. Raw unfiltered smartphone selfie aesthetic with imperfect framing and natural shadows.`
      }
    },
    
    male: {
      landscape: {
        one_handed: `Transform this passport photo into a natural male selfie: Man wearing a casual {tshirt} t-shirt, taking a front-facing camera selfie with one arm extended but phone not visible in frame, looking directly at camera with a confident, relaxed expression. Shot in landscape orientation zoomed out to show head centered with extensive space around all sides. Full torso and shoulders visible with significant background space above, below, and around subject. Background: {background}. Lighting: {lighting}. Authentic front-facing smartphone camera quality with slight motion blur, natural skin imperfections, uneven lighting, slightly off-center composition. Include realistic flaws: minor focus issues, natural skin texture with pores and slight stubble, casual messy hair, wrinkled clothing, candid masculine expression. Other arm relaxed at side, natural one-handed selfie pose. Maintain exact facial features, bone structure, and identity from reference image. Raw unfiltered smartphone selfie aesthetic with imperfect framing and natural shadows.`,
        
        two_handed: `Transform this passport photo into a natural male selfie: Man wearing a casual {tshirt} t-shirt, taking a front-facing camera selfie with both arms visible in frame, looking directly at camera with a confident, relaxed expression. Shot in landscape orientation zoomed out to show head centered with extensive space around all sides. Full torso and shoulders visible with significant background space above, below, and around subject. Background: {background}. Lighting: {lighting}. Authentic front-facing smartphone camera quality with slight motion blur, natural skin imperfections, uneven lighting, slightly off-center composition. Include realistic flaws: minor focus issues, natural skin texture with pores and slight stubble, casual messy hair, wrinkled clothing, candid masculine expression. Both arms extended naturally showing hands and forearms in frame. Maintain exact facial features, bone structure, and identity from reference image. Raw unfiltered smartphone selfie aesthetic with imperfect framing and natural shadows.`
      },
      
      portrait: {
        one_handed: `Transform this passport photo into a natural male selfie: Man wearing a casual {tshirt} t-shirt, taking a front-facing camera selfie with one arm extended but phone not visible in frame, looking directly at camera with a confident, relaxed expression. Shot in portrait orientation zoomed out to show head centered with extensive space around all sides. Full torso visible with significant background space above and around subject. Background: {background}. Lighting: {lighting}. Authentic front-facing smartphone camera quality with slight motion blur, natural skin imperfections, uneven lighting, slightly off-center composition. Include realistic flaws: minor focus issues, natural skin texture with pores and slight stubble, casual messy hair, wrinkled clothing, candid masculine expression. Other arm relaxed at side, natural one-handed selfie pose. Maintain exact facial features, bone structure, and identity from reference image. Raw unfiltered smartphone selfie aesthetic with imperfect framing and natural shadows.`,
        
        two_handed: `Transform this passport photo into a natural male selfie: Man wearing a casual {tshirt} t-shirt, taking a front-facing camera selfie with both arms visible in frame, looking directly at camera with a confident, relaxed expression. Shot in portrait orientation zoomed out to show head centered with extensive space around all sides. Full torso visible with significant background space above and around subject. Background: {background}. Lighting: {lighting}. Authentic front-facing smartphone camera quality with slight motion blur, natural skin imperfections, uneven lighting, slightly off-center composition. Include realistic flaws: minor focus issues, natural skin texture with pores and slight stubble, casual messy hair, wrinkled clothing, candid masculine expression. Both arms extended naturally showing hands and forearms in frame. Maintain exact facial features, bone structure, and identity from reference image. Raw unfiltered smartphone selfie aesthetic with imperfect framing and natural shadows.`
      }
    },
    
    female: {
      landscape: {
        one_handed: `Transform this passport photo into a natural female selfie: Woman wearing a casual {tshirt} t-shirt, taking a front-facing camera selfie with one arm extended but phone not visible in frame, looking directly at camera with a warm, natural smile. Shot in landscape orientation zoomed out to show head centered with extensive space around all sides. Full torso and shoulders visible with significant background space above, below, and around subject. Background: {background}. Lighting: {lighting}. Authentic front-facing smartphone camera quality with slight motion blur, natural skin imperfections, uneven lighting, slightly off-center composition. Include realistic flaws: minor focus issues, natural skin texture with pores and minimal makeup, casual messy hair, wrinkled clothing, candid feminine expression. Other arm relaxed at side, natural one-handed selfie pose. Maintain exact facial features, bone structure, and identity from reference image. Raw unfiltered smartphone selfie aesthetic with imperfect framing and natural shadows.`,
        
        two_handed: `Transform this passport photo into a natural female selfie: Woman wearing a casual {tshirt} t-shirt, taking a front-facing camera selfie with both arms visible in frame, looking directly at camera with a warm, natural smile. Shot in landscape orientation zoomed out to show head centered with extensive space around all sides. Full torso and shoulders visible with significant background space above, below, and around subject. Background: {background}. Lighting: {lighting}. Authentic front-facing smartphone camera quality with slight motion blur, natural skin imperfections, uneven lighting, slightly off-center composition. Include realistic flaws: minor focus issues, natural skin texture with pores and minimal makeup, casual messy hair, wrinkled clothing, candid feminine expression. Both arms extended naturally showing hands and forearms in frame. Maintain exact facial features, bone structure, and identity from reference image. Raw unfiltered smartphone selfie aesthetic with imperfect framing and natural shadows.`
      },
      
      portrait: {
        one_handed: `Transform this passport photo into a natural female selfie: Woman wearing a casual {tshirt} t-shirt, taking a front-facing camera selfie with one arm extended but phone not visible in frame, looking directly at camera with a warm, natural smile. Shot in portrait orientation zoomed out to show head centered with extensive space around all sides. Full torso visible with significant background space above and around subject. Background: {background}. Lighting: {lighting}. Authentic front-facing smartphone camera quality with slight motion blur, natural skin imperfections, uneven lighting, slightly off-center composition. Include realistic flaws: minor focus issues, natural skin texture with pores and minimal makeup, casual messy hair, wrinkled clothing, candid feminine expression. Other arm relaxed at side, natural one-handed selfie pose. Maintain exact facial features, bone structure, and identity from reference image. Raw unfiltered smartphone selfie aesthetic with imperfect framing and natural shadows.`,
        
        two_handed: `Transform this passport photo into a natural female selfie: Woman wearing a casual {tshirt} t-shirt, taking a front-facing camera selfie with both arms visible in frame, looking directly at camera with a warm, natural smile. Shot in portrait orientation zoomed out to show head centered with extensive space around all sides. Full torso visible with significant background space above and around subject. Background: {background}. Lighting: {lighting}. Authentic front-facing smartphone camera quality with slight motion blur, natural skin imperfections, uneven lighting, slightly off-center composition. Include realistic flaws: minor focus issues, natural skin texture with pores and minimal makeup, casual messy hair, wrinkled clothing, candid feminine expression. Both arms extended naturally showing hands and forearms in frame. Maintain exact facial features, bone structure, and identity from reference image. Raw unfiltered smartphone selfie aesthetic with imperfect framing and natural shadows.`
      }
    }
  };

  const backgroundOptions = [
    { value: 'cozy bedroom with warm lamp lighting', label: '🛏️ Cozy Bedroom', category: 'Indoor' },
    { value: 'modern kitchen with natural window light', label: '🍳 Modern Kitchen', category: 'Indoor' },
    { value: 'coffee shop with ambient lighting', label: '☕ Coffee Shop', category: 'Indoor' },
    { value: 'home office with desk lamp', label: '💻 Home Office', category: 'Indoor' },
    { value: 'living room during day', label: '🛋️ Living Room', category: 'Indoor' },
    { value: 'restaurant booth', label: '🍽️ Restaurant Booth', category: 'Indoor' },
    { value: 'outdoor park setting with trees', label: '🌳 Park Setting', category: 'Outdoor' },
    { value: 'outdoor balcony with city view', label: '🏙️ City Balcony', category: 'Outdoor' },
    { value: 'sunny backyard patio', label: '☀️ Backyard Patio', category: 'Outdoor' },
    { value: 'outdoor beach or lakeside', label: '🏖️ Beach/Lakeside', category: 'Outdoor' },
    { value: 'car interior', label: '🚗 Car Interior', category: 'Vehicle/Urban' },
    { value: 'urban rooftop', label: '🏢 Urban Rooftop', category: 'Vehicle/Urban' }
  ];

  const lightingOptions = [
    { value: 'bright sunny day', label: '☀️ Bright Sunny Day' },
    { value: 'soft overcast lighting', label: '☁️ Soft Overcast' },
    { value: 'golden hour warm glow', label: '🌅 Golden Hour' },
    { value: 'indoor warm lighting', label: '💡 Indoor Warm Light' },
    { value: 'natural window light', label: '🪟 Natural Window Light' },
    { value: 'soft morning light', label: '🌄 Soft Morning Light' },
    { value: 'evening ambient lighting', label: '🌆 Evening Ambient' }
  ];

  const tshirtColors = [
    { value: 'navy blue', label: 'Navy Blue', color: '#1e3a8a' },
    { value: 'black', label: 'Black', color: '#000000' },
    { value: 'white', label: 'White', color: '#ffffff' },
    { value: 'gray', label: 'Gray', color: '#6b7280' },
    { value: 'forest green', label: 'Forest Green', color: '#065f46' },
    { value: 'burgundy', label: 'Burgundy', color: '#7c2d12' },
    { value: 'charcoal', label: 'Charcoal', color: '#374151' },
    { value: 'olive', label: 'Olive', color: '#365314' }
  ];

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generatePrompt = () => {
    if (!formData.background || !formData.lighting) {
      alert('Please select both background and lighting options.');
      return;
    }

    setIsGenerating(true);
    
    setTimeout(() => {
      const template = promptTemplates[formData.gender][formData.orientation][formData.selfie_style];
      
      const prompt = template
        .replace('{tshirt}', formData.tshirt)
        .replace('{background}', formData.background)
        .replace('{lighting}', formData.lighting);
      
      setGeneratedPrompt(prompt);
      setShowResults(true);
      setIsGenerating(false);
    }, 1200);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopyMessage(true);
      setTimeout(() => setCopyMessage(false), 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const resetForm = () => {
    setShowResults(false);
    setGeneratedPrompt('');
  };

  const groupedBackgrounds = backgroundOptions.reduce((acc, option) => {
    if (!acc[option.category]) {
      acc[option.category] = [];
    }
    acc[option.category].push(option);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 p-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-gray-800/90 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 mb-6 text-center shadow-2xl">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-5xl animate-pulse">📸</div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI Selfie Prompt Generator
            </h1>
          </div>
          <p className="text-gray-300 text-xl font-light">Transform passport photos into authentic selfies with AI precision</p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">✨ For Flux/Konflux</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">🚀 Authentic Results</span>
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-gray-800/90 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
          <div className="space-y-10">
            {/* Gender Selection */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
                <span className="text-cyan-400">👤</span> Gender Style
              </h3>
              <div className="grid gap-4">
                {[
                  { value: 'neutral', label: 'Universal', desc: 'Gender-neutral prompts for all', icon: '🌐' },
                  { value: 'male', label: 'Male', desc: 'Masculine expressions & confident poses', icon: '👨' },
                  { value: 'female', label: 'Female', desc: 'Feminine expressions & natural poses', icon: '👩' }
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`group flex items-center p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-[1.02] ${
                      formData.gender === option.value
                        ? 'border-cyan-500 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 shadow-lg shadow-cyan-500/20'
                        : 'border-gray-600 bg-gray-700/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={option.value}
                      checked={formData.gender === option.value}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                      className="sr-only"
                    />
                    <div className="text-3xl mr-4">{option.icon}</div>
                    <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center transition-all ${
                      formData.gender === option.value
                        ? 'border-cyan-400 bg-cyan-400 shadow-lg shadow-cyan-400/30'
                        : 'border-gray-400 group-hover:border-cyan-400/70'
                    }`}>
                      {formData.gender === option.value && (
                        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white text-lg">{option.label}</div>
                      <div className="text-gray-300 text-sm">{option.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Orientation Selection */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
                <span className="text-cyan-400">📱</span> Image Orientation
              </h3>
              <div className="grid grid-cols-2 gap-6">
                                                        {[
                                            { value: 'landscape', label: 'Landscape', icon: '🖥️', desc: 'Wide format' },
                                            { value: 'portrait', label: 'Portrait', icon: '📲', desc: 'Tall format' }
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`group flex flex-col items-center p-8 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-105 ${
                      formData.orientation === option.value
                        ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 shadow-lg shadow-cyan-500/20'
                        : 'border-gray-600 bg-gray-700/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="orientation"
                      value={option.value}
                      checked={formData.orientation === option.value}
                      onChange={(e) => handleInputChange('orientation', e.target.value)}
                      className="sr-only"
                    />
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{option.icon}</div>
                    <div className="font-bold text-white text-xl mb-1">{option.label}</div>
                    <div className="text-gray-300 text-sm">{option.desc}</div>
                  </label>
                ))}
              </div>
            </div>

            {/* Selfie Style */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
                <span className="text-cyan-400">✋</span> Selfie Style
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: 'one_handed', label: 'One-Handed', desc: 'Natural single-arm selfie pose', icon: '☝️' },
                  { value: 'two_handed', label: 'Two-Handed', desc: 'Both hands visible in frame', icon: '🙌' }
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`group flex flex-col items-center p-8 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-105 ${
                      formData.selfie_style === option.value
                        ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 shadow-lg shadow-cyan-500/20'
                        : 'border-gray-600 bg-gray-700/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="selfie_style"
                      value={option.value}
                      checked={formData.selfie_style === option.value}
                      onChange={(e) => handleInputChange('selfie_style', e.target.value)}
                      className="sr-only"
                    />
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{option.icon}</div>
                    <div className="font-bold text-white text-xl mb-1">{option.label}</div>
                    <div className="text-gray-300 text-sm text-center">{option.desc}</div>
                  </label>
                ))}
              </div>
            </div>

            {/* Background Selection */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
                <span className="text-cyan-400">🖼️</span> Background Setting
              </h3>
              <select
                value={formData.background}
                onChange={(e) => handleInputChange('background', e.target.value)}
                title="Select background setting for your selfie"
                className="w-full p-5 border-2 border-gray-600 rounded-2xl focus:border-cyan-400 focus:outline-none bg-gray-700/50 text-white text-lg backdrop-blur-sm transition-all duration-300 hover:border-gray-500"
                required
              >
                <option value="" className="bg-gray-800">Choose a background setting...</option>
                {Object.entries(groupedBackgrounds).map(([category, options]) => (
                  <optgroup key={category} label={category} className="bg-gray-800">
                    {(options as typeof backgroundOptions).map((option) => (
                      <option key={option.value} value={option.value} className="bg-gray-800">
                        {option.label}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Lighting Selection */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
                <span className="text-cyan-400">☀️</span> Lighting Condition
              </h3>
              <select
                value={formData.lighting}
                onChange={(e) => handleInputChange('lighting', e.target.value)}
                title="Select lighting condition for your selfie"
                className="w-full p-5 border-2 border-gray-600 rounded-2xl focus:border-cyan-400 focus:outline-none bg-gray-700/50 text-white text-lg backdrop-blur-sm transition-all duration-300 hover:border-gray-500"
                required
              >
                <option value="" className="bg-gray-800">Choose lighting condition...</option>
                {lightingOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* T-shirt Color Selection */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
                <span className="text-cyan-400">👕</span> T-shirt Color
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tshirtColors.map((color) => (
                  <label
                    key={color.value}
                    className={`group flex items-center p-4 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-105 ${
                      formData.tshirt === color.value
                        ? 'border-cyan-500 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 shadow-lg shadow-cyan-500/20'
                        : 'border-gray-600 bg-gray-700/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="tshirt"
                      value={color.value}
                      checked={formData.tshirt === color.value}
                      onChange={(e) => handleInputChange('tshirt', e.target.value)}
                      className="sr-only"
                    />
                                                                    <div
                                                    className={`w-8 h-8 rounded-xl border-2 mr-3 flex-shrink-0 transition-transform group-hover:scale-110 ${
                                                        color.value === 'white' ? 'border-gray-400' : 'border-gray-500'
                                                    }`}
                                                    style={{ backgroundColor: color.color }} // eslint-disable-line react/forbid-component-props
                                                ></div>
                    <span className="text-white font-medium flex-1">{color.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generatePrompt}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white py-6 px-8 rounded-2xl font-bold text-xl hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
            >
              {isGenerating ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="animate-spin w-6 h-6 border-3 border-white border-t-transparent rounded-full"></div>
                  <span>Generating Magic...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl">✨</span>
                  <span>Generate Prompt</span>
                  <span className="text-2xl">🚀</span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {showResults && (
          <div className="bg-gray-800/90 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 mt-6 shadow-2xl">
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
              <span className="text-green-400">📋</span> Generated Prompt
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-normal">Ready to Use</span>
            </h3>
            <div className="space-y-6">
              <div className="relative">
                <textarea
                  value={generatedPrompt}
                  readOnly
                  className="w-full h-64 p-6 border-2 border-gray-600 rounded-2xl bg-gray-900/50 text-gray-100 font-mono text-sm resize-none backdrop-blur-sm focus:border-cyan-400 transition-colors"
                  placeholder="Your generated prompt will appear here..."
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
                >
                  <span className="text-xl">📋</span>
                  Copy to Clipboard
                </button>
                <button
                  onClick={resetForm}
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-2xl font-bold hover:from-gray-500 hover:to-gray-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-gray-500/25"
                >
                  <span className="text-xl">🔄</span>
                  Generate New
                </button>
              </div>
              {copyMessage && (
                <div className="flex items-center gap-3 bg-green-500/20 border border-green-500/30 text-green-400 p-4 rounded-2xl backdrop-blur-sm">
                  <span className="text-xl">✅</span>
                  <span className="font-semibold">Prompt copied to clipboard successfully!</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 mt-8 text-center">
          <p className="text-gray-400 text-lg">
            © 2025 AI Selfie Prompt Generator | Built for 
            <span className="text-cyan-400 font-semibold"> Black Forest Lab Flux/Konflux</span>
          </p>
          <div className="mt-2 flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>🎯 Precision Prompts</span>
            <span>•</span>
            <span>🔥 Authentic Results</span>
            <span>•</span>
            <span>⚡ Lightning Fast</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkSelfiePromptGenerator;