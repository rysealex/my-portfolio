import React, { useState, useEffect, useRef } from 'react';

const WordCloudForm = () => {
  const [theme, setTheme] = useState('');
	const [numWords, setNumWords] = useState();
	const [bkgColor, setBkgColor] = useState('white');
	const [themeColor, setThemeColor] = useState('red');
	const [otherColors, setOtherColors] = useState(['blue', 'green', 'yellow']);
	const [fontWeight, setFontWeight] = useState('light');
	const [fontType, setFontType] = useState('serif');
	const [imageData, setImageData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const imgRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
    return () => {
      if (imageData) {
        URL.revokeObjectURL(imageData);
      }
    };
  }, [imageData]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
    setImageData(null);
		setError(null);

		try {
			const response = await fetch('https://word-cloud-generator-ttv3.onrender.com/generate-cloud', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ 
					theme_word: theme, 
					num_words: numWords,
					bkg_color: bkgColor,
          theme_color: themeColor,
          other_colors: otherColors,
          font_weight: fontWeight,
          font_type: fontType
				})
			});

			if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate word cloud');
      }

			const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setImageData(imageUrl);

		} catch(err) {
			console.error('Error generating word cloud: ', err);
			setError(err.message || 'An error occurred');
		} finally {
			setLoading(false);
		}
	};	

	const renderImage = () => {
    if (imageData) {
      return (
        <div>
          <h3>Generated Word Cloud:</h3>
          <img
            ref={imgRef}
            src={imageData}
            alt="Generated Word Cloud"
            style={{ maxWidth: '500px', maxHeight: '500px', width: 'auto', height: 'auto' }}
          />
        </div>
      );
    }
    return null;
  };

	return (
		<div>
			<form id="word-cloud-form" onSubmit={handleSubmit}>
				<input
					id='theme-word'
					type='text'
					name='theme'
					placeholder='Enter theme word'
					value={theme}
					onChange={(e) => setTheme(e.target.value)}
					required
				/>
				<input
					type='number'
					name='num-words'
					min='1'
					max='75'
					value={numWords}
					onChange={(e) => setNumWords(e.target.value)}
					required
				/>
				<select
          name='bkg-color'
          value={bkgColor}
          onChange={(e) => setBkgColor(e.target.value)}
					required
        >
					<option value="white">White</option>
					<option value="black">Black</option>
					<option value="gray">Gray</option>
				</select>
				<select
          name='theme-color'
          value={themeColor}
          onChange={(e) => setThemeColor(e.target.value)}
					required
        >
					<option value="red">Red</option>
					<option value="blue">Blue</option>
					<option value="green">Green</option>
					<option value="yellow">Yellow</option>
					<option value="purple">Purple</option>
					<option value="orange">Orange</option>
				</select>
				<select
          name='other-color1'
          value={otherColors[0]}
          onChange={(e) => {
						const newColors = [...otherColors];
						newColors[0] = e.target.value;
						setOtherColors(newColors);
					}}
					required
        >
					<option value="red">Red</option>
					<option value="blue">Blue</option>
					<option value="green">Green</option>
					<option value="yellow">Yellow</option>
					<option value="purple">Purple</option>
					<option value="orange">Orange</option>
				</select>
				<select
          name='other-color2'
          value={otherColors[1]}
          onChange={(e) => {
						const newColors = [...otherColors];
						newColors[1] = e.target.value;
						setOtherColors(newColors);
					}}
					required
        >
					<option value="red">Red</option>
					<option value="blue">Blue</option>
					<option value="green">Green</option>
					<option value="yellow">Yellow</option>
					<option value="purple">Purple</option>
					<option value="orange">Orange</option>
				</select>
				<select
          name='other-color3'
          value={otherColors[2]}
          onChange={(e) => {
						const newColors = [...otherColors];
						newColors[2] = e.target.value;
						setOtherColors(newColors);
					}}
					required
        >
					<option value="red">Red</option>
					<option value="blue">Blue</option>
					<option value="green">Green</option>
					<option value="yellow">Yellow</option>
					<option value="purple">Purple</option>
					<option value="orange">Orange</option>
				</select>
				<select
          name="font-weight"
          value={fontWeight}
          onChange={(e) => setFontWeight(e.target.value)}
					required
        >
          <option value="light">Light</option>
          <option value="normal">Normal</option>
					<option value="bold">Bold</option>
        </select>
				<select
          name="font-type"
          value={fontType}
          onChange={(e) => setFontType(e.target.value)}
					required
        >
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans-Serif</option>
					<option value="monospace">Monospace</option>
					<option value="cursive">Cursive</option>
					{/*<option value="fantasy">Fantasy</option>*/}
        </select>
				<button type='submit' disabled={loading}>
					{loading ? "Generating..." : "Generate Word Cloud"}
				</button>
			</form>

			{renderImage()}
			{error && <p style={{ color: 'red' }}>Error: {error}</p>}
		</div>
	);
};

export default WordCloudForm;