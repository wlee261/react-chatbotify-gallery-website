import React, { useEffect, useRef } from 'react';

import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { downloadThemeContent } from '../../utils';
import { Theme } from '../../interfaces/Theme';

type ThemeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  theme: Theme;
};

/**
 * Modal to popup for showing theme details.
 */
const ThemeModal: React.FC<ThemeModalProps> = ({ isOpen, onClose, theme }) => {
	const modalRef = useRef<HTMLDivElement>(null);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { t } = useTranslation();

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
        !modalRef.current.contains(event.target as Node)
			) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.body.style.overflow = 'unset';
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	const onDownload = () => {
		downloadThemeContent(
			theme.content.settings,
			theme.content.inlineStyles,
			theme.content.cssStyles,
			theme.name
		);
	};

	const modalContent = (
		<div
			className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50
        flex items-center justify-center pointer-events-auto"
		>
			<div
				ref={modalRef}
				className="relative bg-accent-950 p-6 rounded-lg shadow-lg max-w-[53rem] w-[70%] m-4 text-accent-300"
			>
				<button
					type="button"
					onClick={onClose}
					className="absolute top-2 right-5 text-gray-500 text-2xl"
				>
					&times;
				</button>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
					<div className="flex flex-col items-center md:items-start h-full">
						<h1 className="text-accent-50 text-2xl">{theme.name}</h1>
						<div className="mb-2">
							<a
								href={`https://github.com/${theme.github}`}
								className="underline"
							>
								{theme.authorName}
							</a>
						</div>
						<div className="flex flex-wrap gap-2 mb-2">
							{theme.tags.map((tag, index) => (
								<span
									key={`tag-${index.toString()}`}
									className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
								>
									{tag}
								</span>
							))}
						</div>
						<div className="mb-3">{theme.description}</div>
						<div className="font-semibold">ID:</div>
						<div className="mb-4">{theme.id}</div>
						<div className="font-semibold">Version:</div>
						<div className="mb-4">{theme.version}</div>
						<button
							type="button"
							onClick={() => onDownload()}
							className="w-[100px] rounded-md text-white bg-blue-500 h-[40px]"
						>
							Download
						</button>
					</div>
					<div className="flex flex-col items-center">
						<img
							src={theme.themeImg}
							alt={theme.name}
							className="h-[400px] rounded-lg"
						/>
					</div>
				</div>
			</div>
		</div>
	);

	return ReactDOM.createPortal(
		modalContent,
		document.getElementById('modal-container') || document.body
	);
};

export default ThemeModal;
