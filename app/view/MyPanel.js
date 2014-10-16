/*
 * File: app/view/MyPanel.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('DemoApp.view.MyPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.mypanel',

    requires: [
        'Ext.Button',
        'Ext.field.Text',
        'Ext.data.JsonP',
        'Ext.MessageBox'
    ],

    config: {
        html: 'heollo',
        items: [
            {
                xtype: 'button',
                itemId: 'pressJSON',
                text: 'MyButton12'
            },
            {
                xtype: 'textfield',
                label: 'Field',
                name: 'txtResult'
            }
        ],
        listeners: [
            {
                fn: 'onPressJSONTap',
                event: 'tap',
                delegate: '#pressJSON'
            }
        ]
    },

    onPressJSONTap: function(button, e, eOpts) {
                    Ext.data.JsonP.request({
                        url: "http://127.0.0.1:3000/login/create",
                        callbackName:'someCallback',
                        callback: function (success, result) {
                            var text = result.responseText;
                           Ext.Msg.alert('title',result, Ext.emptyFn);
                        }

                    });

    }

});