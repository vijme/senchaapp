/*
 * File: app/store/MyDirectStore.js
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

Ext.define('DemoApp.store.loginStore', {
    extend: 'Ext.data.Store',

    requires: [
        'DemoApp.model.login',
        'Ext.data.proxy.Direct',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'DemoApp.model.login',
        storeId: 'LoginStore',
        proxy: {
            type: 'direct',
            reader: {
                type: 'json'
            }
        }
    }
});