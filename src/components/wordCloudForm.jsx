import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const WordCloudForm = () => {
  const [theme, setTheme] = useState('');
	const [numWords, setNumWords] = useState('');
	const [bkgColor, setBkgColor] = useState('white');
	const [themeColor, setThemeColor] = useState('red');
	const [otherColors, setOtherColors] = useState(['blue', 'green', 'yellow']);
	const [fontWeight, setFontWeight] = useState('light');
	const [fontType, setFontType] = useState('serif');
	const [imageData, setImageData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const wordCloudImageRef = useRef(null);

	const setWordCloudImageRef = (element) => {
    wordCloudImageRef.current = element;
  };

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

		const requestBody = JSON.stringify({
			theme_word: theme,
			num_words: numWords,
			bkg_color: bkgColor,
			theme_color: themeColor,
			other_colors: otherColors,
			font_weight: fontWeight,
			font_type: fontType
  	});

		try {
			const response = await fetch('https://word-cloud-generator-ttv3.onrender.com/generate-cloud', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: requestBody
			});

			if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate word cloud');
      }

			const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setImageData(imageUrl);

		} catch(err) {
			setError(err.message || 'An error occurred');
		} finally {
			setLoading(false);
		}
	};	

	const renderImage = () => {
    if (imageData) {
      return (
        <div>
          <h3 style={{ paddingTop: '10px' }}>Generated Word Cloud</h3>
          <img
            ref={setWordCloudImageRef}
            src={imageData}
            alt="Generated Word Cloud"
            style={{ maxWidth: '700px', maxHeight: '600px', width: 'auto', height: 'auto', marginTop: '20px' }}
          />
					<div>
						<a 
							id='download-word-cloud'
							href={imageData}
							download="word-cloud.png"
							style={{
								marginTop: '20px',
    						display: 'inline-block',
								fontWeight: 'bold',
								fontSize: '25px'
							}}
						>
							Download <FontAwesomeIcon icon={faDownload} />
						</a>
					</div>
        </div>
      );
    }
    return null;
  };

	return (
		<div className='word-cloud-form-container'>
			<form id="word-cloud-form" onSubmit={handleSubmit}>
				<div className='word-cloud-form-inputs'>
					<input
						id='theme-word'
						type='text'
						name='theme'
						placeholder='Theme Word'
						value={theme}
						onChange={(e) => setTheme(e.target.value)}
						required
					/>
					<input
						type='number'
						name='num-words'
						min='1'
						max='10'
						placeholder='Number of Words (1 to 10)'
						value={numWords}
						onChange={(e) => setNumWords(e.target.value)}
						required
					/>
				</div>
				<div className='word-cloud-form-selects'>
					<div className='form-group'>
						<label htmlFor="bkg-color">Background Color</label>
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
					</div>
					<div className='form-group'>
						<label htmlFor="theme-color">Theme Word Color</label>
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
					</div>
					<div className='form-group'>
						<label htmlFor="other-color1">Other Color 1</label>
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
					</div>
					<div className='form-group'>
						<label htmlFor="other-color2">Other Color 2</label>
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
					</div>
					<div className='form-group'>
						<label htmlFor="other-color3">Other Color 3</label>
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
					</div>
					<div className='form-group'>
						<label htmlFor="font-weight">Font Weight</label>
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
					</div>
					<div className='form-group'>
						<label htmlFor="font-type">Font Type</label>
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
					</div>
				</div>
				<div className='word-cloud-form-submit'>
					<button type='submit' disabled={loading}>
						{loading ? "Generating... Please Wait!" : "Generate Word Cloud"}
					</button>
				</div>
			</form>
			{renderImage()}
			{error && 
				<p 
					style={{ color: 'red', textAlign: 'center', paddingTop: '10px' }}
				>
					Error: {error}. Reload page and try again.
				</p>
			}
		</div>
	);
};

export default WordCloudForm;