import { __ } from '@wordpress/i18n';

import {
	InspectorControls,
	RichText,
	PanelColorSettings,
	MediaUpload,
	useBlockProps,
} from '@wordpress/block-editor';

import {
	Panel,
	PanelBody,
	TextControl,
	Button,

} from '@wordpress/components';

import './index.js';

export default function Edit(props) {
	
	const newBorderWidth = ( borderWidth ) => props.setAttributes( { borderWidth } )

	const newBackgroundColor = ( backgroundColor ) => props.setAttributes({ backgroundColor});

	const newBorderColor = ( borderColor ) => props.setAttributes({ borderColor });
	
	const newTextColorMessage = ( textColorMessage ) => props.setAttributes({ textColorMessage });
	
	const newTextColorButton = ( textColorButton ) => props.setAttributes({ textColorButton });
	
	const newBackgroundColorButton = ( backgroundColorButton ) => props.setAttributes({ backgroundColorButton });
	
	const newBorderColorButton = ( borderColorButton ) => props.setAttributes({ borderColorButton });

	const uploadBackgroundImage = ( media ) => props.setAttributes( { imageURL: media.url } );
	
	const deleteBackgroundImage = () => {
		if(props.attributes.imageURL) {
			alert( wp.i18n.__( "Do you really want to delete Backgroun Image?" ) );
			props.setAttributes( { imageURL: null } ) 
		} else { }
	}

	const newButtonURL = ( buttonURL ) => props.setAttributes( { buttonURL } );

	const newTextMessage = ( textMessage ) => props.setAttributes( { textMessage } );

	const newTextButton = ( textButton ) => props.setAttributes( { textButton } );


	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
			<p><b>
					<TextControl
						label={ wp.i18n.__("Border Width:") }
						placeholder={ wp.i18n.__( "enter number" ) }
						value={ props.attributes.borderWidth }
						onChange={ newBorderWidth }
					/>
				</b></p>
				<Panel>
					<PanelBody title= { wp.i18n.__("Banner Settings") }>
						<PanelColorSettings
							title={ wp.i18n.__('Color Options') }
							colorSettings={ [
								{
									label: wp.i18n.__('Background Color'),
									value: props.attributes.backgroundColor,
									onChange: newBackgroundColor
								},
								{
									label: wp.i18n.__('Border Color'),
									value: props.attributes.borderColor,
									onChange: newBorderColor

								},
								{
									label: wp.i18n.__('Text Color Message'),
									value: props.attributes.textColorMessage,
									onChange: newTextColorMessage
								},
								{
									label: wp.i18n.__('Text Color Button'),
									value: props.attributes.textColorButton,
									onChange: newTextColorButton
								},
								{
									label: wp.i18n.__('Background Color Button'),
									value: props.attributes.backgroundColorButton,
									onChange: newBackgroundColorButton
								},
								{
									label: wp.i18n.__('Border Color Button'),
									value: props.attributes.borderColorButton,
									onChange: newBorderColorButton
								},
							] }
						/>
						<hr></hr>
						<MediaUpload
							onSelect={ uploadBackgroundImage }
							value={ props.attributes.imageURL }
							render={ ( { open } ) => (
								<Button
									className={ "button button-large" }
									onClick={ open }
								>
									{ wp.i18n.__( ' Upload Background Image' ) }
								</Button>
							) }
						>
						</MediaUpload>
						<p>	
							{ props.isSelected ? (
								<Button
									className="button button-large"
									style={ { color: "red" } } 
									onClick={ deleteBackgroundImage }
								>
									{ wp.i18n. __("Delete Background Image") }
								</Button>
							) : null }
						</p>
					</PanelBody>
				</Panel>
				<hr></hr>
				<p><b>
					<TextControl
						label={ wp.i18n.__("Button URL:") }
						placeholder={ wp.i18n.__( "https://enter/your/url.com" ) }
						value={ props.attributes.buttonURL }
						onChange={ newButtonURL }
					/>
				</b></p>
			</InspectorControls>

			<div className="main-banner" style={ {
				backgroundColor: props.attributes.backgroundColor,
				backgroundImage: "url(" + props.attributes.imageURL + ")",
				border: props.attributes.borderWidth + "px solid" + props.attributes.borderColor,
			} }>
				<RichText
					tagName="h2"
					placeholder={ wp.i18n.__( 'Enter your message text', 'hundredth-block' ) }
					value={props.attributes.textMessage}
					onChange={ newTextMessage }
					style={ { color: props.attributes.textColorMessage } }
				/>

				<div className="main-button">
					<RichText
						tagName="a"
						placeholder={ wp.i18n.__( 'Enter your button name', 'hundredth-block' ) }
						value={props.attributes.textButton}
						onChange={ newTextButton }
						style={ {
							color: props.attributes.textColorButton,
							backgroundColor: props.attributes.backgroundColorButton,
							border: "3px solid" + props.attributes.borderColorButton,
						} }
					/>
				</div>
			</div>
		</div>	
	);
}
	