import { __ } from '@wordpress/i18n';

import { useBlockProps } from '@wordpress/block-editor';

import './edit.js';

export default function save(props) {
	return (
		<div { ...useBlockProps.save() }>
			<div className="main-banner" style={ {
				backgroundColor: props.attributes.backgroundColor,
				backgroundImage: "url(" + props.attributes.imageURL + ")",
				border: props.attributes.borderWidth + "px solid" + props.attributes.borderColor,
				} }>

				<h2 style={ { color: props.attributes.textColorMessage } }>
					{ props.attributes.textMessage }
				</h2>

				<div className="main-button">
					<a style={ {
						color: props.attributes.textColorButton,
						backgroundColor: props.attributes.backgroundColorButton,
						border: "3px solid" + props.attributes.borderColorButton,
					} }
					href={ props.attributes.buttonURL }
					target="_blank"
					>
						{ props.attributes.textButton }
					</a>
				</div>
			</div>
		</div>
	);
}
