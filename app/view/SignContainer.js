
// Ext.define('DemoApp.view.SignContainer', {
//     extend: 'Ext.Container',
//     alias: 'widget.signcontainer',

Ext.define('DemoApp.view.SignContainer', {
     extend: 'Ext.form.Panel',
     alias: 'widget.myform',

    requires: [
        'Ext.TitleBar',
        'Ext.Button',
        'Ext.field.Email',
        'Ext.field.Password',
        'Ext.Ajax',
        'Ext.MessageBox'
    ],

    config: {
        scrollable: 'vertical',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'SIGN UP',
                items: [
                    {
                        xtype: 'button',
                        docked: 'left',
                        itemId: 'mybutton4',
                        ui: 'back',
                        text: 'BACK'
                    }
                ]
            },
            {
                xtype: 'textfield',
                id: 'txtFName',
                itemId: 'txtName',
                clearIcon: false,
                label: 'First Name',
                labelWidth: '35%',
                required: true
            },
            {
                xtype: 'textfield',
                id: 'txtLName',
                itemId: 'txtLName',
                clearIcon: false,
                label: 'Last Name',
                labelWidth: '35%',
                required: true,
                maxLength: 80
            },
            {
                xtype: 'selectfield',
                label: 'Gender',
                id: 'intGender',
                labelWidth: '35%',
                options: [
                    { text: 'Male', value: '0'},
                    { text: 'Female',value: '1'}
                ]
            },
            {
                xtype: 'textfield',
                id: 'txtHospID',
                label: 'HospitalID',
                labelWidth: '35%',
                required: true,
                maxLength: 40
            },
            {
                xtype: 'textfield',
                id: 'txtBirthday',
                label: 'Birthday',
                labelWidth: '35%',
                component:{type: 'date'}
            },
            {
                xtype: 'emailfield',
                id: 'txtEmail',
                label: 'emailID',
                labelWidth: '35%',
                required: true,
                maxLength: 80,
                placeHolder: 'email@example.com'
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
                xtype: 'passwordfield',
                height: 52,
                id: 'txtRePasswd',
                label: 'Retype Passwd',
                labelWidth: '45%',
                labelWrap: true,
                required: true,
                maxLength: 15
            },
            
            {
                xtype: 'button',
                itemId: 'pressSIGNUP',
                text: 'SIGNUP'
            }
        ],
        listeners: [
            {
                fn: 'onMybutton4Tap',
                event: 'tap',
                delegate: '#mybutton4'
            }
            // {
            //     fn: 'onPressSIGNUPTap',
            //     event: 'tap',
            //     delegate: '#pressSIGNUP'
            // }
        ]
    },

    onMybutton4Tap: function(button, e, eOpts) {
        Ext.Viewport.add(
            {   xtype: 'firstcontainer'  }
        );
        Ext.Viewport.setActiveItem(
            {   xtype: 'firstcontainer'  }
        );
    },

    onPressSIGNUPTap: function(button, e, eOpts) {
            }

}
);