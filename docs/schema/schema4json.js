// JSON2Schema
// File for ID 'schema_id': jsoneditor_app/schema/schema4json.js
// created with JSON2Schema: https://niehausbert.gitlab.io/JSON2Schema

vDataJSON.schema4json =  {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "additionalProperties": true,
    "title": "Text Annotation:",
    "definitions": {
        "comment": {
            "title": "Comment:",
            "type": "string",
            "format": "textarea",
            "default": ""
        },
        "yesno": {
            "default": "yes",
            "type": "string",
            "enum": [
                "yes",
                "no"
            ]
        }
    },
    "type": "object",
    "id": "https://niebert.github.io/json-editor",
    "options": {
        "disable_collapse": false,
        "disable_edit_json": false,
        "disable_properties": false,
        "collapsed": false,
        "hidden": false
    },
    "defaultProperties": [
        "title",
        "display_text",
        "textwidth",
        "angle",
        "height",
        "distance",
        "color"
    ],
    "properties": {
        "title": {
            "type": "string",
            "id": "/properties/title",
            "title": "Title",
            "default": "My Text in Aframe",
            "format": "text",
            "description": "Description for 'title' Type: 'string' Path: '/properties/title'",
            "options": {
                "hidden": false
            },
            "propertyOrder": 10
        },
        "display_text": {
            "type": "boolean",
            "id": "/properties/display_text",
            "title": "Display Text",
            "format": "checkbox",
            "default": true,
            "description": "A description for 'display_text'  Type: 'boolean'",
            "options": {
                "hidden": false
            },
            "propertyOrder": 20
        },
        "textwidth": {
            "type": "integer",
            "id": "/properties/textwidth",
            "title": "Textwidth",
            "default": 6,
            "description": "A description for 'textwidth'  Type: 'integer'",
            "options": {
                "hidden": false
            },
            "propertyOrder": 30
        },
        "angle": {
            "type": "integer",
            "id": "/properties/angle",
            "title": "Angle",
            "default": 0,
            "description": "A description for 'angle'  Type: 'integer'",
            "options": {
                "hidden": false
            },
            "propertyOrder": 40
        },
        "height": {
            "type": "number",
            "id": "/properties/height",
            "title": "Height",
            "default": 2.5,
            "description": "A description for 'height'  Type: 'number'",
            "options": {
                "hidden": false
            },
            "propertyOrder": 50
        },
        "distance": {
            "type": "number",
            "id": "/properties/distance",
            "title": "Distance",
            "default": 4.25,
            "description": "A description for 'distance'  Type: 'number'",
            "options": {
                "hidden": false
            },
            "propertyOrder": 60
        },
        "color": {
            "type": "string",
            "id": "/properties/color",
            "title": "Color",
            "default": "#12ca34",
            "format": "color",
            "description": "Description for 'color' Type: 'string' Path: '/properties/color'",
            "options": {
                "hidden": false
            },
            "propertyOrder": 70
        }
    }
};
