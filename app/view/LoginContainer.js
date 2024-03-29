/*
 * File: app/view/LoginContainer.js
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

Ext.define('DemoApp.view.LoginContainer', {
    extend: 'Ext.Container',
    alias: 'widget.logincontainer',

    requires: [
        'Ext.form.Panel',
        'Ext.Button',
        'Ext.form.FieldSet',
        'Ext.field.Email',
        'Ext.field.Password'
    ],

    config: {
        items: [
        {
                xtype: 'titlebar',
                docked: 'top',
                title: 'LOGIN',
                items: [
                    {
                        xtype: 'button',
                        docked: 'left',
                        itemId: 'mybutton11',
                        ui: 'back',
                        text: 'BACK'
                    }
                ]
        },
        {
                xtype: 'textfield',
                id: 'txtEmail',
                itemId: 'txtEmail',
                clearIcon: false,
                label: 'Email ID',
                labelWidth: '35%',
                required: true
        },
        {
                xtype: 'passwordfield',
                id: 'txtPasswd',
                label: 'Passwd',
                labelWidth: '45%',
                required: true,
                maxLength: 15
        },
        {
                xtype: 'button',
                itemId: 'pressLOGIN',
                text: 'LOGIN'
        }],
        listeners: [
            {
                fn: 'onMybutton11Tap',
                event: 'tap',
                delegate: '#mybutton11'
            }
        ]
    },

    //this is for the back button
    onMybutton11Tap: function(button, e, eOpts) {
        Ext.Viewport.add(
            {
                xtype: 'firstcontainer'
            });
            Ext.Viewport.setActiveItem(
            {
                xtype: 'firstcontainer'
            });

    }

});