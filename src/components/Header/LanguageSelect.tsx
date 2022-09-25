/** @jsxImportSource react */
import type { FunctionComponent } from 'react';
import './LanguageSelect.css';
import { KNOWN_LANGUAGES, langPathRegex } from '../../languages';

const LanguageSelect: FunctionComponent<{ lang: string }> = ({ lang }) => {
	return (
		<div className="language-select-wrapper">
			<svg
				aria-hidden="true"
				focusable="false"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1024 1024"
				height="1.2em"
				width="1.2em"
			>
				<path fill="currentColor"
					d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z">
				</path>
				<path fill="currentColor"
					d="M725.888 315.008C676.48 428.672 624 513.28 568.576 568.64c-55.424 55.424-139.968 107.904-253.568 157.312a12.8 12.8 0 0 1-16.896-16.832c49.536-113.728 102.016-198.272 157.312-253.632 55.36-55.296 139.904-107.776 253.632-157.312a12.8 12.8 0 0 1 16.832 16.832z">	
				</path>
			</svg>
			<select
				className="language-select"
				value={lang}
				onChange={(e) => {
					const newLang = e.target.value;
					let actualDest = window.location.pathname.replace(langPathRegex, '/');
					if (actualDest == '/') actualDest = `/introduction`;
					window.location.pathname = '/' + newLang + '/introduction';
				}}
			>
				{Object.entries(KNOWN_LANGUAGES).map(([key, value]) => {
					return (
						<option value={value} key={value}>
							{key}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default LanguageSelect;