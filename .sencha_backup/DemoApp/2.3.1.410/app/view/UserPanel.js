/*
 * File: app/view/UserPanel.js
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

Ext.define('DemoApp.view.UserPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.userpanel',

    requires: [
        'Ext.picker.Date',
        'Ext.Button'
    ],

    config: {
        centered: false,
        padding: 50,
        items: [
            {
                xtype: 'datepicker',
                bottom: 40,
                height: 300,
                value: {
                    year: 2014,
                    month: 9,
                    day: 23
                },
                yearFrom: 1930,
                yearTo: 2100
            },
            {
                xtype: 'button',
                text: 'Enter Vital Signs For:'
            }
        ]
    }

});