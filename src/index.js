import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';

registerBlockType( 'create-block/hundredth-block', {

	icon: "format-image",
	
	attributes: {
		textMessage: {
            type: 'string',
            source: 'html',
            selector: 'h2',
            default: wp.i18n.__('Your message text'),
        },
        textColorMessage: {
            type: 'string',
            default: '#ffffff',
        },
        backgroundColor: {
            type: 'string',
            default: '#8ED1FC',
        },
        borderColor: {
            type: 'string',
            dafault: '#ffffff'
        },
        borderWidth: {
            type: 'string',
            default: '10',
        },
        textButton: {
            type: 'string',
            sourse: 'html',
            slector: 'a',
            default: wp.i18n.__('Your button name')
        },
        buttonURL: {
            type: 'url',
            default: 'https://wordpress.org'
        },
        textColorButton: {
            type: 'string',
            default: '#000000',
        },
        backgroundColorButton: {
            type: 'string',
            default: '#00D084',
        },
        borderColorButton: {
            type:'string',
            default: '#000000'
        },

         urlImage: {
            type: 'string',
        },
	},
	/**
	 * 	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save,
} );
